{
    //binary search 被搜索的数据结构已经排序

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let binarySearch = (arr, target) => {

        let low = 0, high = arr.length - 1, middle, element;

        while (low <= high){
            middle = Math.floor((low + high) / 2);
            element = arr[middle];

            if(element < target){
                low = middle + 1;
            }else if(element > target){
                high = middle - 1;
            }else{
                return middle;
            }
        }

        return -1;
    };

    console.log(binarySearch(arr, 4));

}