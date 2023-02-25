/*
 * Є функція, яка генерує випадкові числа від 1 до 4.
 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`),
 *  і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;

function makePromice() {
    const delay = getRandomNumber()*1000;
    return new Promise((res, rej) => { 
        setTimeout(() => {
            if ((delay>=1000)&&(delay<=2000)) { res(`✅ Resolved after ${delay} sec`); }
            else { rej(`❌ Rejected after ${delay} sec`); }
        }, delay)
    }
                
)}
   

makePromice().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
}).finally((error) => {
    console.log('🚀 Finished!')
});
