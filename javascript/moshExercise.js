const numbers = arrayFromRange(-10,-4);

console.log(numbers);

function arrayFromRange(min,max){

    let number = [];
    
    for(let i=min;i<=max;i++){
        number.push(i);
    }
    return number;
}

const number = [1,2,3,4,5];

console.log(includes(number,1));

function includes(array,searchElement){
    for(let element of array){
        if(element===searchElement)
        return true;
    return false;
    }
}

const numberList = [1,2,2,3,4,5];

const result = except(numberList, [1,2,3]);

console.log(result);

function except(array, excluded){
    const output = [];
    for(let num of array)
        if(!excluded.includes(num))
           output.push(num);
    return output;
}