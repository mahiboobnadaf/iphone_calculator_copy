

let ptag=document.querySelector(".display")
let count=ptag.innerText
// console.log(`${count}`)

const dell=document.getElementById("displayy");
console.log(dell)



if (count==0){
    count=''
}
let new_count=''




function show(x){
    console.log(typeof(count))
    new_count=count+=x
    ptag.innerText=`${count}`    
}
function reset(){
    count=''
    // x=0
    new_count='0'
    ptag.innerText=`${new_count}`
    console.log()
}

function ps_or_ms(){
    count*=-1
    ptag.innerText=`${count}`
}

function percent(){
    count=count/100;
    ptag.innerText=`${count}`

}



function calculate(){
    console.log(new_count)
    let res=eval(new_count)
    console.log("calcauate called");
    console.log(eval(new_count))
    new_count=count=res
    if(res==Infinity){
        res='Error'
        ptag.innerText=`${res}`
    }
    // let res=eval(new_count)
    ptag.innerText=`${res}`
}




//Numbers

// let nums=document.querySelectorAll('.num,.zero,.dot')
let nums=document.querySelectorAll('.btn')

console.log(nums);

for(let a of nums){
    // console.log(a)
    console.log(a.innerText)
    if(a.innerText=='AC'){
        console.log("ac");
        a.addEventListener('click',()=>reset())
    }
    else if(a.innerText=='%'){
        console.log("per");

        a.addEventListener('click',()=>percent())
    }
    else if(a.innerText=='+/-'){
        console.log("P0-");

        a.addEventListener('click',()=>ps_or_ms())
    }
    else if(a.innerText=='='){
        console.log(a);

        a.addEventListener('click',()=>calculate())
    }
    else{
        console.log("else");

        a.addEventListener('click',()=>show(a.innerHTML))

    }
}

dell.addEventListener("mouseover", (screen) => {new_count=count=count.slice(0,-1);
                    ptag.innerText=`${count}`
            });
