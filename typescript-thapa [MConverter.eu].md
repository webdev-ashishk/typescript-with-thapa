<img src="Pictures/10000001000003BE0000022DC4408C3C780007AA.png"
style="width:13.989cm;height:7.377cm" />

<img src="Pictures/10000001000005BE000001C6E243665E1EF8FFB9.png"
style="width:17cm;height:5.249cm" />

TypeScript is JavaScript with ***added syntax for types.***

TypeScript uses ***compile time type checking****. ***Which means it
checks if the specified types match ****before ****running the code, not
****while ****running the code.

<img src="Pictures/10000001000006A90000039640D9A8C33A409041.png"
style="width:17cm;height:9.153cm" />

Lec-3

https://www.tutorialspoint.com/typescript/typescript_quick_guide.htm

Q\] How we can compile ts code

tsc \<fileName\>

example \>\>\>\>\>\>\>\>\>\>\>\>tsc index.ts

Q\] TS-cofiguration file ?

When error in typescript code don’t compile the code

**tsc - - init ** \[initialize tsConfiguration file\]

goto tsConfig.json() and search this code an uncomment \>\>\>\>\>\>\>\>

**"noEmitOnError"**: true /\* Disable emitting files if any type
checking errors are reported.

Lec-4

<img src="Pictures/10000001000006F100000398816BA7372897BD63.png"
style="width:17cm;height:8.8cm" />

Home-Work of Lecture-4

<img src="Pictures/10000001000004F70000019CEA1575016E8ECB08.png"
style="width:17cm;height:5.51cm" />

Lec-5

<img src="Pictures/10000001000003B700000242E85A1F0A84163DD2.png"
style="width:17cm;height:10.331cm" />

Lec-6

When you Write “any” Than you can think you use are writing code in “JS”

<img src="Pictures/10000001000006C500000362C4D6ED269259A85C.png"
style="width:17cm;height:8.495cm" />

<img src="Pictures/10000001000006C500000362103AD9362FFA56F7.png"
style="width:17cm;height:8.495cm" />

Q: What is type checkting ?

A: simple meaning of type checking when we defined type

first Number then we can not write other type of value over it

example: var myfavNum1: number=10;

myfavNum1=true

Q: What is Type safety

A: simple Meaning of Type safety is which property i can use which
“myfavNum1”

myfavNum1 can be any variable names ...

<img src="Pictures/10000001000002960000016DB656FAC68C13DFB4.png"
style="width:14.012cm;height:7.726cm" />

<img src="Pictures/1000000100000303000001F794132E2B6CAC931F.png"
style="width:16.32cm;height:10.647cm" />

<img src="Pictures/100000010000043900000281084D7E1B8EF631DF.png"
style="width:17cm;height:10.081cm" />

Lec-7

<img src="Pictures/100000010000043F000001AEB39F89AB0B242ACC.png"
style="width:17cm;height:6.724cm" /> simple mearning of inference

# Lec-7 assignment

<img src="Pictures/100000010000049D00000217E3836CE712C409FC.png"
style="width:17cm;height:7.701cm" />

Lec-8

<img src="Pictures/100000010000065F000002499B4480A0B5970431.png"
style="width:17cm;height:6.096cm" />

\#9 Understanding Optional and Default Parameters

When In function we write “two Parameters” then it will expact “two
aurguments” but but but when

gotted one augument then you write other paramerts as default parameters

Optional Parameters=\> **?**

<img src="Pictures/100000010000056B00000373B54FCF27C156BA52.png"
style="width:17cm;height:10.821cm" />

\#10: Initializing, Accessing, and Checking Length of an Array

<img src="Pictures/10000001000005180000025D76D2F8BF6F7FDEAC.png"
style="width:17cm;height:7.886cm" />

# <img src="Pictures/1000000100000700000002CA4625B7CA5A6FD7DF.png"
style="width:17cm;height:6.773cm" />Lec-10 assignment-Questions

\#11: TypeScript Arrays👉Methods and Iterations

<img src="Pictures/100000010000069F000003626E3FFC2825EF74E5.png"
style="width:17cm;height:8.685cm" />

\#12: TypeScript Array Map and Filter Methods

# Lec-12: Assignment-Questions 

<img src="Pictures/100000010000047E0000014AE96276E41DF6BE1E.png"
style="width:17cm;height:4.877cm" />

<img src="Pictures/100000010000047E0000014AB003DD10B74BE5A0.png"
style="width:17cm;height:4.877cm" /><img src="Pictures/100000010000069F000003628F4DA7C48F4735CF.png"
style="width:17cm;height:8.685cm" />

\#13: TypeScript Objects Explained: Everything You Need to Know with
Real Life

<img src="Pictures/100000010000063C000001B697E4DCF39FEEB188.png"
style="width:17cm;height:4.665cm" />

<img src="Pictures/100000010000067E000001BB733FB552DDF3C81E.png"
style="width:17cm;height:4.53cm" /><img src="Pictures/10000001000006D4000002A934AFEB9AB5C04766.png"
style="width:17cm;height:6.622cm" />

If there is 100 person then you need to type 100 times of each person
type this is failed DRY concept

how we can solve this problem ?

create one Person type and used as many place you use like functions
=====

using -\> ***Type Aliases***

\#14: TypeScript *Type Aliases*: Making Your Code Easier to Read &
Maintain

<img src="Pictures/10000001000006D5000001D4FB9550AF0392B546.png"
style="width:17cm;height:4.547cm" />

<img src="Pictures/10000001000006D70000033D000352DDA3CE14AD.png"
style="width:17cm;height:8.049cm" />

\#15-Call Signatures in TypeScript with Real-life Examples & Best
Practices 🧑‍💻

TypeScript is only concerned with the structure of the value we passed

\#17： TypeScript Tuples🔥

<img src="Pictures/1000000100000624000001E5D7D5DF9763D5512E.png"
style="width:17cm;height:5.244cm" />

<img src="Pictures/100000010000067E000002EACA3CDFA0C08DD26A.png"
style="width:17cm;height:7.631cm" /><img src="Pictures/100000010000067E000002EA40AAD258D41A8D15.png"
style="width:17cm;height:7.631cm" />

Tuples in Typescript

//! Question 1:

// You are building a simple e-commerce application and need to store
product information. Define a tuple type called ProductInfo to represent
each product, containing the following elements:

// Product name (string)

// Price (number)

// Quantity in stock (number)

// Create two product instances using this tuple type and display their
information.

//! Question 2:

// You are creating a student management system and want to keep track
of student grades for different subjects. Define a tuple type called
SubjectGrade to represent a subject and its corresponding grade,
containing the following elements:

// Subject name (string)

// Grade (number)

// Create an array of SubjectGrade tuples to store the grades for a
student in three different subjects: Math, English, and Science.
Calculate and display the average grade for the student.

//! Question 3:

// You are working on a weather application, and you need to store
weather data for different cities. Define a tuple type called
WeatherData to represent the weather information, containing the
following elements:

// City name (string)

// Temperature in Celsius (number)

// Weather condition (string)

// Create a function called displayWeather that takes an array of
WeatherData tuples as input and displays the weather information for
each city in a user-friendly format.

\#18: Master TypeScript Unions and Intersections 🚀

<img src="Pictures/10000001000006840000033E160B918B882430BB.png"
style="width:17cm;height:8.458cm" /><img src="Pictures/10000001000006B2000001C693DECEA2D1C8D1BE.png"
style="width:17cm;height:4.501cm" />

<img src="Pictures/10000001000006B2000001C6E89C2E2D46CA82DB.png"
style="width:17cm;height:4.501cm" />

<img src="Pictures/100000010000068300000254B26A767821E4FBAC.png"
style="width:17cm;height:6.077cm" />

<img src="Pictures/100000010000069C0000018B1A3E379F4CE435CA.png"
style="width:17cm;height:3.969cm" />

<img src="Pictures/10000001000003D60000024BDFCCBF3503B88890.png"
style="width:17cm;height:10.162cm" />

\#19: Generics in Typescript 🚀 Make everything Reusable like JAVA & C#

\#21: TypeScript Interface - Defining Contracts for Objects & Classes 📝

<img src="Pictures/1000000100000520000002CA954E3F2F646CB582.png"
style="width:18.867cm;height:10.268cm" />

Typescript Gives Error called ==\> ***compilation-error***

JavaScript gives Error called ==\> ***Run-time-error***

When you Migration .js file to .ts file configure your tsconfig file

\- make “strick” : false

when you added all the type in new .ts file then

\- make “strick” : true

Const date=new Date();

\- //Date() is Class

\- // date is Object

<img src="Pictures/10000001000005A0000002CA6B02FCABF7FDF512.png"
style="width:17cm;height:8.428cm" />

<img src="Pictures/10000001000005A0000002CA6B02FCABF7FDF512.png"
style="width:17cm;height:8.428cm" /><img src="Pictures/1000000100000564000002B1A35AD97344A7E7B2.png"
style="width:17cm;height:8.488cm" />

<img src="Pictures/100000010000078000000438E827C9F98AD3B51A.png"
style="width:17cm;height:9.562cm" /><img src="Pictures/1000000100000780000004384C5BAB69DC937351.png"
style="width:17cm;height:9.562cm" />

An **interface declaration **is another way to name an object type:

<img src="Pictures/100000010000078000000438AAA4363E1D0274D4.png"
style="width:17cm;height:9.562cm" />

<img src="Pictures/1000000100000780000004388267A73A5AA34655.png"
style="width:17cm;height:9.562cm" />

<img src="Pictures/1000000100000780000004387CF3CAC435DF3C2C.png"
style="width:17cm;height:9.562cm" />

<img src="Pictures/100000010000078000000438F750F67778F33EAC.png"
style="width:17cm;height:9.562cm" />

sfgsfafaf

<https://youtu.be/splSB6jDjIw> --------------\> Typscript Challenge
