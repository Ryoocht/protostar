import getRandomArbitrary from './get-random-arbitrary'
export default function getRandomElementArray<T>(elements: T[]): T {
  const element = elements[getRandomArbitrary(0, elements.length - 1)]
  if (!element) throw new Error('Could not find an element')
  return element
}
