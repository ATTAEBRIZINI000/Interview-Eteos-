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



