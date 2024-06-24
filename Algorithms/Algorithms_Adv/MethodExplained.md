the Vickrey Auction problem Node.js for both the **Sorted List with Binary Search** and the **Balanced Binary Search Tree (BST)**.

### 1. Sorted List with Binary Search

```javascript
function vickreyAuctionSortedList(bidders, reservePrice) {
    // Collect all valid bids into a sorted list
    let validBids = [];
    for (let bids of Object.values(bidders)) {
        for (let bid of bids) {
            if (bid >= reservePrice) {
                validBids.push(bid);
            }
        }
    }
    validBids.sort((a, b) => b - a); // Sort in descending order

    // If there are no valid bids, return null for both winner and winning price
    if (validBids.length === 0) {
        return [null, reservePrice];
    }

    // The highest bid is the first element in the sorted list
    const highestBid = validBids[0];

    // The second highest bid is the second element in the sorted list or the reserve price if there is no second element
    const secondHighestBid = validBids.length > 1 ? validBids[1] : reservePrice;

    // Determine the winning bidder
    let winningBidder = null;
    for (let [bidder, bids] of Object.entries(bidders)) {
        if (bids.includes(highestBid)) {
            winningBidder = bidder;
            break;
        }
    }

    // The winning price is the second highest bid or the reserve price if no second highest bid exists
    const winningPrice = secondHighestBid;

    return [winningBidder, winningPrice];
}

// Example usage
const bidders = {
    'A': [110, 130],
    'B': [],
    'C': [125],
    'D': [105, 115, 90],
    'E': [132, 135, 140]
};
const reservePrice = 100;

const [winner, winningPrice] = vickreyAuctionSortedList(bidders, reservePrice);
console.log(`The winning bidder is ${winner} with a winning price of ${winningPrice} euros.`);
```

### 2. Balanced Binary Search Tree (BST)

For the BST approach, we'll use the `sorted-btree` library to simulate a balanced BST. First, you need to install the library:

```bash
npm install sorted-btree
```

```javascript
import btree from 'sorted-btree';

function vickreyAuctionBST(bidders, reservePrice) {
    // Create a balanced BST for bids above the reserve price
    const BTree = btree.default || btree;
    const bst = new BTree();
    for (let [bidder, bids] of Object.entries(bidders)) {
        for (let bid of bids) {
            if (bid >= reservePrice) {
                bst.set(bid, bidder);
            }
        }
    }

    // If there are no valid bids, return null for both winner and winning price
    if (bst.size === 0) {
        return [null, reservePrice];
    }

    // Find the highest bid
    const highestBid = bst.maxKey();
    const winningBidder = bst.get(highestBid);

    // Find the second highest bid
    bst.delete(highestBid);
    const secondHighestBid = bst.size > 0 ? bst.maxKey() : reservePrice;

    // The winning price is the second highest bid or the reserve price if no second highest bid exists
    const winningPrice = secondHighestBid;

    return [winningBidder, winningPrice];
}
// Example usage
const bidders = {
    'A': [110, 130],
    'B': [],
    'C': [125],
    'D': [105, 115, 90],
    'E': [132, 135, 140]
};
const reservePrice = 100;

const [winner, winningPrice] = vickreyAuctionBST(bidders, reservePrice);
console.log(`The winning bidder is ${winner} with a winning price of ${winningPrice} euros.`);




```

### Explanation

1. **Sorted List with Binary Search:**
   - We collect all valid bids into a sorted list.
   - The highest bid is the first element in the sorted list.
   - The second highest bid is the second element in the sorted list or the reserve price if there is no second element.
   - We determine the winning bidder by checking which bidder made the highest bid.

2. **Balanced Binary Search Tree (BST):**
   - We use the `sorted-btree` library to simulate a balanced BST.
   - We insert all valid bids into the BST.
   - The highest bid is the maximum key in the BST.
   - The second highest bid is the new maximum key after removing the highest bid or the reserve price if there is no second highest bid.
   - We determine the winning bidder by checking which bidder made the highest bid.

