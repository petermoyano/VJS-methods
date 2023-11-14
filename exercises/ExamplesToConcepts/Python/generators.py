# Create a generator function fractal_sequence that generates an infinite sequence of numbers where each 
# number is twice the previous one, starting from 1 (i.e., 1, 2, 4, 8, 16, ...).
# Then write a small script to iterate over the first 10 numbers of this sequence and print them.
def fractal_sequence():
  """A generator function that generates an infinite sequence of numbers"""
  num = 1
  while True:
    yield num
    num *= 2

# Create the generator object
fractal_object = fractal_sequence()
for _ in range(1, 3):
  print(next(fractal_object))

import itertools
def prime_numbers():
    """A generator function that generates all prime numbers"""
    primes_cache = [2]
    yield 2
    for current_num in itertools.count(3, 2):
      is_prime = True
      for prime in primes_cache:
        if current_num % prime == 0:
          is_prime = False

      if is_prime:
        primes_cache.append(current_num)
        yield current_num


primes_gen = prime_numbers()

for _ in range(1, 21):
  print(next(primes_gen))
