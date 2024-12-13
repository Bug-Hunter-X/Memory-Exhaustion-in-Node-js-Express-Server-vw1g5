# Node.js Memory Exhaustion Bug

This repository demonstrates a bug in a Node.js Express server that leads to memory exhaustion when attempting to send a large buffer as a response. The bug is caused by allocating a large buffer in memory without considering the available resources.  The solution involves streaming the response instead of allocating a large buffer in memory.

## Bug

The `bug.js` file contains the buggy code that creates a 1GB buffer and attempts to send it as a response. This will cause the server to crash if the available memory is less than 1GB.

## Solution

The `bugSolution.js` file provides a solution to this problem by streaming the response instead of sending a large buffer directly.  This approach avoids memory exhaustion by only loading a small portion of the data into memory at any given time.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `node bug.js`.
4. Observe the server crashing (or becoming unresponsive) after trying to access the `/` route.  If you have more than 1GB of available memory, the bug may not be immediately obvious; try increasing the buffer size in `bug.js`.
5. Run `node bugSolution.js`. The server should now function correctly, handling requests without crashing.