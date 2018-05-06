// 8.6 Instrukcje warunkowe w praktyce

var a = prompt('Provide a value'),
    b = prompt('Provide b value'),
    value = (a * a) - (2 * a * b) - (b * b);
alert('Your result is ' + value);

if (value > 0) {
    console.log('Wartosc dodatnia');
} else if (value < 0) {
    console.log('Wartosc ujemna');
} else {
    console.log('Wartosc równa zero');
}
               

