function mergeSort(arr) {
    // Base case: return single element arrays
    if (arr.length <= 1) return arr;
  
    // Find the middle point
    const mid = Math.floor(arr.length / 2);
  
    // Recursively sort the left and right halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    // Merge the sorted halves
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Add any remaining elements
    return result.concat(left.slice(i), right.slice(j));
  }
  
  // Example usage
  const unsortedArray = [5, 2, 8, 1, 4, 7];
  const sortedArray = mergeSort(unsortedArray);
  console.log("Unsorted:", unsortedArray);
  console.log("Sorted:", sortedArray); // Output: Unsorted: [5, 2, 8, 1, 4, 7], Sorted: [1, 2, 4, 5, 7, 8]  