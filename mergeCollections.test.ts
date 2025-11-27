import { merge } from './mergeCollections';

describe('merge', () => {

    test('should merge three standard collections correctly into ascending order', () => {
        // c1 & c2 are ascending
        const collection_1 = [1, 5, 9, 15]; 
        const collection_2 = [2, 4, 10]; 
        // c3 is descending
        const collection_3 = [12, 8, 3, 0]; 
        
        const expected = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 15];
        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual(expected);
    });
});