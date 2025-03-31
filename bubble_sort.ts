const bubble_sort = (arr: number[]) => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
};

console.log(bubble_sort([1, 3, 7, 4, 2, 11, 1, 15]));
