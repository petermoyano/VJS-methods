# Write a function that returns the first 100 numbers of the fibonacci sequence
fibonacci_cache = {}

def fibonacci(n):
  """A function that the nth number of the fibonacci sequence."""
  if n in fibonacci_cache:
    return fibonacci_cache[n]
  
  if n == 1 or n == 2:
    fibonacci_cache[n] = 1
    return fibonacci_cache[n]
  if n > 2:
    value = fibonacci(n-1) + fibonacci(n-2)
    fibonacci_cache[n] = value
    return value

for _ in range(1, 101):
  print(fibonacci(_))
  