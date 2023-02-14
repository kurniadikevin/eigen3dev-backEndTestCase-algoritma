
/* Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3 */

//SOAL4
const soal4 =(matrix)=>{
    let diagonalPertama= 0;
    let diagonalKedua= 0;
  
  //jumlah diagonal pertama
  for(let i=0;i< matrix.length; i++){
    diagonalPertama += matrix[i][i]
  }
  
  //jumlah diagonal kedua
   for(let i=0;i< matrix.length; i++){
    diagonalKedua +=  matrix[i][
      (matrix.length-1)-i
    ]
  }
  
  //pengurangan diagonal pertama dengan diagonal kedua
  return (diagonalPertama - diagonalKedua);
}


module.exports= soal4;