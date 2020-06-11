Python 3.5.2 (v3.5.2:4def2a2901a5, Jun 25 2016, 22:18:55) [MSC v.1900 64 bit (AMD64)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> import random
>>> def caishu():
	i=0
	key=random.randint(1,10)
	while i<5:
		guess=int(input("enter:"))
		if guess==key:
			print('good guess!')
			break
		elif guess>key:
			print('guess > key try again')
		elif guess<key:
			print('guess < key try again')
		i+=1
	else:
		print('game over!')
		print('The key is:',key)

		
>>> caishu()
enter:5
guess > key try again
enter:6
guess > key try again
enter:1
guess < key try again
enter:2
guess < key try again
enter:4
good guess!
>>> 
