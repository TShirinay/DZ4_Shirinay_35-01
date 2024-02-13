function arifmetical (numbers){
    var sumNumbers = 0
    var numbersCounter = 0
    for (var num of numbers){
        if (num > 0){
            sumNumbers += num
            numbersCounter++
        }
    }
    var average = sumNumbers / numbersCounter
    return average
}
console.log(arifmetical([2, -78, 45,4,-7,-6,-10, 26, 30, 8]).toFixed(2))


function square (numbers){
    var numbersSum = 0
    for (var el of numbers){
        if (el % 2 === 0){
            numbersSum += el*el
        }
    }
    return numbersSum
}
console.log(square([2, 87, 4, 45, 3, 9, 6, 26, 30, 8, 46, 20, 15]))


function examination (numbers){
    if (numbers < 2){
        console.log(false)
        return
    }
    for (var i = 2; i*i <= numbers; i++){
        if (numbers % i ===0){
            console.log(false)
            return
        }
    }
    console.log(true)
}
examination(7)


const numbers = [10, 15, 20, 25, 30];

let average = 0;
for (let i = 0; i < numbers.length; i ++){
    average += numbers[i];
}
average = average / numbers.length;
console.log("Среднее значение в массиве:", average);