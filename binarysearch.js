function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
  const num = [45, 12, 6, 89, 2, 5];
  const sortedNum = mergeSort(num);
  console.log(sortedNum)
  function binarySearch(array, target) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex <= rightIndex) {
      const midIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (array[midIndex] === target) {
        return midIndex;
      } else if (array[midIndex] < target) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 1;
      }
    }
    return null;
  }
  const target = 6;
  const targetIndex = binarySearch(sortedNum, target);
  console.log(targetIndex);
  //QUESTION 2
  function mergeSortDescend(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return mergeDescend(mergeSortDescend(left), mergeSortDescend(right));
  }
  function mergeDescend(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] >= right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  let arr = [123, 89, 5, 23, 9, 56];
  let sortedArr = mergeSortDescend(arr);
  console.log(sortedArr);

  //QUESTION 3
  function mergeSorting(array) {
    if (array.length <= 1) {
      return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    const right = array.slice(middle);
    return sorting(mergeSorting(left), mergeSort(right));
  }
  function sorting(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
   let arr2 = [1,4,78,2,67,3];
  const sortedarr2 = mergeSorting(arr2);
  console.log(sortedarr2)
  function binarySearch2(arr2, target2) {
    let leftIndex = 0;
    let rightIndex = arr2.length - 1;
    while (leftIndex <= rightIndex) {
      let midIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (arr2[midIndex] === target) {
        return midIndex;
      } else if (arr2[midIndex] < target2) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 1;
      }
    }
    return null;
  }
  let target2 = 34;
  let target2Index = binarySearch2(sortedarr2, target2);
  console.log(target2Index);