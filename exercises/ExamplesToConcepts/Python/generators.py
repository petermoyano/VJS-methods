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
for _ in range(1, 11):
  print(next(fractal_object))

