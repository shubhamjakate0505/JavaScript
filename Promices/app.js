/* function Savedb(data,sucess,failuer){
    let internetspeed=Math.floor(Math.random()*10)+1;
    console.log(internetspeed);
    if(internetspeed > 4){
       sucess();
    }else{
     failuer();   
    }
    
}
 *//* Savedb("Shubham Jakate",()=>{
    console.log("Success: data was save");
},()=>{
    console.log("Failer : Connection was Week");
}); */


// Refactring with Promices

function Savedb(data){
   
    // console.log(internetspeed);
    return new Promise((success,failer)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;
        // console.log(internetspeed);
        if(internetspeed>4){
            success("data Was Saved");
        }else{
            failer("Connection Was losse")
        }
    }) 
}
// Savedb("Shubham");