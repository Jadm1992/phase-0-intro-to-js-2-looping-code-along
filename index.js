// Code your solutions in this file

// const name = ["Guadalupe", "Ollie", "Aki"];
// const event = 'suprise';

const arr1 = [];
function writeCards(names, event){
    for (let i = 0; i < names.length; i++) {
        arr1.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;}
    
    return arr1;
    }

function countDown(init = 10) {
    while (init >= 0) {
        console.log(init--);
    }
}