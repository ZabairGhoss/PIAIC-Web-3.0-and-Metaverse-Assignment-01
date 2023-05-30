import { updated_guest_list } from "../Exercise-15/Q15";

let newGuest1 = 'Talha';
let newGuest2 = 'Mohsin';
let newGuest3 = 'Ayub';

console.log("AlHamduLillah! I find a bigger dinner table!");

updated_guest_list.unshift(newGuest1);

const mid: number = updated_guest_list.length/2;

updated_guest_list.splice(mid,0, newGuest2);

//the append() method of Array is not supported in JS or TS
updated_guest_list.push(newGuest3);

export let guest_list: string []= updated_guest_list;

updated_guest_list.forEach((person)=>{
    console.log(`Dear ${person},\nYou are cordially invited to dinner with me. Please let me know if you are available.\nBest regards,\nZabair Ghoss`);
});

