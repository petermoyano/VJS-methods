# Print the numbers from 1 to 100
# if its divisible by 3 print "fizz"
# if its divisible by 5 print "buzz" 
# if its divisible by 3 and 5 print "fizzbuzz" 

for num in range(1, 101):
  if num % 3 == 0 and num % 5 == 0:
    print("fizzbuzz")
  elif num % 3 == 0:
    print("fizz")
  elif num % 5 == 0:
    print("buzz")
  else:
    print(num)

