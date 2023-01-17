// task 1
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
// task 2
function pow(x, n){
    let res = 1;
    for(let i = 0; i < n; i++){
        res *= x;
    }
    return res;
}
// task 3
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
ask(
    "Вы согласны?",
    () => alert("You agreed"),
    () => alert("You didn't agree")
);
// task 4
let cmp = (a, b) => -(a - b)
let arr = [5, 2, 1, -10, 8];
arr.sort(cmp)

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
// task 5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names); // Вася, Петя, Маша
// task 6
vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({fullName: item.name + ' ' + item.surname, id : item.id}));
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
// task 7
vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

function getAverageAge(arr){
    let sum = 0, n = 0;
    for(let item in arr){
        sum += arr[item].age;
        n++;
    }
    return sum / n;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28