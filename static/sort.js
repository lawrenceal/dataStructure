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





}