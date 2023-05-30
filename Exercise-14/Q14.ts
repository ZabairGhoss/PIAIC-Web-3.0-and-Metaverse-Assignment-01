
export let guest_list: string [] = ["Muhammad Yasir", "Ali Zia", "Ammar Naeem", "Muhammad Abdullah"];

guest_list.forEach((person)=>{
    console.log(`Dear ${person},\nYou are cordially invited to dinner with me. Please let me know if you are available.\nBest regards,\nZabair Ghoss`);
})