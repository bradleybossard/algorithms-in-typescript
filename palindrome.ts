function isPalindrome(s: string): boolean {
  const reversed = s.split('').reverse().join('');
  return s === reversed;
}

function isAnyPermutationPalindrome(s:string): boolean {
  const unmatched = new Set<string>();
  s.split('').forEach(char => {
    if (unmatched.has(char))
      unmatched.delete(char);
    else
      unmatched.add(char);
  })
  return unmatched.size <= 1;
}

const strings = [
'civil',
'toot',
'beaeb'
];

for (const s of strings) {
  console.log("Is " + s + " a palindrome: ", isPalindrome(s));
  console.log("Is any permutation of " + s + " a palindrome: ", isAnyPermutationPalindrome(s));
}
