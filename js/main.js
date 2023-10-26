let btn=document.getElementById("btn");
btn.addEventListener("click",menu);
function menu(){
    let innerloade=document.getElementById("innerloade");
    let para=document.getElementById("para");   
    let sum=0
    function loading(){
        sum++
        innerloade.style.width=`${sum}%`
        if((sum>=50)&&(sum<=80)){
            innerloade.style.backgroundColor="red";
        }
        else if((sum>=80)&&(sum<=100)){
            innerloade.style.backgroundColor="green";
        }
       setTimeout(()=>{
             para.innerHTML=(sum===100)?`${sum}% compleated`:`${sum}% process`
        },100);
    }
    setTimeout(()=>{
        let clear=setInterval(()=>{
            if(sum==100){
                clearInterval(clear);
               }
            else{
                loading() 
            }
        },100)
    },1000)
}
