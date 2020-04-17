
/******************************** 
 * Variable and data type 
 */
/*
var firstName='John';
console.log(firstName);

var lastName ='Smith';
var age=28;

var fullAge =true;
console.log(fullAge);

var job;
console.log(job);

job='Teacher';
console.log(job);
*/

/******************************** 
 * Variable mutation and type coercion
 */

//  var firstName='John';
//  var age=28;
//  console.log(firstName+' '+age);

//  var job,isMarried;
//  job='teacher';
//  isMarried = false;

//  console.log(firstName+'is a '+ age+'year old'+job+'. Is he married? '+ isMarried);


//  //variable mutation
//  age='twenty eight';
//  job='driver';

//  alert(firstName+' is a '+age+' year old '+ job+' Is he married?'+isMarried);

//  var lastName=prompt('What is his last name?');
//  console.log(firstName+' '+lastName);

var massMark=78;
var heightMark=1.69;

var massJohn=92;
var heightJohn=1.95;

var BMIMark=massMark/(heightMark*heightMark);
var BMIJohn=massJohn/(heightJohn*heightJohn);

var markHigherBMI=BMIMark>BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s?'+markHigherBMI);