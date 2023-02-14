const soal1 = require('../soal1.js');

test('Return as string',function(){
    expect( typeof soal1('Eigen1')).toBe('string')
});

test('Reverse "NEGIE1" to "EIGEN1" ',function(){
    expect(  soal1('NEGIE1')).toBe('EIGEN1')
});

test('Reverse "HELLO123" to "OLLEH123" ',function(){
    expect(  soal1('HELLO123')).toBe('OLLEH123')
});