const current_users: string[] = ["John", "Jane", "Mike", "Emily", "Alex"];
const new_users: string[] = [ "Kate","JOHN", "Sam","ALEX", "Chris"];

for (let i = 0; i < new_users.length; i++) {
  const new_username = new_users[i];
  const is_username_taken = current_users.some(
    (username) => username.toLowerCase() === new_username.toLowerCase()
  );

  if (is_username_taken) {
    console.log(`Username "${new_username}" is already taken. Please enter a new username.`);
  } else {
    console.log(`Username "${new_username}" is available.`);
  }
}
