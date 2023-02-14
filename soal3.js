/* INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, 
kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT */

//SOAL3
const soal3 = (input,query)=>{
 
    // find query word on input by making it into array and count array length
    const countQueryOnInput =(word)=>{
      let arrOfQuery= input.filter((el)=>{
        return el === word;
      })
      return arrOfQuery.length;
    }
    
    // making object of output that contain query as property and number of input on query as it value
    let outputObject={}
      query.forEach((item)=>{
        outputObject[item] = countQueryOnInput(item)
      })
    
    //return outputObject as array of object value
    return Object.values(outputObject);
  }
  
module.exports= soal3;