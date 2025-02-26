//shallow copy
const arr = {
name :"Asad",
location:"lahore",
destiny:{profession:"developer" }
};
//Shallow copy
const shallow = {...arr};
shallow.name="Asad javed",
shallow.location="Multan",
shallow.destiny.profession="web developer",
console.log(shallow);
//deep copy
const deepcopy=JSON.parse(JSON.stringify(arr))
deepcopy.name="Rana"
deepcopy.location="Pindi"
deepcopy.destiny.profession="Peace"
console.log(deepcopy);

console.log("form filling with formik completed kjkjhjkkll .......");
console.log("authication with formik completed kjkjhjkkll .......");


{
// asycnrous 
console.log("form filling with formik completed kjkjhjkkll .......");
}



console.log("helle ");

setTimeout(()=>{
console.log("im in settimeout....");
},0);//this will be send into call back qeue and will wait for the response to cout

console.log("my name is asad ....");



// git add .    ==> stage kr do meray code ko   
// git commit -m "me ye naya kaam kia" ==>   add kr do purany code me 
// git push   ==> remote branch per bejh do



// react 
// event looop
// filter 
// includes
// reduce 
// map
// forEach
// 