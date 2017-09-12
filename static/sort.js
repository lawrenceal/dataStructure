{

    let arr = [6, 5, 3, 1, 8, 7, 2, 4, 9, 0];

    let swap = (arr, i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    let bubbleSort = (arr) => {

        for(let i = 0; i < arr.length - 1; i++){

            for(let j = 0; j < arr.length - i - 1; j++){

                if(arr[j] > arr[j + 1]){

                    swap(arr, j, j + 1);
                }
            }
        }

        return arr;
    };

    console.log(bubbleSort(arr.slice(0)).toString());

    let selectionSort = (arr) => {

        for(let i = 0; i < arr.length - 1; i++){

            let index = i;

            for(let j = i + 1; j < arr.length; j++){

                if(arr[index] > arr[j]){

                    index = j;
                }
            }

            if(index !== i){
                swap(arr, i, index);
            }
        }

        return arr;
    };

    console.log(selectionSort(arr.slice(0)).toString());

    let insertSort = (arr) => {

        for(let i = 1; i < arr.length; i++){

            let get = arr[i], j = i - 1;

            while (j >= 0 && get < arr[j]){

                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = get;
        }

        return arr;
    };

    console.log(insertSort(arr.slice(0)).toString());

    let quickSort = (arr, left, right) => {

        if(left < right){

            let i = left, j = right, target = arr[left];

            while (i < j){

                while(i < j && arr[j] > target){
                    j--;
                }

                if(i < j){
                    arr[i] = arr[j];
                    i++;
                }

                while (i < j && arr[i] < target){
                    i++;
                }

                if(i < j){
                    arr[j] = arr[i];
                    j--;
                }
            }

            arr[i] = target;

            quickSort(arr, left, i - 1);
            quickSort(arr, i + 1, right);
        }
    };

    let newArr = arr.concat();
    quickSort(newArr, 0, newArr.length - 1);
    console.log("quick sort result = " + newArr.toString());

    let merge = (arr, start, middle, end) => {
        let tempArr = [], k = 0, i = start, j = middle + 1;

        while (i < middle + 1 && j < end + 1){

            if(arr[i] < arr[j]){
                tempArr[k++] = arr[i++];
            }else{
                tempArr[k++] = arr[j++];
            }
        }

        while (i < middle + 1){
            tempArr[k++] = arr[i++];
        }

        while(j < end + 1){
            tempArr[k++] = arr[j++];
        }

        for(i = 0, j = start; j < end + 1; i++, j++ ){
            arr[j] = tempArr[i];
        }

    };

    let mergeSort = (arr, start, end) => {

        if(start < end){
            let middle = Math.floor((end + start) / 2);
            mergeSort(arr, start, middle);
            mergeSort(arr, middle + 1, end);
            merge(arr, start, middle, end);
        }
    };

    let newMergeArr = arr.concat();
    mergeSort(newMergeArr, 0, newMergeArr.length - 1);
    console.log("merge sort result = " + newMergeArr.toString());

    // Parent(i) = floor((i-1)/2)，i 的父节点下标
    // Left(i) = 2i + 1，i 的左子节点下标
    // Right(i) = 2(i + 1)，i 的右子节点下标

    let maxHeapify = (arr, index, size) => {
        let iMax, iLeft, iRight;

        while (true){
            iMax = index;
            iLeft = 2 * index + 1;
            iRight = 2 * (index + 1);

            if(iLeft < size && arr[iMax] < arr[iLeft]){
                iMax = iLeft;
            }

            if(iRight < size && arr[iMax] < arr[iRight]){
                iMax = iRight;
            }

            if(iMax !== index){
                swap(arr, iMax, index);
                index = iMax;
            }else{
                break;
            }
        }
    };

    let buildMaxHeap = (arr) => {
        let iParent = Math.floor(arr.length / 2) - 1;
        for(let i = iParent; i >= 0; i--){
            maxHeapify(arr, i, arr.length);
        }
    };

    let heapSort = (arr) => {
        buildMaxHeap(arr);

        for(let i = arr.length - 1; i > 0; i--){
            swap(arr, i, 0);

            //this i = size
            maxHeapify(arr, 0, i);
        }

        return arr;
    };

    console.log('heap sort result = ' + heapSort(arr).toString());
}

{
    let arr = [6, 5, 3, 1, 8, 7, 2, 4, 9, 0];

    let merge = (left, right) => {
        let result = [], li = 0, ri =  0;

        while (li < left.length && ri < right.length){
            if(left[li] < right[ri]){
                result.push(left[li++]);
            }else{
                result.push(right[ri++]);
            }
        }

        while (li < left.length){
            result.push(left[li++]);
        }

        while (ri < right.length){
            result.push(right[ri++]);
        }

        return result;
    };

    let mergeSort = (arr) => {
        if(arr.length === 1){
            return arr;
        }

        let middle = Math.floor(arr.length / 2);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle, arr.length);
        return merge(mergeSort(left), mergeSort(right));
    };

    console.log("merge sort1 result = " +  mergeSort(arr).toString());

}

{

    let arr = [6, 5, 3, 1, 8, 7, 2, 4, 9, 0, 6, 5, 3, 1, 8, 7, 2, 4, 9, 0];

    let partition = (arr, left, right) => {

        let i = left, j = right, target = arr[i];

        if(i < j){

            while (i < j){

                while (i < j && arr[j] > target){
                    j--;
                }

                if(i < j){
                    arr[i] = arr[j];
                    i++;
                }

                while (i < j && arr[i] < target){
                    i++;
                }

                if(i < j){
                    arr[j] = arr[i];
                    j--;
                }
            }

            arr[i] = target;
        }

        return i;
    };

    let quickSort = (arr, start = 0, end = arr.length - 1) => {

        if(start < end){
            let stack = [start, end];

            while (stack.length){
                let right = stack.pop(),
                    left = stack.pop();

                let index = partition(arr, left, right);

                if(left < index){
                    stack.push(left);
                    stack.push(index - 1);
                }

                if(index < right){
                    stack.push(index + 1);
                    stack.push(right);
                }
            }
        }
    };

    quickSort(arr);

    console.log(arr);

}