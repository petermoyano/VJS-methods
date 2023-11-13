# Create a function that takes an array of integers and moves the 0s to the back of the array.
def move_zeros(ints_array):
  for index, int in enumerate(ints_array):
    if int == 0:
      ints_array.pop(index)
      ints_array.append(0)
  return ints_array
print(move_zeros([1, 2, 0, 3, 0, 4, 5]))

import time
import random
n = 200000
large_ints_array = [random.randint(0, 9) for _ in range(n)]
start = time.time()
move_zeros(large_ints_array)
stop = time.time()
print(stop-start)

def improved_move_zeros(ints_array):
  result = []
  number_of_zeros = 0
  for int in ints_array:
    if int == 0:
      number_of_zeros += 1
      continue
    result.append(int)
  result.extend(number_of_zeros * [0])
  return result

start = time.time()
improved_move_zeros(large_ints_array)
stop = time.time()
print(stop-start)
print(improved_move_zeros([1, 2, 0, 3, 0, 4, 5]))