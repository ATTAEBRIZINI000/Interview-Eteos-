To improve the latency and CPU usage for the Vickrey Auction problem, We'll use a max-heap to efficiently find the highest and second-highest bids. JavaScript does not have a built-in max-heap, so we'll use a library like `heapify` to simulate a max-heap.

First, we need to install the `heap-js` library:

```bash
npm install heap-js
```

Here's the equivalent implementation in Node.js:

```javascript
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
```

### Explanation:
1. **Max-Heap Initialization**: We initialize a max-heap using the `Heapify` library and a `Map` to map negative bids back to their bidders.
2. **Heap Operations**: We push negative bids onto the heap to simulate a max-heap.
3. **Finding the Highest and Second Highest Bids**: We pop the heap to get the highest bid and then pop again to get the second highest bid.
4. **Determining the Winner**: The bidder associated with the highest bid is identified as the winner.
5. **Calculating the Winning Price**: The winning price is the second highest bid if it exists; otherwise, it is the reserve price.

This approach reduces the time complexity for finding the highest and second-highest bids from `O(n log n) to O(n log k)`, where k is the number of valid bids, making it more efficient for large datasets.
