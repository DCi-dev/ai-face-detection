
# Smart Brain Web App - AI face detection in images

This project is based on the # Zero To Mastery - Smart Brain App, with the addition of TailwindCSS and the newer versions of React Hooks.
Because of this, I tried a different approach for fetching the API data, the one presented in the Clarifai Docs for JavaScript (REST).
Face Detection Web App will use PERN stack.

## Functionality

Users will be able to register, sign in and upload an image (by entering a direct image link), and the app will display rectangles around all detected faces in the picture.

## Tech Stack

Front-end: React
Back-end: Node.js & Express.js
Database: PostgreSQL

## Frameworks

Clarifai API
bcrypt-nodejs
Knex
Pg
TailwindCSS
Serve
Cors
Express
Nodemon

## Installation

Clone this repo
Run `npm install.
Change the URL in src/App.js to your own API backend.
Run `npm run dev`

## Troubleshooting

1. If your image isn't working, make sure the image URL points directly to the image file (you might want to right-click on the image and click on Copy Image Address).
If you are sure about the image, maybe the face detection API reached its 5000 images per month limit.
However, do check your browser console for any potential bad requests or errors, and raise an issue in case you find any.

2. The API throws an error on the first fetch. Clicking the button a second time will prompt the correct response.
