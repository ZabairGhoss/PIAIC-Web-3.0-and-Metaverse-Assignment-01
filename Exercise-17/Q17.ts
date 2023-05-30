import { guest_list } from "../Exercise-16/Q16";

console.log(`\n\nI'm sorry for inconvenience, there is only 2 people are allowed for dinner.\n`);

while (guest_list.length >2) {
    let guest = guest_list.pop();
    console.log(`Sorry, ${guest}, you can't be invited to dinner.`);
}

console.log(`Hello, ${guest_list[0]}! You're still invited to dinner.`);
console.log(`Hello, ${guest_list[1]}! You're still invited to dinner.`);

export let invitedPeople: string [] = [...guest_list];

guest_list.pop();
guest_list.pop();

console.log(`Guest list: ${guest_list}`);