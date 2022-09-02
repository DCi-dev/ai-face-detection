
# Smart Brain Web App - AI face detection in images

This project is based on the # Zero To Mastery - Smart Brain App, with the addition of TailwindCSS and the newer versions of React Hooks.
Because of this, I tried a different approach for fetching the API data, the one presented in the Clarifai Docs for JavaScript (REST).
Face Detection Web App will use PERN stack.

## Functionality
Users will be able to register, sign in and upload an image (by entering a direct image link), and the app will display rectangles around all detected faces in the picture.
## 🛠 Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express

**Database:** PostgreSQL

## 👩‍💻 Built with
- [Clarifai API](https://www.clarifai.com/) - AI Face Detection Model
- [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) - used to have a secure and real login form, encrypted passwords for users.
- [Knex Pg](https://knexjs.org/) - query builder for postgreSQL.
- [Particles.js](https://vincentgarreau.com/particles.js/) interactive background
- [Postman APIs Platform](https://www.postman.com/) has been used for tests, I assume it can be used any other tool directly in the browser from your browser web store (e.g. REST Ape - Advanced API Testing Client - Chrome Web Store).

## Front-end - Components

- **Navigation** /nav for signout / signin / register.
- **Logo**
- **ImageLinkForm** for image link input and submit button for detection.
- **Rank** - displays user's entries. Established by number of user's image tests.
- **FaceRecognition:** The object for face recognition will first need to figure out the first dot, second dot, third dot and the fourth dot, around the face and then we're just going to wrap it in a border. We are just using the response Clarifai's API gives us, the coordinates of the face in the picture. \

## Back-end (Setting Up the Server)

``` bash
Routes details:
e.g. localhost:3000/ (root) - "it's working"
    /signin --> POST request, POST from body, user info
		  ->> respond with success/fail
    /register --> POST request, add data to database/server
		  ->> respond with new created user
    /profile/:userid --> GET 
		  ->> respond with user
    /image --> PUT request, update on user profile
		  ->> respond with updated entries count
    /imageurl --> POST request, call Clarifai API
		  ->> respond with boxes coordinates
```

### Controllers
- signin
- register
- profile
- image - with both /image and /imageurl requests
## Run Locally

1. Clone the project

```bash
  git clone https://github.com/DanCristianIlie/ai-face-detection.git
```

2. Go to the project directory

```bash
  cd ai-face-detection
```

3. Install dependencies

```bash
  npm install
```
4. Change the URL in src/App.js to your own API backend.

5. Start the server

```bash
  npm run start
```


## Troubleshooting

If your image isn't working, make sure the image URL points directly to the image file (you might want to right-click on the image and click on Copy Image Address). If you are sure about the image, maybe the face detection API reached its 5000 images per month limit. However, do check your browser console for any potential bad requests or errors, and raise an issue in case you find any.

