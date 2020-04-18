
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

// var massMark=78;
// var heightMark=1.69;

// var massJohn=92;
// var heightJohn=1.95;

// var BMIMark=massMark/(heightMark*heightMark);
// var BMIJohn=massJohn/(heightJohn*heightJohn);

// var markHigherBMI=BMIMark>BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s?'+markHigherBMI);


//Function expression
// var whatDoYouDo=function(job,firstName){
//   switch(job){
//     case 'teacher':
//     return firstName+'teaches kids how to code';
//     case 'driver':
//     return firstName+' drives a cab in Lisbon.';
//     case 'designer':
//     return firstName+'designes beautiful websites';
//     default:
//     return firstName+' doses something else';
//   }
// }

// console.log(whatDoYouDo('teacher','John'));

//different data types

// var john=['John','Smith',1990,'Designer',false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// console.log(john);
// john.shift();
// console.log(john);

/******
 * Objects and properties
 */

// var john={
//   firstName:'John',
//   lastName:'Smith',
//   birthYear:1990,
//   famiry:['Jane','Mark','Bob','Emily'],
//   job:'teacher',
//   isMarried:false,
//   calcAge:function(){
//     this.age=2018-this.birthYear;
//   }
// };

// console.log(john);
// console.log(john.firstName);
// console.log(john['lastName']);
// var x='birthYear';
// console.log(john[x]);


// john.job='designer';
// john['isMarried']=true;
// console.log(john);

// //new Object syntax
// var jane=new Object();
// jane.firstName='Jane';
// jane.birthYear=1969;
// jane.birthPlace='Japan';
// console.log(jane);

// john.calcAge();
// console.log(john.age);


// var john={
//   fullName:'John smith',
//   mass:92,
//   height:1.95,
//   //BMI:this.mass/(this.height*this.height)
//   calcBMI:function(){
//     this.bmi=this.mass/(this.height*this.height);
//     return this.bmi;
//   }
// }
// john.calcBMI();
// console.log(john.bmi);


//solution
var john={
  fullName:'John smith',
  bills:[124,48,268,180,42],
  calcTips:function(){
    this.tips=[];
    this.finalValues=[];
    for( var i=0;i<this.bills.length;i++){
      //determine percentage
      var percentage;
      var bill=this.bills[i];
      if(bill<50){
        percentage=.2;
      }else if(bill>=50 && bill<200){
        percentage=.15;
      }else{
        percentage=.1;
      }
      //add results 
      this.tips[i]=bill*percentage;
      this.finalValues[i]=bill+bill*percentage;
    }
  }
}
john.calcTips();
console.log(john);