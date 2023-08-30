#calcultor program
# 1 menu
import os
def addition():
    print("addition of two number")
    num1 = int(input("enter first number"))
    num2 = int(input("enter second number"))
    sum = num1 + num2
    return sum
    #print("sum =",sum)
def substraction():
    print("substraction") 
    num1 = int(input("enter first number"))
    num2 = int(input("enter second number"))
    differnce = num1 - num2
    return differnce
    #print("difference=",difference)
def multiplication():
    print("multiplication") 
    num1 = int(input("enter first number"))
    num2 = int(input("enter second number"))
    product = num1 * num2
    return product
    #print("product =,product")
def division():
    print("division")
    num1 = int(input("enter first number"))
    num2 = int(input("enter second number"))
    quotient = num1/num2
    return quotient
    #print("quotient=",quotient)        
while 1:
    os.system("cls")
    print("enter 1 for addition")
    print("enter 2 for substraction")
    print("enter 3 for multiplication")
    print("enter 4 for division")
    print("enter 0 to exit")
    userchoice = int(input("enter your choice:"))
    if(userchoice == 0):
        break 

    num1 = int(input("enter first number"))
    num2 = int(input("enter second number"))
    result = 0
    if(userchoice == 1):
        result = addition(num1,num2)
    elif(userchoice == 2):
        result = substraction(num1,num2)
    elif(userchoice == 3):
        result = multiplication(num1,num2)
    elif(userchoice == 4):
        print("division")
        result = division(num1,num2)
    else:
        print("wrong choice")
    print("result=",result)    
    input("press enter to continue....")      

    
    