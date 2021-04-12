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

const numList = [1,2,3,4,5];

const output = move(numList,2,2);

console.log(output);

function move(array,index,offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error("Invalid offset");
        return;
    }

    for(let num of array){
        const output = [...array];
        const spliceOut = output.splice(index,1)[0];
        output.splice(position,0,spliceOut);
        return output;
    }
}

const listNumbers = [1,2,3,2,4,3,2,5,4,3,3,1,5,5,5,2];

const count = countOccerunce(listNumbers,2);

console.log(count);

function countOccerunce(array,element){
    // let counter = 0;
    // for(let num of listNumbers)
    //     if(num===element)
    //         counter++;
    // return counter;

    array.reduce((accumulator,current)=>{
        const occurrence = (current === element) ? 1 : 0;
        console.log(accumulator,current,element);
        return accumulator + occurrence;
    },0);
}

const listofNum = [20,4,7,9,1,2];

const max = getMax(listofNum);

console.log(max);

function getMax(array){
    let maxNum = 0;
    for(let num of array)
        if(num > maxNum)
            maxNum = num;
    return maxNum;
}