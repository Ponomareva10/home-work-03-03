let num = [1, 2, 3, 4, 5];
for (let i = 0; i <= num.length; i++) {
    console.log(num[i]);
}

let random = [2, 5, 9, 15, 0, 4];
for (let a = 0; a <= random.length; a++) {
    if (3 < a < 10) {
        console.log(random[a]);
    }
}

let number = [10, 20, 30, 50, 235, 3000];
for (let ii = 0; ii < number.length; ii++) {
    const elem = number[ii];
    if (parseInt(elem.toString()[0]) === 1)
    console.log(elem);
    if (parseInt(elem.toString()[0]) === 2)
    console.log(elem);
    if (parseInt(elem.toString()[0]) === 5)
    console.log(elem);
}

let arr = [1,2,45,'hello', 233, 100, 'world', 45];
for (let ia = 0; ia < arr.length; ia++) {
    const element = arr[ia];
    if(typeof element === 'number') {
        console.log(element);
    }
}

let day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
let weekend = 5;
while (weekend <= 6) {
    console.log(day[weekend]);
    weekend++;
}