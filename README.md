# AirMarket

#### By _**Katlin Anderson and Liz Kelley**_

## Description
This website sells bottled air to the post apocalyptic wealthy
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Setup/Installation Requirements

* _$ git clone https://github.com/KNBAnderson/Petflix;_
* _Create an account at https://firebase.google.com/_
* _On Firebase, create a project called bottled-air-marketplace_
* _Create a realtime database within the project_
* _Change the rules of the database to_
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
* _Create file in src/app/api-keys.ts_
* _Add this code to the new file. Your personal keys can be found in your projects settings_
```
  export const masterFirebaseConfig = {
    apiKey: XXXX,
    authDomain: "bottled-air-marketplace.firebaseapp.com",
    databaseURL: "https://bottled-air-marketplace.firebaseio.com",
    projectId: "bottled-air-marketplace",
    storageBucket: "",
    messagingSenderId: XXXX,
    appId: XXXX
};
```
* _$ npm install;_
* _$ ng serve --open;_

## Installation Requirements
* Run in browser

## Known Bugs
There are no known bugs.

## Technologies Used

_HTML_
_CSS_
_TypeScript_
_Angular_
_Node_
_Bootstrap_
_Jasmine_
_Linter_
_Protractor_
_Firebase_

### License

*This software is licensed under the GPL license.*

Copyright (c) 2019 **_Katlin Anderson_**