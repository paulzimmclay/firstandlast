function highAndLow(numbers){
  // add numbers to array, sort
  const sortedArrayConversion = numbers.split(" ").sort((a, b) => b - a)
  // pick off first and last, add to array
  const firstAndLastArray = [sortedArrayConversion[0], sortedArrayConversion[sortedArrayConversion.length - 1]]
  // convert to string
  return firstAndLastArray.join(" ")
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))