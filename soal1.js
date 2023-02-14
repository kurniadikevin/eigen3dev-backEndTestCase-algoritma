///SOAL 1 'NEGIE1' to 'EIGEN1' 

const soal1=(input)=>{

    let arrInput= input.split('');// split all item in array

   //convert string type of number to number type
   let convertNumArr = arrInput.map((item)=>{
     if( Number(item)){
       return Number(item)
     } else {
       return item;
    }
   })

   //make array of string only
   let arrStr= convertNumArr.filter((item)=>{
     return typeof item === 'string';
   })

   //make array of number only
   let arrNum = convertNumArr.filter((item)=>{
     return typeof item === 'number';
   })

   //reverse string only array
   let arrStrReverse= arrStr.reverse();

  // join both array to string and combined both array
  return arrStrReverse.join('') + arrNum.join('')
}


module.exports= soal1;