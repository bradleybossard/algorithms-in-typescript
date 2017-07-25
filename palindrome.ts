function isPalindrome(s: string): boolean {
  const reversed = s.split('').reverse().join('');
  return s === reversed;
}

function isPalindrome2(s: string): boolean {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
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

// Generate random 10 char string and its reverse, then combine
// them to form a large palindrome 
let strings = [];
for (let i = 0; i < 3; i++) {
  const s = Math.random().toString(36).substr(2, 10);
  const r = s.split('').reverse().join('');
  strings.push(s + s + s + s + r + r + r + r);  // Good palindrome
  strings.push(s + s + s + s + r + r + r);      // Bad palindrome
}

for (const s of strings) {
  console.time('isPalindrome');
  console.log("Is " + s + " a palindrome: ", isPalindrome(s));
  console.timeEnd('isPalindrome');
  console.time('isPalindrome2');
  console.log("Is " + s + " a palindrome: ", isPalindrome2(s));
  console.timeEnd('isPalindrome2');
}
