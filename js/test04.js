/*
* Створити функцію getData, яка приймає два колбеки
 на випадок успішного виконання завдання (`Ми це зробили,
 Біллі - ${msg}`) та на випадок помилки (`Кеп, у нас проблема - ${err}`).
 * Завдання повинно випадково виконуватися із затримкою в 1 секунду.
 * Якщо успішно -  передати в колбек '✅ СУПЕР!', якщо ні - '❌ ПОМИЛКА!'
* Переписати на Promise (спочатку з двома колбеками в then, потім з catch)
 * При будь-якому результаті в кінці виводити '🚀 Finished!'
*/


function getData() { 
    const flag = Math.random() > 0.5;
    return new Promise((res, rej) => { 
        setTimeout(() => { 
            if (flag) { res('✅ СУПЕР!'); }
            else { rej('❌ ПОМИЛКА!'); }
        }, 1000)
    })
}

getData().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
}).finally((error) => {
    console.log('🚀 Finished!')
});