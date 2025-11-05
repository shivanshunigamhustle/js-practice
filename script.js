// for(let i=1;i<=10;i++){
//     console.log(i);
    
// }
// let m=0;
// for(let i=1;i<=12;i++){
//     if(i!==2 && i!==3){
//        m=i;
//        console.log(m);
        

//     }
    
    
// }
// for(let i=10;i>0;i--){
//     console.log(i);
    
// }
// for(let i=1;i<10;i++){
   
//     if(i%2===0)console.log(`${i}-Even`);
//     else console.log(`${i}-odd`);
    
    
//}
// let num=+prompt("enter the age")
// if(num>=18){
//     console.log("eligible");
    
// }else{
//     console.log("not eligible");
    
// }
let age = prompt("enter the age");

 if(age===null){
    console.error("you entered cancel value");
    
}else{
    if(age.trim()===""){
        console.error("dhang se likh");
    }else{
        age=Number(age.trim());
        if(isNaN(age)){
            console.error("number de de bha")
        }else{
            if(age<0)console.log("amanya");
            else if(age>=18)console.log("you can vote");
            else console.log("you can't vote");
            
            
            
            
        }
    }
}
// for(let i=1;i<=10;i++){
//    console.log(`5*${i}=${5*i}`);
   
// }
//  let count=0;
// for(let i=1;i<16;i++){
    
//     if(i>8){
//         count++;
//         console.log(i);
//         // console.log(`count ki value ${count}`);
//     }
// }
// console.log(`count ki value ${count}`);

// let password="shivanshu"
// let pass=prompt("enter the password");
// if(pass===null){
//     console.log("you enter the cancell");
    
// }else{
//     if(pass.trim()===""){
//         console.log("enter the value");
        
//     }else{
//         if(pass===password){
//             console.log("matched");
            
//         }else{
//             console.log("not matched");
            
//         }
//     }
// }
// let attempt=0;
// let khulgaya=false;
// let password="shivanshubhai"

// let pass=prompt("enter the password");
// attempt++;
// if(pass===password) khulgaya=true;

// while(pass!==password){
//     if(attempt===3){
//         console.error("locked");
//         break;
        
//     }
//      pass=prompt("enter the password");
//      if(pass===password) khulgaya=true;
//      attempt++;

// }
// if(khulgaya===true)console.log("lock opened");

// let word=prompt("give the word");
// let count=0;

// while(word!=="stop"){
//     if(word==="yes")count++;
//      word=prompt("give the word");
//     }
//     console.log(`counter ki value :${count}`);
    
let sum=0;
for(let i=1;i<31;i++){
    if(i%2===1){
        sum+=i;
        console.log(i);
        
    }
}
console.log(`sum of odd number: ${sum}`);

let num=+prompt("number batao");

while(num%2!==0){
    num=+prompt("number batao");

}
if(num%2===0)console.log("done");

//start end input

let start =+prompt("giving a starting number");
let end=+prompt("ending batao");

while(start>end)console.error("wrong number");

for(let i=start;i<=end;i++){
    console.log(i);
    
}