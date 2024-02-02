


  export const  GenerateRandomDigits = (NoOfDigits:number) =>{
    
    if (!Number.isInteger(NoOfDigits) || NoOfDigits <= 0) {
      throw new Error('Digits must be a positive integer greater than zero');
    }
  
    // Calculate the minimum and maximum values for the specified number of digits
    const min = 10 ** (NoOfDigits - 1);
    const max = 10 ** NoOfDigits - 1;
  
    // Generate a random number within the specified range
    const GeneratedDigits = Math.floor(min + Math.random() * (max - min + 1));
  
    return GeneratedDigits;
  }