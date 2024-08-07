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

/* function Savedb(data){
   
    // console.log(internetspeed);
    return new Promise((success,failer)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;
        // console.log(internetspeed);
        if(internetspeed>4){
            success("data Was Saved");
        }else{
            failer("Connection Was losse");
        }
    }) 
}
Savedb("Shubham")
.then(()=>{
    console.log("Promices was Resolved : Data was Saved")
}
)
.catch(()=>{
    console.log("Promices was not Resolved : Data was not save");
})
; */





// -------------------Callback Hell------------------------------
let h1=document.querySelector('h1');
// h1.style.color="red";
function change(color,delay,nextColor){
    setTimeout(()=>{
        h1.style.color=color;
       if(nextColor) nextColor();//when function doesnot take last parament then do not changee color
    },delay);
   
}
setTimeout(change("red",1000,()=>{
    setTimeout(change("blue",1000,()=>{
        setTimeout(change("yellow",1000,()=>{
            setTimeout(change("green",1000))
        }))
    }));
}));
// setTimeout(change("blue",2020));
// setTimeout(change("pink",3030));