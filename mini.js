
const c= document.querySelector(".b1")
const inputBox=document.querySelector(".input-txt")
const chancespan=document.querySelector(".number_mod")
const guess=document.querySelector(".msg_mod")
const audiobutton=document.querySelector(".clickSound")

let target = Math.floor(Math.random() * 100) + 1;
let productArray=[];
let attempts = 10;
let timeleft = 60;
function reset()
{
  target = Math.floor(Math.random() * 100) + 1;
   productArray=[];
   attempts = 10;
   chancespan.textContent = attempts;
   guess.textContent = "None";
}



c.addEventListener("click",function()
{
   
    const inputValue = inputBox.value.trim();
       if (inputValue === "")
       {
           alert("⚠️ Please enter a number");
          return;
        
        }
    const inputmsg = Number(inputValue);

      if (isNaN(inputmsg)) 
      {
          alert("⚠️ Not a valid number");
          return;
          
      }
     productArray.push(inputmsg);
     attempts--;

   if(inputmsg<0 || inputmsg>100)
   {
    alert("⚠️ Please enter a number between 1 and 100")
    return;
    
   }
    
    if(target==inputmsg)
    {
        audiobutton.play();
        chancespan.textContent= `🎉 You guessed it! Number was ${target}`
        alert(" 🎉 successfully guessed the Number")
        inputBox.value = "";
        reset();
        return;

    }
    else if(attempts==0)
    {
        
          alert(` ❌ Lost the game! The number was ${target}`);
           audiobutton.play();
          inputBox.value = "";
           reset();
           
        
    }
    else if(inputmsg<target)
    {
         chancespan.textContent = ` 💬 Too low! Chances Left: ${attempts}`;
    }
    else if(inputmsg>target)
    {
         chancespan.textContent = ` 💬 Too high! Chances Left: ${attempts}`;
    }
       guess.textContent = productArray.length > 0 ? productArray.join(", ") : "None";
      inputBox.value = "";
  });
