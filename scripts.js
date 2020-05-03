// Third part:
console.log('Script file is loaded.');

$('h1').html('This is done by <em>JavaScript</em>');

$('h2').toggleClass('blue');
$('h2').toggleClass('blue');



function myLittleFunction(){
    $('main').append('<p>A p is appended in the main</p>');
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px')
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction)
$('#remove').click(function () {
   $('p:last-child').remove();
});

// Single line comment

/*
multiple
line comments
*/

// First part:


// // 1+1
// 2
// 12-5
// 7
// 4*3
// 12
// 15/6
// 2.5
// 15/6;
// 2.5
// 17*12;
// 204
// let age;
// undefined
// age = 34
// 34
// age +5
// 39
// age=35
// 35
// age = 55
// 55
// age/5
// 11
// age=34
// 34
// age= 48/8
// 6
// let numberOfLegs = 4
// undefined
// numberOfLegs *2
// 8
// numberOfLegs = 2
// 2
// let name = Lili
// VM1051:1 Uncaught ReferenceError: Lili is not defined
//     at <anonymous>:1:12
// (anonymous) @ VM1051:1
// let name = 'Lili'
// VM1127:1 Uncaught SyntaxError: Identifier 'name' has already been declared
//     at <anonymous>:1:1
// (anonymous) @ VM1127:1
// name = Lili
// VM1183:1 Uncaught ReferenceError: Lili is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM1183:1
// let name = 'Lili'
// VM1204:1 Uncaught SyntaxError: Identifier 'name' has already been declared
//     at <anonymous>:1:1
// (anonymous) @ VM1204:1
// let sentence = "That person's cat"
// undefined
// sentence = ' he said : "OK" '
// " he said : "OK" "
// let oldEnoughtToDrive = false
// undefined
// oldEnoughtToDrive= true
// true
// 34 + 5
// 39
// 'Hello' + name
// VM1561:1 Uncaught ReferenceError: name is not defined
//     at <anonymous>:1:11
// (anonymous) @ VM1561:1
// let name = everyone
// VM1619:1 Uncaught SyntaxError: Identifier 'name' has already been declared
//     at <anonymous>:1:1
// (anonymous) @ VM1619:1
// true && true
// true
// true && false
// false
// false && false
// false
// true || true
// true
// true || false
// true
// false|| false
// false
// true && (false || (true && false))
// false
// let post = "this is my first post"
// undefined
// let post2 = "this is my second post"
// undefined
// let color1 = "orange"
// undefined
// let color2 = "blue"
// undefined
// let colors = ["orange", "blue", "green"]
// undefined
// colors
// (3) ["orange", "blue", "green"]
// colors [0]
// "orange"
// colors [1]
// "blue"
// colors[2]
// "green"
// let pickedColor = 2
// undefined
// colors[pickedColor]
// "green"
// colors[1] = 'yellow'
// "yellow"
// colors
// (3) ["orange", "yellow", "green"]
// colors.length
// 3
// colors[3] = 'lime'
// "lime"
// colors
// (4) ["orange", "yellow", "green", "lime"]
// colors.push('purple')
// 5
// colors
// (5) ["orange", "yellow", "green", "lime", "purple"]
// colors[colors.length] = 'cyan'
// "cyan"
// colors
// (6) ["orange", "yellow", "green", "lime", "purple", "cyan"]
// colors.push(colors)
// 7
// colors
// (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]0: "orange"1: "yellow"2: "green"3: "lime"4: "purple"5: "cyan"6: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]length: 7__proto__: Array(0)
// let notGoodExample = ['text' 123, true]
// VM3390:1 Uncaught SyntaxError: Unexpected number
// let notGoodExample = ['text', 123, true]
// undefined
// let person = {
//   name: 'Lili', 
//   age: 34,
//   favoriteColors: colors
// }
// undefined
// person
// {name: "Lili", age: 34, favoriteColors: Array(7)}
// 'Hello, dear' + person.name
// "Hello, dearLili"
// person.name = 'Moni'
// "Moni"
// person
// {name: "Moni", age: 34, favoriteColors: Array(7)}