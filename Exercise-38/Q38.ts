
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Calling the function for three different cities
  describe_city("Karachi");
  describe_city("London", "United Kingdom");
  describe_city("Sydney", "Australia");
  