/* const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence) 
// mengerjakan: 11 character */

//SOAL2
const soal2 = (sentence)=>{
    let arrSentence = sentence.split(' ');
    let arrWordLength= arrSentence.map((item)=>{
        return item.length;
    })
     //find index of max number of length
    let maxLengthIndex= arrWordLength.indexOf(Math.max(...arrWordLength));
    
    return arrSentence[ maxLengthIndex]
}


module.exports= soal2;