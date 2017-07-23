for (let i = 1; i < 100; i++) {
  const isFizz = i % 3 === 0;
  const isBuzz = i % 5 === 0;
  const result =
  isFizz && isBuzz
    ? 'FizzBuzz'
    : isFizz
      ? 'Fizz'
      : isBuzz
      ? 'Buzz'
      : i;
  console.log(result);
}
