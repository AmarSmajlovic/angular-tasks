//Zadatak 1

const obj = {property1:{property2:"Apple",property3:"Orange"}};
const path = 'property1.property3';

const lookup = (obj,path) => {
    let value = obj;
    path.split('.').forEach(i=>value=value[i]);
    return value;
};

// console.log(lookup(obj,path));

//Zadatak 2

a = [{id:1, value:3}, {id:2, value:7}, {id:3, value:3}, {id:4, value:1}, {id:5, value:4}]


function newObject(array){
    let id;
    let value = 0;
    let valuesArray = [];
    id = array.length + 1;
    for(var i=0;i<array.length;i++){
        if(array[i].id === id){
            id++;
        }
        value++
       valuesArray.push(array[i].value)
       valuesArray.sort((a, b) => a - b)
       for(var i=0;i<valuesArray.length;i++){
           if(valuesArray[i] === value)
           value++
       }
       
    }
    console.log(array);
    console.log(`Solution : {id:${id},value:${value}}`)
    array.push({id:id,value:value})
}

newObject(a);
newObject(a);
