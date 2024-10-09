//Write your solutions in this file, don't forget to test your functions.

//1
const countFromOne = (int) => {
    let i = 0
    while (i < int) {
        i++
        console.log(i) 
    }
}

//2
const countEveryOdd = (int) => {
    let i = 0
    while (i < int) {
        if(i % 2 === 1) {
            console.log(i)
        }
        i++
    };
};

//3
const isNegative = (num) => {
    if (num < 0) {
        return true
    } else {
        return false
    }
}

//4
const betweenFiveAndTwenty = (int) => {
    if (int >= 5 && int <= 20) {
        return true
    } else {
        return false
    };
};

//5
const sumOfThreeOrFive = () => {
    let i = 0
    let result = 0
    while (i < 1000) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i
        }
        i++
    }
    return result
}

//6
const isAllLowerCase = (str) => {
    if (str !== str.toLowerCase()) {
        return false
    } else {
        return true
    };
};

//Bonus
const countMultiplesOfFive = (arr) => {
    let i = 0;
    let count = 0;
    while (i < arr.length) {
        if (arr[i] % 5 === 0) {
            count++
        }
        i++
    };
    return count
};