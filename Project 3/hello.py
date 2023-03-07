userName='Peter'
# print(userName)
# jobRole='Student'
# print(userName,'is a ', jobRole)
# print(userName+ ''+'is a'+' '+ jobRole)
# msg= '''the price of %s is %d, the exchange rate
# is  %4.2f europe dollar to 1 usd'''% ('Apple', 10, 1.011)
# print(msg)

# userFirstName=input('Enter your name:')
# userLastName=input('Hey %s, what is your last name?:'%(userFirstName))
# userFavrFood=input('okay {0:s} {1:s}, what id your fav food?'.format(userFirstName,userLastName))

userList= [['Peter', 1990, 'p@gmail.com'], 'Lucas', 'Jack']
print(userList)
print(userList[0])
print(userList[-1])
print(userList[1:])
print(userList[:2])
print(userList[0:4:2])

# tuples are lists thay are not mutable
# eg. months=('Jan', 'Feb', 'Mar')

#DICTIONARY
peter={'firstName':'Peter', 'lastname':'Smith','birthYear':1990}
print(peter)
print(peter['birthYear'])

peter['birthYear']=1992
print(peter)

# COntrol Flow Statement
userInputNew= input('Enter your food?')
if userInputNew == 'Pizza':
    print('your food() will be ready'.format(userInputNew))
elif userInputNew == 'bagel':
    print('sorry{} is not available today'.format(userInputNew))
else:
    print('Invalid Input')

#do taskA if condition is true else DO taskB

msg_new='Good Choice' if userInputNew == 'Pizza' else 'Invalid'
msg_new='Good choice' if userInputNew == 'Pizza' else 'Invalid'

try:
    resultNum=10/0
    print(resultNum)

except:
    print('Error!')



        
