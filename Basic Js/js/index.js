
//section1
console.log(1+2);
console.log("apple"+"orange");
console.log(1+2+"orange");
console.log("apple"+1+2);
console.log(1+true);
console.log(0==false);
console.log(1==true);
console.log(2==="2");
  

//section2
console.log("----List of players----")
cricket_team=["Ms Dhoni","Rayudu","Bravo","Virat Kholi","Sachin Dendulkar","Ravinders Jadeja","Rohit Sharma","KL Rahul","Dinesh Karthik","Hardik pandiya","Kedar Jadhav"];
console.log(cricket_team);
console.log("----Removing first player---")
cricket_team.shift() // remove the first element
console.log(cricket_team);
Array2 = cricket_team.splice(3, 3);
console.log(cricket_team);  // remove the middle elements
console.log(cricket_team.pop());
console.log(cricket_team); // remove the last element


// console.log(cricket_team);
length=cricket_team.length;
console.log("-----length------");
console.log(cricket_team.length);  
console.log("------adding another player------");
cricket_team.push("Ms Dhoni");
console.log(cricket_team); 
cricket_team.unshift("Pavi"); // adding player at top
console.log(cricket_team);
new_string=cricket_team.splice(3,0,"Ram"); // adding in the middle

console.log(cricket_team);
console.log("------Sorting------");
// for(i=0;i<length;i++)
// console.log(cricket_team[i]);  // sorting
cricket_team.sort();
console.log("-----Random----");
var randomnumber;
cricket_team.forEach((v,i) => {
    randomnumber=Math.random();
    var random=randomnumber*100;
     let values=Math.floor(random);
    console.log(v + " " +values);
});

console.log("------UPPERCASE-----");
new_cricket_team= cricket_team.filter(player=> player!=="Ram").map(player=> player.toUpperCase());
console.log(new_cricket_team);
// // for(i=0;i<cricket_team.length;i++){   
// new_cricket_team[i]=cricket_team[i].toUpperCase();  // to conver into uppercase
// console.log(new_cricket_team[i]);



//section 3
console.log("-----Displaying Numbers-----");
displaynumbers(1,100);
function displaynumbers(a,b){
    for(i=a;i<=b;i++)
    console.log(i);
}
console.log("----date-----");
const date=new Date();
let day=date.getDate();
let month=date.getMonth();
let year=date.getFullYear(); 
month=month+1;
const num = month;
  new_month=leftFillNum(num, 2);
function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, "0");
  }
  console.log(day+ "/" + new_month + "/ "+year);
  
  
console.log("Celsius to faherneit");
var Celsius=1.2;
value=Fahrenit(Celsius);
function Fahrenit(Celsius){
    console.log(Celsius*1.8+32);
    return Celsius*1.8+32;
}
console.log("value")
arr=[1,2,3,4];
length=arr.length;
new_arr=Average(arr,length);
function Average(arr,l){
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
     console.log(average);
}
console.log("--Reverse a string--");
var string="Palindrome abc";
console.log(strreverse(string));
function strreverse(string){
    // var split = string.split("");
    // var reverse = split.reverse();
    // var join=reverse.join("");
    return string.split("").reverse().join("");

}
