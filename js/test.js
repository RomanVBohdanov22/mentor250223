/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */
/*
function greet() {
    return new Promise((res, rej) => {
        setTimeout(() => { res('hello world') }, 2000)
            ;
    })
}*/

/**
 * - Використовуй prompt та повертай значення звідти.
 * - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс та логіруй "error".
 * Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.
 */

const promptValue = prompt("hello: ");

function createPromise(value) {
    return new Promise((res, rej) => {
        value = Number(value);
        if (isNaN(value)) {
            console.log(value);
            throw new Error("Error! Need number!");
        }
        const obj = {
            text: "even",
            delay: 1000,
        };

        if ((value % 2) !== 0) {
            obj.delay = 2000;
            obj.text = 'odd';
        }
        setTimeout(() => {
            res(obj.text);
        }, obj.delay);
    });
}
 
createPromise(promptValue).then((response) => console.log(response))
    .catch((error)=>console.log(error));
