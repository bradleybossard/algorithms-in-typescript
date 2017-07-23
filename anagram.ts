function isAnagram(s1: string, s2: string): boolean {
  const charCount = new Map<string, number>();
  for (const char of s1.split('')) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of s2.split('')) {
    if (!charCount.has(char)) return false;
    charCount.set(char, charCount.get(char) - 1);
  }
  return Array.from(charCount.values()).every(val => val === 0);
}

const list = [
  {s1: 'listen', s2: 'silent'},
  {s1: 'foo', s2: 'bar'}
]

for (const i of list) {
  console.log(i.s1 + ' ' + i.s2 + ":", isAnagram(i.s1, i.s2))
}



