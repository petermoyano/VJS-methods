# Write a decorator timer that measures the execution time of a function.
# Apply this decorator to a function that calculates the nth Fibonacci number
# and observe the difference in execution times for different values of n.

#Peter's attempt:
def execution_time(func):
  """A decorator function to measure the execution time of a function"""
  import time
  start = time.time()
  func()
  stop = time.time()
  print(stop-start)

def fibonacci(n):
  if n ==0:
    return 0
  if n==1:
    return 1
  return fibonacci(n-1) + fibonacci(n-2) 

print(fibonacci(10))


# @execution_time
# def say_whee():
#   print("Wheeeee!")

# def test (*args, **kwargs):
#   print("This is args: ", args)
#   print("This is kwargs: ", kwargs)

# test(1,2,3, test=1, another_test="asd", ok=True)




# def my_decorator(func):
#     def wrapper():
#         print("Something is happening before the function is called.")
#         func()
#         print("Something is happening after the function is called.")
#     return wrapper

# def say_whee():
#     print("Whee!")

# say_whee = my_decorator(say_whee)
# say_whee()

