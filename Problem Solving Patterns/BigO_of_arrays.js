/*
    insertion: depends,
    removal: depends,
    searching: O(n),
    access: O(1)
*/

//insertion, removal at the beginning of an array is expensive because of re-indexing.
// at the end it involves constant time O(1)
// push() and pop() are always more efficient than shift() and unshift()

/**
 * push() O(1)
 * pop() O(1)
 * shift O(n) reindexing
 * unshift O(n) reindexing
 * concat() O(n) 
 * slice() O(n) 
 * splice() O(n)
 * sort() O(N*log(n))
 * forEach, map, reduce... O(n)
 */

