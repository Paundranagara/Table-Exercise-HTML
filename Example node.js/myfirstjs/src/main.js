//javascript -->Programming Language
/*
Programming language
1. output and input
2. variable and data type
3. condition (if else)
4. looping (perulangan)
5. function
*/


//output
//1. using console.log();
console.log("Hello World!");
console.log("Welcome to SMA ABBS Surakarta");
//2. using alert();
//alert("welcome to my website");
//3. using innerHTML
document.getElementById("name").innerHTML="Surprise y'all";

//variable -->to store data (untuk menyimpan data)
//variable : let, var, const
//let
let firstname = "Bruto";
console.log(firstname);
let lastname = "dycus";
console.log(lastname);
console.log(firstname, lastname);
let a = 5;
a = 6;
console.log(a);
var b = 5;
var b = 6;
console.log(b);
const c = 5;
console.log(c); 

//Type data
//1. string = character --> use ""/''
//2. number (integer , float)
//integer = bilangan bulat
//float = bilangan pecahan/desimal
//3. boolean = true, false
let data1 = "SMA ABBS Surakarta"; //string
let data2 = "100"; //string
let data3 = 50; //integer
let data4 = 25.25; //float
let data5 = true; //boolean


//Operator
/*1. operator aritmatika
- penjumlahan (+)
- pengurangan (-)
- perkalian (*)
- pembagian (/)
- perpangkatan (**)
- modulus (%) --> sisa hasil bagi
*/

let number1 = 200;
let number2 = 25;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 ** number2);
console.log(number1 % number2);

//Menghitung Luas Persegi panjang -->luas = panjang * lebar
let panjang = 15;
let lebar = 5;
let luas = panjang * lebar
console.log("Luas persegi panjang adalah", luas)
//Membuat rumus BMI
//BMI = (berat / (tinggi * tinggi)) * 10000
let berat = 80;
let tinggi = 182;
let BMI = berat/(tinggi ** 2) * 100000
console.log("Berat badan = ", berat);
console.log("Tinggi badan = ", tinggi)
console.log("BMI = ", BMI)

/* Comparison operators (operator perbandingan)
-equal to (==)
-not equal(!=)
-greater than (>)
-greater than or equal(>=)
-less than(<)
-less than or equal(<=)
*/
let x = 10;
console.log (x == 10); //true
console.log (x != 10); //false
console.log ( x > 10); //false
console.log (x >= 10); //true
console.log ( x < 20); // true
console.log ( x <= 20); //true  

/* 3. Logical operators
- AND (&&) --> akan bernilai true apabila semua kondisi hasilnya true
- OR (||) --> akan bernilai true apabila paling tidak ada satu kondisi yang nilainya true
- NOT (!) --> nilai kebalikan

- AND (jika semua true hasilnya true, bila satu true satu false hasilnya false, jika semua false hasilnya false)
- OR (jika semua true hasilnya true, jika satu true dan satu false hasilnya true, bila semua false hasilnya false)
- NOT (jika true jadi false, begitu juga sebaliknya, (KEBALIKAN))
*/

//condition
/*1. condition
if (condition){
   action;
}
   */

let y = 10;
if (y >= 10){
    console.log("Good Morning");
}

/* 2. comditions
if (condition){
action 1;
}
else{
    action 2;
}
 */
let p = 10;
if (p > 10){
    console.log ("good morning");
}
else{
    console.log ("good afternoon");
}