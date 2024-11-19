{
    const sumArray = (arr: number[]): number => {
        let sum: number = 0;
        let i: number;
        for (i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    const result = sumArray([1, 2, 3, 4, 5]);

}