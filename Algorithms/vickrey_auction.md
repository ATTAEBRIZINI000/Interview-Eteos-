To solve the Vickrey Auction problem, we'll follow a step-by-step approach to ensure clarity and correctness. using Python for this Problem, as it is well-suited for handling data structures and problem-solving.

### Step 1: Define the Input Data Structures
We need to represent the bidders and their bids, as well as the reserve price. We can use a dictionary to map bidders to their bids.

### Step 2: Determine the Winning Bidder and Price
We need to:
1. Identify the highest bid that meets or exceeds the reserve price.
2. Determine the second-highest bid among those that meet or exceed the reserve price.
3. If no such second-highest bid exists, the winning price is the reserve price.


```javascript
function vickreyAuction(bidders, reservePrice) {
    // Flatten all bids into a single array and filter out bids below the reserve price
    let allBids = [];
    for (let bids of Object.values(bidders)) {
        for (let bid of bids) {
            if (bid >= reservePrice) {
                allBids.push(bid);
            }
        }
    }

    // If there are no valid bids, return null for both winner and winning price
    if (allBids.length === 0) {
        return [null, reservePrice];
    }

    // Find the highest bid
    let highestBid = Math.max(...allBids);

    // Find the second highest bid
    allBids.splice(allBids.indexOf(highestBid), 1);
    let secondHighestBid = allBids.length > 0 ? Math.max(...allBids) : reservePrice;

    // Determine the winning bidder
    let winningBidder = null;
    for (let [bidder, bids] of Object.entries(bidders)) {
        if (bids.includes(highestBid)) {
            winningBidder = bidder;
            break;
        }
    }

    // The winning price is the second highest bid or the reserve price if no second highest bid exists
    let winningPrice = secondHighestBid;

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

const [winner, winningPrice] = vickreyAuction(bidders, reservePrice);
console.log(`The winning bidder is ${winner} with a winning price of ${winningPrice} euros.`);
```

### Explanation:
1. **Input Handling**: The function `vickrey_auction` takes a dictionary of bidders and their bids, and the reserve price.
2. **Filtering Bids**: We filter out bids that are below the reserve price.
3. **Finding the Highest and Second Highest Bids**: We identify the highest bid and then find the second highest bid among the remaining valid bids.
4. **Determining the Winner**: The bidder with the highest bid is identified as the winner.
5. **Calculating the Winning Price**: The winning price is the second highest bid if it exists; otherwise, it is the reserve price.

This solution ensures that the auction rules are followed correctly and provides a clear and readable implementation.
