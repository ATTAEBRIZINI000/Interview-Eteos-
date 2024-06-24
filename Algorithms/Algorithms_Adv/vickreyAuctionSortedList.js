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
