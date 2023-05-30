
function make_Shirt(size: string = "L", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
  }
  
  // Making a large shirt with the default message
  make_Shirt();
  
  // Making a medium shirt with the default message
  make_Shirt("M");
  
  // Making a small shirt with a different message
  make_Shirt("S", "Hello World!");
  