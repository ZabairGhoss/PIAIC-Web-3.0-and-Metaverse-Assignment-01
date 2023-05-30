const users: string[] = ['admin', 'Eric', 'John', 'Jane', 'admin123', 'kristine']; 


if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < users.length; i++) {
    console.log(`User ${i + 1}: ${users[i]}`);
  }
}

// Remove all usernames from the array
users.length = 0;

if (users.length === 0) {
  console.log("We need to find some users!");
}
