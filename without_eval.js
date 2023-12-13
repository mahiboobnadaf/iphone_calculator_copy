// let str='12+40/6-2*4'
// let re=/[/\*+-]/g

// let arr_str=str.split('')
// console.log(arr_str)

// console.log(str.indexOf('/'))

// let dvd_value=str.indexOf('/')
// let mul_value=str.indexOf('*')
// let min_value=str.indexOf('-')
// let plus_value=str.indexOf('+')

// console.log('dvd:',dvd_value,'mul:',mul_value, 'min:',min_value ,'plus:',plus_value);


//
// let a='+'||'-'||'*'||'/'
// let d=[]
// for(let i=0;i<str.length-1;i++){
//    if(str.at(i)=='+'){
//         console.log(str.indexOf(str.at(i)))
       
//         while (str.at(i+1)!=a){

//             console.log(i+1)
//             d.push(str.at(i+1))
//             console.log(d)
            
            
//         }

//     }
// }

// let str='12+321/3-8*2'
// let re=/[0-9]+[\/][0-9]+/g

// let div_matched=str.match(re)

// let div_matched_str=div_matched.join()


// let div_matched_len =div_matched_str.length

// let div_symbol_ind=div_matched_str.indexOf('/')

// let para1=[]
// let para1_num

// let str1 = "";
// for(let i=0;i<div_symbol_ind;i++){
//     // para1=[]
//     str1+=div_matched_str[i];

//     para1.push(div_matched_str.charAt(i))
// }
// // console.log(para1)
// console.log(str1,"str1");
// para1_num=Number(para1.join(''))

// console.log(para1_num)

// let para2=[]
// let para2_num

// for(let j=div_symbol_ind+1;j<div_matched_len;j++){
//     // para1=[]
//     console.log(div_symbol_ind)
//     para2.push(div_matched_str.charAt(j))
// }
// // console.log(para2)

// para2_num=Number(para2.join(''))

// // console.log(para2_num)

// let div_res= para1_num / para2_num

// console.log(div_res);

// str.replace(re,div_res)

// let str='12+321/3-8*2'
// let re=/[0-9]+[\/][0-9]+/g

// let div_match=str.match(re)

// let [para1,para2]=div_match.join().split('/')

// let div_res=para1/para2

// str.replace(re,div_res)

let str='12+33/3-8*2'

let obj={1:'/',2:'*',3:'+',4:'-'}

let a=Object.keys(obj)

for(let i=1;i<=a.length;i++){
    let exp="\\"+obj[i];
    let operation=`[0-9]+${exp}[0-9]+`
    let re2=new RegExp(operation,"g")
    console.log(re2)
    let matched=str.match(re2)
    console.log(`matched ${matched}`)
   
    // for (let m in matched){

    // }
    
    //separeting variable and calcuating

    let para1,para2
    [para1,para2]=(matched.join()).split(obj[i])
    console.log(para1,para2)

    let result
    switch(i){
        case 1:
            result=para1 / para2
            console.log(result)
            str=str.replace(re2,String(result))
            // console.log(`striiiii ${str}`)
            break
        case 2:
            result=para1 * para2
            str=str.replace(re2,String(result))
            break
        case 3:
            result=Number(para1) + Number(para2)
            str=str.replace(re2,String(result))
            break
        case 4:
            result=para1 - para2
            str=str.replace(re2,String(result))
            break

    }
    console.log(str)


}   
console.log(`Final result is ${str}`)