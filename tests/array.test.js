import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

import '../index.js'

Deno.test('array sum', () => {
  const arr = [1, 2, 3, 4]
  assertEquals(arr.sum(), 10)
});