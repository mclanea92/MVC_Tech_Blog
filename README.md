# MVC_Tech_Blog

## Description
Using express, handlebars, sequlize and mysql this Tech Blog is used to login or create a new user that can post into a board for a bunch of people to look at and comment on.

## My Task
My task for this project was to create a database which holds the user information and any posts or comments that they add to others posts.  

## List of Technologies Uses
- npm
- sequelize
- javascript
- mysql
- databases
- insomina
- mySQL workbench
- handlebars

## Github URL

https://github.com/mclanea92/MVC_Tech_Blog

## Heroku URL

https://tech-blog-mclane.herokuapp.com/

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Tests
- In terminal "npm i" to install all packages that are in the package.json
- Enter your information for mysql in the .env file
- In terminal run seeds ( node seeds )
- In terminal run server ( node server.js )
- Open browser to http://localhost:3001/ to get to homepage

## Screenshots
This screenshot shows the server code to allow the server to run correctly with handlebars, express, mysql and sequelize
![screenshot of server code](./assets/server.png)

This screenshot below is the main page when you load the application.
![screenshot of the main page](./assets/main.png)

This final screenshot shows the login/signup page for the application which allows the user to create an account or login if they have been on it before.
![screenshot of the login page](./assets/login.png)