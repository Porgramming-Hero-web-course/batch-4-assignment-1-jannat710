{
    const countWordOccurrences = (str:string,word:string)=>{
        let count:number = 0;
        let wordCount = str.split(" ");
        for (let i = 0; i < wordCount.length; i++){
            if(wordCount[i] === word){
                count++; 
            }
        }
        return count;
    }
    const result =countWordOccurrences("I love typescript", "typescript");

}