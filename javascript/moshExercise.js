/*const numbers = arrayFromRange(-10,-4);

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
}*/

const listofNum = [20,4,7,49,1,2];

const max = getMax(listofNum);

console.log(max);

function getMax(array){
    if(array.length===0) return undefined;

    /*let maxNum = 0;
    for(let num of array)
        if(num > maxNum)
            maxNum = num;
    return maxNum;*/

    //You can use reduce method instead of the above coding to find the maximum number
    return array.reduce((previousValue,currentValue) => previousValue > currentValue ? previousValue : currentValue);
}

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3.5},
    {title: 'd', year: 2017, rating: 3.9},
];

const titles = movies.filter(m => m.year === 2018 && m.rating >= 4).sort((a,b) => a.rating - b.rating).reverse().map(m => m.title);

console.log(titles);

//Function declaration
function walk(){
    console.log("Walk to JavaScript function declaration");
}

walk();

//Expression function declaration
const run = function(){ console.log("This is an anonymus like variable declartion function")};
run();

/*function sum(){
    let total = 0;
    for(let num of arguments)
        total += num;
    return total;
}*/

console.log(sum(2,3,4,1,5));

//REST operator
function sum(...args) {
    return args.reduce((a,b) => a + b);
}

function totalPrice(discount, ...prices) {
    const total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
}

console.log(totalPrice(0.2, 20, 30));

//Default value for parameter

function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000));

//Sum the number you pass, it could be an Array
const total = sum([1,2,3,4]);

console.log(total);

function sum(...num){
    if(Array.isArray===true)
        for(let value of Array)
            return  value += value;
    else return num += num;
}