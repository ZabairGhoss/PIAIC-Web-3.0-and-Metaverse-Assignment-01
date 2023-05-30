function storeCarInfo(manufacturer: string, modelName: string, ...kwargs: Array<{ [key: string]: any }>): { [key: string]: any } {
    const carInfo: { [key: string]: any } = {
      manufacturer,
      modelName,
      ...kwargs
    };
    return carInfo;
  }
  
  const myCar = storeCarInfo("Ford", "Mustang", { color: "Red", year: 2022 });
  
  console.log(myCar);
  