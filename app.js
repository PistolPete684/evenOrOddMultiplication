function simpleMultiplication(number) {
    // determine if even or off with modulo 
  
  const evenOrOdd = number % 2
  
  if (evenOrOdd === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}