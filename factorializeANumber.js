function factorialize(num) {
    let counter = 1;
    let i = 1;
    while (i <= num) {
        counter *= i;
        i++;
    }
  return counter;
}
