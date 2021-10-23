# Would You Rather Project

## Getting Started

### Installing Dependencies
to install all required dependencies simply run:
```bash
npm install
```
or
```bash
yarn install
```
##### Key Dependencies
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme) to handle user password encryption and and password compare.
- [Faker](https://github.com/Marak/faker.js/blob/master/Readme.md) to add random fake avatar to users.
- [React](https://reactjs.org/) to create our app
- [React-dom](https://reactjs.org/docs/react-dom.html) The react-dom package provides DOM-specific methods that can be used at the top level of our app
- [React-redux](https://react-redux.js.org/) to connect and provide our components with required props
- [react-router-dom](https://reactrouter.com/) to handle routes and links and more
- [React-scripts](https://github.com/facebook/create-react-app#readme)This package includes scripts and configuration used by Create React App
- [React-redux-loading](https://github.com/tylermcginnis/react-redux-loading-bar)handle show/hide loading bar
- [Redux](https://redux.js.org/) to create and handle our store
- [Redux-thunk](https://github.com/reduxjs/redux-thunk/blob/master/README.md) to handle redux middleware
- [Semantic-ui-css](https://react.semantic-ui.com/) handle our app styles and themes
- [Semantic-ui-react](https://react.semantic-ui.com/) handle js part for semantic ui css and provides styled react components
## Running the App

From within the `./would-you-rather` directory open a new terminal and run:
```bash
npm start
```
or
```bash
yarn start
```

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
