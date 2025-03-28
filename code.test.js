// Setup Code to copy and paste
const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

// Manually create tests. Not ideal but I can't figure out prooperty based testing


// Empty Graph
assert.deepStrictEqual(hasCycle([]), false);

// Single Node
assert.deepStrictEqual(hasCycle([[]]), false);
assert.deepStrictEqual(hasCycle([[0]]), true);

// Double Node
assert.deepStrictEqual(hasCycle([[], []]), false);
assert.deepStrictEqual(hasCycle([[0], [0]]), true);
assert.deepStrictEqual(hasCycle([[0], [1]]), true);
assert.deepStrictEqual(hasCycle([[1], [0]]), true);
assert.deepStrictEqual(hasCycle([[1], [1]]), true);
assert.deepStrictEqual(hasCycle([[], [0]]), false);
assert.deepStrictEqual(hasCycle([[1], []]), false);
assert.deepStrictEqual(hasCycle([[], [1]]), true);

// Triple Node
assert.deepStrictEqual(hasCycle([[], [], []]), false);
assert.deepStrictEqual(hasCycle([[1], [], []]), false);
assert.deepStrictEqual(hasCycle([[1], [0], []]), true);
assert.deepStrictEqual(hasCycle([[], [], [2]]), true);
assert.deepStrictEqual(hasCycle([[1], [2], [0]]), true);
assert.deepStrictEqual(hasCycle([[2], [0], [1]]), true);


// Many Node
assert.deepStrictEqual(hasCycle([[1, 2, 5], [4], [3, 5], [4], [6], []]), false);
assert.deepStrictEqual(hasCycle([[1, 2, 5], [4], [3, 5], [4], [0,6], []]), true);assert.deepStrictEqual(hasCycle([[1, 2], [4], [3, 5], [4], [0,6], []]), true);