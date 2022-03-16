# Todo App

This project displays users details, and each of their todos and posts.  
It was made with react, without state management.  
The initial data uses the https://jsonplaceholder.typicode.com/ api.  

## Details

"search" searches the users by name or email.  
The "add" button is to add new users.  
Click on "id" to display that user's todos and posts.  
Mouse over "other data" to display more user details. Click on it to close it.  
A user's border is green if all the todos are completed, and red if not.  

## Structure
App:  
&ensp;&ensp;&ensp; MainScreen -> Searchbar, User  
&ensp;&ensp;&ensp; SideScreen -> Todo, Post, AddTodo, AddPost  
&ensp;&ensp;&ensp; AddUser  
