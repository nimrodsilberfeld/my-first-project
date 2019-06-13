// let names = ["yuval","daniel","ido","jon"]                          exercise 1/loops
// let ages = [1,2,3,4]
// for (let i=0;i<names.length;i++){
//    console.log(names[i] + " is "+ ages[i] + " old" )
// }

// const names = ["Ashley", "Donovan", "Lucas"]                  exercise 7
// const ages = [23, 47, 18]
// const people = []
//  for (let i=0;i<names.length;i++){
//      people.push({name: names[i], age: ages[i]})
    
//  }
//  console.log(people)


// let numbers = [1,2,3,4]                                          exercise 2
// let sum =0
// for (let i=0;i<numbers.length;i++)
// {sum=sum +numbers[i]}
// console.log(sum)

// let numbers = [1,2,3,4]                                           exercise 3
//  let sum =0
//  for (let i=0;i<numbers.length;i++)
//  {sum=sum +numbers[i]}
// let avrege=sum/(numbers.length)

//  console.log(avrege)

// let num =[]                                                          exercise 4
// for (let i=1;i<101;i++){
//     num.push(i)

// } console.log(num)



// let num =[]
// for (let i=1;i<101;i++){                                         exercise 5
//     num.push(i)

// } 
// let i =0
// while(num[i]<=100){
//     if (num[i]%2===1){
//         console.log(num[i])
//     }
//     i++
// }


// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
//console.log(nums.indexOf(709))

// for (let i in nums){
//     if (nums[i]===709){
//         console.log(i)
//     }                                                                  exercise 6

        
    
// }


// const names = ["Ashley", "Donovan", "Lucas"]                           exercise 8                      
// const ages = [23, 47, 18]
// const people = []
//  for (let i=0;i<names.length;i++){
//      people.push(names[i] + "is "+ages[i]+" old" )
    
//  }
//  console.log(people)


// const posts = [                                                    exercise 9 /loops
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]
//   for (let i in posts){
//     if (posts[i].id===2){
//         posts.splice(i,1)
//     }
// } console.log(posts)




// const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []},
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [{id: 1, text: "Idiot has no idea"}, {id: 2, text: "Fool!"}, {id: 3, text: "I agree!"}]
//     },
//     {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []}
//   ]
//   let x
//   for (let i in posts){
//       if (posts[i].id===2){
//           x=posts[i].comments
//          for (let k in x)
//          {
//              if ( k.id===3){
//                 x.splice(k,1)
//              }
//          }  
        
//         console.log(posts)
        
        
//         //posts[i].comments

//       }


//   }
  
// const calcAge = function(today,birth){       exersice 1  function

//     console.log(today-birth)

// } 

// const age = calcAge(2017, 1989)




// const calcAge = function(today,birth){       

//     let x = today-birth                                   exersice 2 function
//     let y = today-birth-1
//     console.log("you ae either "+ x+ " or "+y) 
// } 


// calcAge(2018,2015)()



// const iseven = function(x){
//     if(x%2===1){
//         return false                            

       
//     } else {return true}
// } 
// iseven(3)






// const num =[1,2,3,4,5,6]

// for(let i=0;i<num.length;i++){
//     if(iseven(num[i])===false){
//         console.log(num[i]) 
        
//     }

// }








// const checkExist = function(arry,x){

//     for(let i=0;i<arry.length;i++){

//      if(arry[i]===x){
//          return true
        
//     }
   
// } return false
// }
// console.log(checkExist([1,2,3],5))




// const calculator ={

//  add : function(x,y){
//      return x+y},
//  subtract : function(x,y){
//      return x-y
//  }    
// }
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42



const turnToKing = function(name, money){
  
    money=money*name.length    
    
    name = name.toUpperCase()
    
    name = "his royal "+name

    console.log(name + " has " + money + " gold coins")
}

turnToKing("nimrod", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
