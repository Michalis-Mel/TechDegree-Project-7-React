# TechDegree-Project-7

React Gallery App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Download the node_modules

Start by downloading all the necessary node_modules by running the (npm install --save) command in your terminal

## Get your API key from Flickr

Create/use a Yahoo or Tumblr account to sign in Flickr.<br/>

Apply for a non-commercial API key.<br/>

You’ll need to set up a config.js file in your project that imports your API key into your
application so that you and other users can request data from the Flickr API. This should be imported into src/App.js.<br/>

The config.js file should look something like this:<br/>
const apiKey = 'YOUR API KEY';<br/>
export default apiKey;<br/>

Import your API key into your application, preferably into src/App.js, and save it to a variable like you would any other module, and use the variable where applicable. That way, your app’s users will only need to enter an API key once.<br />

## CSS Style Update Change

This project has been customized to a personal preference. Please see below to check out all the changes.

Included an icon from the react icon package to the NotFound module.(src/components/MainContent/NotFound.js line 9)<br />
Added a background image.(index.css line 5)<br />
Added an icon at the search button.(SearchForm.js line 40)<br />
Add box-shadow to all the buttons.<br />
Add font weight to the page title.<br />
All the buttons color update including the hoving color.<br />
Update font family to 'Arvo' and 'Lobster' to match the color theme.<br />

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
