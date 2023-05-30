import { guest_list } from "../Exercise-14/Q14";
let unableToAttend:string = "Ammar Naeem";
let replacement:string = "Ahmad Faraz";

console.log(`\n\n Unfotunately, Mr. ${unableToAttend}, couldn't make to attend the Dinner.\n`)

export let updated_guest_list: string [] = guest_list.filter((person)=> person !== unableToAttend);
updated_guest_list.push(replacement);

updated_guest_list.forEach((person)=>{
    console.log(`Dear ${person},\nYou are cordially invited to dinner with me. Please let me know if you are available.\nBest regards,\nZabair Ghoss`);
});

