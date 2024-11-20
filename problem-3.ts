{
    const countWordOccurrences = (str:string,word:string): number=>{

        let count:number = 0;
        let wordCount = str.toLocaleLowerCase().split(" ");
        let lowerCaseWord = word.toLocaleLowerCase();

        for (let i = 0; i < wordCount.length; i++){
            if(wordCount[i] === lowerCaseWord){
                count++; 
            }
        }
        return count;
    }
    const result =countWordOccurrences("I love typescript", "typescript");

}