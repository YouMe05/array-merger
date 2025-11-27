function mergeTwoSorted(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {

    const c3_ascending: number[] = [];
    for (let k = collection_3.length - 1; k >= 0; k--) {
        c3_ascending.push(collection_3[k]);
    }

    const merged_c1_c2 = mergeTwoSorted(collection_1, collection_2);

    const final_merged = mergeTwoSorted(merged_c1_c2, c3_ascending);

    return final_merged;
}

if (require.main === module) {
    const c1 = [1, 5, 9];
    const c2 = [2, 4, 10];
    const c3 = [8, 6, 3]; // Descending

    const result = merge(c1, c2, c3);
    console.log("Collection 1 (Ascending):", c1);
    console.log("Collection 2 (Ascending):", c2);
    console.log("Collection 3 (Descending):", c3);
    console.log("\nFinal Sorted Result:", result);
}