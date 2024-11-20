{
    const removeDuplicates = (arr: number[]): number[] => {
        let newArr: number[] = [];
        arr.forEach(element => {
            if (!newArr.includes(element)) {
                newArr.push(element);
            }
        });
        return newArr;
    }
    removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

}