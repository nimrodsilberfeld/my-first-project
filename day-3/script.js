/*   let numChildren = 2 // or `let numChildren = Number(prompt("How many children do you have?"))` - we use `Number` to convert what the user types to a number
const isCareful = false

if(isCareful){
  numChildren+3
}
else{numChildren+=7}

console.log(numChildren) // will print 3

*/

/*
let  silverwareCount = 3
if(silverwareCount%2){console.log("wrong")}
else{console.log("right")}
*/

/*
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if(performance === "stellar")
{salary+=stellarBonus}

else {salary+=goodBonus}
console.log(salary)
*/

/*
let employees = ["DeMarcus", "Kai", "Christina"]
let candidates = ["Tiffany", "Elana", "Carl"]

employees.push(...candidates)
    console.log(employees) */

/* const genes = ["ACADM", "GLMN", "RLF", "AZIN", "CRYZ"]


 const heal = [genes[0],genes[1],genes[4],genes[2],genes[3],genes[3]] 
 heal.unshift("FXT")
 console.log(heal)
*/
/*
const p1 = {
    name: "jill",
    age: 20,
    city: "tel av"
}

const p2 = {
    name: "robert",
    age: 20,
    city: "tel aviv"
}
if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        //  console.log("Jill wanted to date Robert")
    }
    else {
        //console.log("Jill wanted to date Robert, but couldn't")
    }
}





/*const mylist = [p1, p2]
mylist[0].age = "18"
console.log(mylist[0].age)
mylist.splice(1, 1)
//console.log(mylist)

const newlist = ["p3", "p4"]
mylist.push(...newlist)
//console.log(mylist)



const library = {
    books: [
        {
            title: "harry",
            author: "j.k",
        }
          ,  
        {    title: "shrek",
            author:"walt"
        
        }
        
        

    ]
    
    
        
           
        
           

        

       
}               


mylist.push(...library.books)
console.log(mylist)
*/
/*

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }

}
  
  const name = prompt('Please enter the name for your reservation');
  name=name.toLowerCase
  //console.log(name)
if( reservations[name]){
    if(reservations[name].claimed===false){
         console.log("welcome"+ name)}
         else (reservations[name].claimed===true) 
             console.log("your reservation already claimed")
         }
    else {reservations[name]=claimed=true} 
        console.log("waiting "+name)
        
       // console.log("you dotionnt have any reseva")} 

  */
 
 let gender = "male"
let proffession = "business"

if(gender==="male"){proffession="buisneeman"}
else if (gender==="woman"){proffession="buiswoman"}
else if(gender===null){proffession="bussinessperson"}
console.log(proffession)