import { Heap } from 'heap-js';

function vickreyAuction(bidders, reservePrice) {
    // Create a max-heap for bids above the reserve price
    const maxHeap = new Heap();
    const bidderMap = new Map();

    for (const [bidder, bids] of Object.entries(bidders)) {
        for (const bid of bids) {
            if (bid >= reservePrice) {
                maxHeap.push(-bid);
                bidderMap.set(-bid, bidder);
            }
        }
    }

    // If there are no valid bids, return null for both winner and winning price
    if (maxHeap.size === 0) {
        return [null, reservePrice];
    }

    // Find the highest bid
    const highestBid = -maxHeap.pop();
    const winningBidder = bidderMap.get(highestBid);

    // Find the second highest bid
    let secondHighestBid = reservePrice;
    if (maxHeap.size > 0) {
        secondHighestBid = -maxHeap.pop();
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

const [winner, winningPrice] = vickreyAuction(bidders, reservePrice);
console.log(`The winning bidder is ${winner} with a winning price of ${winningPrice} euros.`);
