const soal2= require('../soal2');

test('Kata terpanjang dari kalimat',function(){
    expect(  soal2('Saya sangat senang mengerjakan soal algoritma')).toBe('mengerjakan')
});

test('Kata terpanjang dari kalimat yang memiliki dua kata terpanjang yang sama panjangnya',function(){
    expect(  soal2('Contoh penggunaan kata random dalam kalimat ini bisa membantu kalian memahami penempatan kata random yang tepat')).toBe('penggunaan')
});