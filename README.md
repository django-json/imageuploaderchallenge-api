# imageuploaderchallenge-api
The backend server for 'imageuploaderchallenge' project.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/django-json/imageuploaderchallenge-api

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## How To Upload Images/Files To Cloudinary
1. Register to [Cloudinary](https://cloudinary.com/).
2. Go to Dashboard.
3. In Account Details, copy the following variables: cloud name, api key, api secret.
4. In the project root directory (imageuploaderchallenge-api/), create a new file .env
5. In .env file, copy the following and save:
  ```
  PORT=3001
  CLOUD_NAME=[Put your CLOUD NAME here]
  CLOUD_API_KEY=[Put your API KEY here]
  CLOUD_SECRET_KEY=[Put your SECRET KEY here] 
  ```
6. Make sure you do not include the brackets. Then you're done!

## Available Routes

```
GET     "/"           - to test the API if it is working.
POST    "/uploads"    - to upload a single image at a time.
```
