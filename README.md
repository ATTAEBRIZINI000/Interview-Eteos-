# Vickrey Auction Implementation with Different Data Structures

This interview demonstrates the implementation of a Vickrey auction using different data structures in JavaScript. The Vickrey auction is a type of sealed-bid auction where bidders submit bids without knowing the bids of others. The highest bidder wins the auction, but the price paid is the second-highest bid.

## Table of Contents

- [Introduction](#introduction)
- [Data Structures Explored](#data-structures-explored)
- [Steps to Implement](#steps-to-implement)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Introduction

In this interview, we explore two different data structures to implement the Vickrey auction:

1. **Max-Heap**: Using a max-heap to efficiently manage and retrieve the highest and second-highest bids.
2. **Balanced Binary Search Tree (BST)**: Using a balanced BST to maintain the bids in a sorted order for efficient retrieval.


## Data Structures Explored

### 1. Max-Heap

A max-heap is a specialized tree-based data structure that satisfies the heap property: the key at each node is greater than or equal to the keys at its children. This property allows for efficient retrieval of the maximum element.

### 2. Balanced Binary Search Tree (BST)

A balanced BST is a self-balancing binary search tree where the height of the two child subtrees of any node differs by at most one. This ensures that operations like search, insertion, and deletion all take O(log n) time on average.

## Steps to Implement

1. **Define the Auction Logic**:
   - Create functions to handle the auction logic for both data structures.
   - Implement the logic to collect bids, filter bids above the reserve price, and determine the highest and second-highest bids.

2. **Modularize the Code**:
   - Separate the auction logic into different modules for each data structure.
   - Use ES6 modules to import and export functions.

3. **Handle CommonJS Modules**:
   - For libraries that are CommonJS modules (like `sorted-btree`), use the default import and access named exports from the default export.


## Usage

To run the example usage, follow these steps:

1. Clone the repository:
   ```bash
   git clone Code-Repo-interview>
   cd Code-Repo-interview>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Dependencies

- `heap-js`: For implementing the max-heap.
- `sorted-btree`: For implementing the balanced BST.

