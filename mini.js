const c= document.querySelector(".b1")
const inputBox=document.querySelector(".input-txt")
const chancespan=document.querySelector(".number_mod")
const guess=document.querySelector(".msg_mod")
 let target = Math.floor(Math.random() * 100) + 1;
  let productArray=[];
  let attempts = 10;
function reset()
{
  target = Math.floor(Math.random() * 100) + 1;
   productArray=[];
   attempts = 10;
   chancespan.textContent = attempts;
  guess.textContent = "none";
}

c.addEventListener("click",function()
{
   
   const inputmsg=Number(inputBox.value)
   console.log(inputmsg)
   productArray.push(inputmsg)
    console.log(  productArray)
   if(inputmsg<0 || inputmsg>100)
   {
    alert("❌ Please enter a number between 1 and 100")
    return
   }
     attempts--;
    if(target==inputmsg)
    {
        chancespan.textContent= `🎉 You guessed it! Number was ${target}`
        alert(" 🎉 successfully guessed the Number")
        inputBox.value = "";
        reset();

    }
    else if(attempts==0)
    {
        chancespan.textContent = ` ❌ No more chances! The number was ${target}`;
    }
    else if(inputmsg<target)
    {
         chancespan.textContent = ` 💬 Too low! Chances Left: ${attempts}`;
    }
    else if(inputmsg>target)
    {
         chancespan.textContent = ` 💬 Too high! Chances Left: ${attempts}`;
    }
     if(target!==inputmsg && attempts===0)
      {
        alert(" ❌ lost the game")
         inputBox.value = "";
        reset();
      }
     guess.textContent= productArray.join(",")
      inputBox.value = "";

     
});

