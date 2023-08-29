print("Enter first number")
n1 = int(input())

print("Enter second number")
n2 = int(input())

print("Enter third number")
n3 = int(input())

if n1 > n2:
    if n1 > n3:
      print("n1 is greatest")
    else:
      print("n3 is greatest")
else:
    if n2 > n3:
      print("n2 is greatest")
    else: 
       print("n3 is greatest")     
