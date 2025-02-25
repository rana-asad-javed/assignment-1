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