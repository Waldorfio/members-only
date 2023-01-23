# Members Only

A secret message forum that allows users to create, read, update and delete posts in a secret forum environment.  
Users will have to be authenticated to perform any CRUD actions on the forum.

*HINT: the secret code is "odin"*
## [Live Link 👈]()

### Features
- Users can register and log in to the application
- Users with administrator privileges can create, read, update and delete posts within the forum
- Users with member access can read messages in the forum after a successful authentication

#### Goals
- Create a secure environment for users to share and discuss sensitive information
- Implement user authentication and authorization to ensure only authorized users have access to the forum
- Create CRUD functionality for certain users to manage posts
- Practice routing with Async/Await

#### Challenges Faced
- Initialising passportjs and bcryptjs authentication middleware correctly
- Managing an MVC file structure in Express
- Implementing user authentication and authorization while ensuring a seamless user experience was a challenge.

## Local Installation
1.	Clone the repository `git clone https://github.com/Waldorfio/members-only.git`
2.	Install the dependencies `npm install`
3.	Start the web server using `npm run dev`
4.	Open the application in your browser at `http://localhost:3000`

## Technologies Used
- Express.js for the back-end server
- Node.js for the back-end environment
- MongoDB for the database
- EJS templating for the front-end
