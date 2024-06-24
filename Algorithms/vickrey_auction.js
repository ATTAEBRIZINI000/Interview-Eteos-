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
