'use strict';
// Домашнее задание

// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, myDog, guests
// Функции: dogYears, makeTea, secret
// Встроенные функции: console.log
// Аргументы: myDog, 4, guests, 'Earl Grey'
// Параметры: dogname, age, cups, tea
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
/* let names = "JS"
console.log(names.toLowerCase()); */

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
/* let names = 'я люблю JS!'
console.log(names.substr(2, 8));
console.log(names.substring(2, 10));
console.log(names.slice(2, 10)); */

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
/* let names = 'я люблю JS!'
console.log(names.indexOf('люблю')); */

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
/* let txt = "1234s"
let n = 5
let result = ""
if (txt.length > n) {
    for (let i = 0; result.length < n; i++) {
        result = result + txt[i]
    }
    result = result + "..."
} else {
    result = txt
}
console.log(result)
 */

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
/* let names = 'Я-люблю-JS!'
console.log(names.replace(/-/g, "!")); */

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
/* let names = 'я люблю JS'
console.log(names.split(" "))
 */

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
/* let names = "привет мир"
console.log(names.split(''))
 */