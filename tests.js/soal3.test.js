const soal3= require('../soal3');

test('output jumlah kata dalam query yang terdapat dalam input secara berurutan',function(){
    expect( soal3(['xc', 'dz', 'bbb', 'dz'],['bbb', 'ac', 'dz'])).toStrictEqual([1, 0, 2]);
});

test('output jumlah kata dalam query yang terdapat dalam input secara berurutan',function(){
    expect( soal3(['aa', 'zz', 'xb', 'zz'],['zz', 'aa', 'xz'])).toStrictEqual([2, 1, 0]);
});