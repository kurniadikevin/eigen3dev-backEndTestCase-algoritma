const soal4 = require('../soal4');

test('Pengurangan dari jumlah diagonal sebuah matrik N x N',function(){
    expect( soal4(
        [[1, 2, 0], [4, 5, 6], [7, 8, 9]]))
        .toBe(3);
});

test('Pengurangan dari jumlah diagonal sebuah matrik N x N',function(){
    expect( soal4(
        [[1, 2, 3], [3, 2, 1], [8, 8, 8]]))
        .toBe(-2);
});