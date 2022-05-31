const VOWELS = ['a', 'e', 'i', 'o', 'u']
const SPECIAL_CHARS = [
  "'",
  ' ',
  '"',
  '?',
  '!',
  ',',
  '.',
  '@',
  '#',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
]

export const translate = (sentence = ''): string => {
  const translation: string[] = []

  for (let i = 0, n = sentence.length; i < n; i += 1) {
    const letter = sentence[i]

    if (
      SPECIAL_CHARS.includes(letter) ||
      VOWELS.includes(letter.toLowerCase())
    ) {
      translation.push(letter)
    } else {
      translation.push(letter + 'o' + letter)
    }
  }

  return translation.join('')
}

export const reverse = (translation = '') => {
  const sentence: string[] = []

  for (let i = 0, n = translation.length; i < n; i += 1) {
    const letter = translation[i]

    if (
      SPECIAL_CHARS.includes(letter) ||
      VOWELS.includes(letter.toLowerCase())
    ) {
      sentence.push(letter)
    } else {
      i += 2
      sentence.push(letter)
    }
  }

  return sentence.join('')
}
