const c= document.querySelector(".b1")
const inputBox=document.querySelector(".input-txt")
const chancespan=document.querySelector(".number_mod")
const guess=document.querySelector(".msg_mod")
 const target = Math.floor(Math.random() * 100) + 1;
let productArray=[];
let attempts = 10;
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
     guess.textContent= productArray.join(",")
      inputBox.value = "";

      if(target!==inputmsg && attempt==10)
      {
        alert("lost the game")
        inputBox.value = "";
      }
});

