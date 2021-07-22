import { assertEquals, assertStrictEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts'

import '../index.js'

Deno.test('array sum', () => {
  const arr = [1, 2, 3, 4]
  assertEquals(arr.sum(), 10)

  const arr2 = [1, 2, undefined, 4]
  assertEquals(arr2.sum(), 7)

  const arr3 = []
  assertEquals(arr3.sum(), 0)

  // const arr4 = ['1', '2', '3', '4']
  // assertThrows(() => arr4.sum(), TypeError)

  // const arr5 = [1, '2', '3', '4']
  // assertThrows(() => arr5.sum(), TypeError)
})

Deno.test('array uniq', () => {
  const arr = [1, 2, 3, 1]
  assertEquals(arr.uniq(), [1, 2, 3])

  const arr2 = [1, undefined, undefined, 1]
  assertEquals(arr2.uniq(), [1, undefined])

  const arr3 = []
  assertEquals(arr3.uniq(), [])
})

Deno.test('array first', () => {
  const arr = [1, 2, 3, 4]
  assertEquals(arr.first(), 1)

  const arr2 = [null, 2, 3, 4]
  assertEquals(arr2.first(), null)

  const arr3 = []
  assertEquals(arr3.first(), null)
})

Deno.test('array last', () => {
  const arr = [1, 2, 3, 4]
  assertEquals(arr.last(), 4)

  const arr2 = [1, 2, 3, null]
  assertEquals(arr2.last(), null)

  const arr3 = []
  assertEquals(arr3.last(), null)
})

Deno.test('array clone', () => {
  const arr = [1, 2, 3, 4]
  assertStrictEquals(arr.clone(), arr)

  const arr2 = [null, 2, 3, 4]
  assertEquals(arr2.clone(), arr2)

  const arr3 = []
  assertEquals(arr3.clone(), arr3)
})
