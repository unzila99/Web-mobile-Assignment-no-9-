         
         ////// CHAPTER NO:38 tO 44  ///////


// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b. 


// function power(base, exponent) {
//     var result = 1;
//     if(exponent == undefined)
//     exponent = 2;
//     for(var i=1; i<=exponent; i++) {
//         result = result * base;
//     }
//     return result;
// }
// console.log(power(2,5));


// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. 
// Leap years ..., 2012, 2016, 2020, …


// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2010));
// console.log(leapyear(2012));
// console.log(leapyear(2016));
// console.log(leapyear(2020));
// console.log(leapyear(2022));
// console.log(leapyear(2024));
// console.log(leapyear(2026));
// console.log(leapyear(2032));


// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle 
// is given by area = S(S − a)(S − b)(S − c) 
// where, S = ( a + b + c ) / 2 


// var a = 5; 
// var b = 6; 
// var c = 7; 
// var s = (a + b + c)/2;
// var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
// console.log(area);


// 4. Write a function that receives marks received by a student in 3 subjects and returns the average 
// and percentage of these marks. There should be 3 functions one is the mainFunction and other are for 
// average and percentage. Call those functions from mainFunction and display result in mainFunction. 


// var students = [['Unzila', 80], ['Ahmed', 77], ['Fazeela', 88], ['Ali', 95], ['Aisha', 68]];
// var Avgmarks = 0;
// for (var i=0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     var avg = (Avgmarks/students.length);
// }
// console.log("Average grade: " + (Avgmarks)/students.length);
// if (avg < 100){
//     console.log("Grade : A+");      
// } 
// else if (avg < 90) {
//     console.log("Grade : A"); 
// } 
// else if (avg < 80) {
//     console.log("Grade : B"); 
// } 
// else if (avg < 70) {
//     console.log("Grade : C"); 
// } 
// else if (avg < 60) {
//     console.log("Grade : D"); 
// }


// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality.
//  You can code for single character as of now. 


// var fastfood = ['Pizza', 'Burger', 'ClubSandwiches', 'Broast', 'Tikka'];

// console.log(fastfood.indexOf('Broast'));



// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 
// characters long. 
 
// var sentence = "Excuse me, do you know what time it is?";
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = sentence.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == sentence.charAt(j)) {
//                 sentence = sentence.slice(0, j).concat(sentence.slice(j + 1, secondLoop));
//             }
//         }
//     }
// }

// sentence.character();
// console.log(sentence);
      
                        //  OR // QUESTION NO :06  //

// var sentence = "Excuse me, do you know what time it is?";

// sentence = sentence.replace( /[aeiou]/g, '' );

// console.log(sentence);


// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession 
// in a line of text.

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }

// console.log(findOccurrences());



                          /////// CHAPTER NO: 43 to 48 ///////


// 1. Show an alert box on click on a link

// function foo(){
//     alert("hello...How are you!")
// }


// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user. 

function sms(){
  alert("Thankyou for purchasing a phone from us!")
}

// 3. Display 10 student records in table and each row should contain a delete button. 
// If you click on a button to delete a record, entire row should be deleted.


// function myfunction() {  
//     document.getElementsByTagName("tr")[3].remove(); 
// } 


// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

// function changeImage(){
//     var flowerImage = document.getElementById('img')
//     flowerImage.src = "images/flower 4.jpg"
// }
// function changeImageBefore(){
//     var flowerImage = document.getElementById('img')
//     flowerImage.src="images/flower 3.jpg"
// }


// 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. 
//     And show updated counter value in browser.


// function increaseimg(){
//     var img = document.getElementById('dressimg')
//     img.className = "big"
// }


                    /////////   CHAPTER NO: 49 to 52  ////////


// 1. Create a signup form and display form data in your web page on submission. 


// function checkAddress(fieldId) { 
//     var value = document.getElementById(fieldId).value; 
//       if (value === "") {
//             alert("Form must be filled out.");
//       } 
//     }



// 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only 
// see some details on first look. When user clicks on “Read more” button, full detail of that particular 
// item will be displayed.  


// function bakeryitems() { 
//     var expandeditems =  "<ol><li>Pasta</li><li>French Fries</li><li>Fried Rice</li><li>Burger</li><li>Pizza</li><li>Tacos</li><li>Icecream</li><li>pancakes</li><li>Banana Braed</li><li>Chocolates</li></ol>"; 
//      document.getElementById("bakery").innerHTML = expandeditems; 
//      }



// 3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a 
// form which takes student’s details and show each student detail in table. Each row of table must contain 
// a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit 
// button, a hidden form will appear with the values of that row.  


// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var index=document.getElementById("index_row"+no);
//  var names=document.getElementById("names_row"+no);
//  var classes=document.getElementById("classes_row"+no);
	
//  var index_data=index.innerHTML;
//  var names_data=names.innerHTML;
//  var classes_data=classes.innerHTML;
	
//  index.innerHTML="<input type='text' id='index_text"+no+"' value='"+index_data+"'>";
//  names.innerHTML="<input type='text' id='names_text"+no+"' value='"+names_data+"'>";
//  classes.innerHTML="<input type='text' id='classes_text"+no+"' value='"+classesdata+"'>";
// }

// function save_row(no)
// {
//  var index_val=document.getElementById("index_text"+no).value;
//  var names_val=document.getElementById("names_text"+no).value;
//  var classes_val=document.getElementById("classes_text"+no).value;

//  document.getElementById("index_row"+no).innerHTML=index_val;
//  document.getElementById("names_row"+no).innerHTML=names_val;
//  document.getElementById("classes_row"+no).innerHTML=classes_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_index=document.getElementById("new_index").value;
//  var new_names=document.getElementById("new_names").value;
//  var new_classes=document.getElementById("new_classes").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='index_row"+table_len+"'>"+new_index+"</td><td id='names_row"+table_len+"'>"+new_names+"</td><td id='classes_row"+table_len+"'>"+new_classes+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_index").value="";
//  document.getElementById("new_names").value="";
//  document.getElementById("new_classes").value="";
// }

 
                        //////// CHAPTER NO:58 to 67 /////////


// i. Get element of id “main-content” and assign them in a variable.

// var a = document.getElementById('main-content')
// console.log(a);


// ii. Display all child elements of “main-content” element.

// console.log(document.childNodes[1].childNodes[2].childNodes[1]);


// iii. Get all elements of class “render” and show their innerHTML in browser.

// var b = document.getElementsByClassName('render')
// console.log(b);


// iv. Fill input value whose element id first-name using javascript

// document.getElementById("first-name").value = "Unzila";


// v. Repeat part iv for id ”last-name” and “email”.

// document.getElementById("last-name").value = "Siddiqui";

// document.getElementById("email").value = "unzilasidd901@gmail.com";



// i. What is node type of element having id “form-content”.

  // var x = document.getElementById("form-content")
  // console.log(x.nodeType);

  
  // ii. Show node type of element having id “lastName” and its child node.

  // var c = document.getElementById("last-name")
  // console.log(c.nodeType);

  // var c = document.getElementById("last-name")
  // console.log(c.childNodes);


  // iii. Update child node of element having id “lastName”.

  // var c = document.getElementById("form-content").children;
  // c[3].style.backgroundColor = "yellow";


  // iv. Get First and last child of id “main-content”.
  
  // var d = document.getElementById("main-content")
  // console.log(d.firstChild);

  // var e = document.getElementById("main-content")
  // console.log(e.lastChild);


  // v. Get next and previous siblings of id “lastName”.

//   var item = document.getElementById("last-name");
//   var prev = item.previousElementSibling;
//   var next = item.nextElementSibling;

// console.log(item);
// console.log(prev);
// console.log(next);


// vi. Get parent node and node type of element having id “email”

// var u = document.getElementById("email")
// console.log(u.parentNode);

// var v = document.getElementById("email")
// console.log(v.nodeType);



                        /////////// CHAPTER NO: 68 /////////////


//  1.Consider you have 4 images in a file as shown below.
//   Now when you click on an image it should display in a modal.


// function showImage(e){
//   var modalImage = document.getElementById("modalImage")
//   modalImage.src.e.src
// }