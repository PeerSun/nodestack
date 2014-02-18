# SETUP: Up and Running in 5 Minutes

## Getting Started


### Install Node.js

1. Visit: http://nodejs.org/
2. Download the installer for your system 
3. Install 

Note: this should be *seamless*, but if you have any trouble message me: 
https://twitter.com/nelsonic


### Install Git

If you do not already have git on your machine (Windows users mostly)

- Windows: http://windows.github.com/
- Mac: (you should already have Git installed, if not) http://mac.github.com

### Install MongoDB

http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/

```sh
brew update
brew install mongodb
```


### Download (Clone) this Repository

`git clone git@github.com:PeerSun/p360.git`

(or if you have the GUI sign in with your github user & click the clone button)


### Navigate to the Repository Directory

`cd p360`


### Install Dependencies (node_modules)

`npm install`

This should install all of our dependencies.
To check that everything worked, simply launch the app!


### Launch App (Locally)

`nodemon app`


Point your browser to: http://localhost:3000/


### New Relic

>> https://docs.newrelic.com/docs/nodejs/nodejs-agent-on-heroku


## Background / Decisions

For the ***mobile-first*** iteration of "Progress 360" we decided to 
***try something different***.


### Server: Node.js

Simple. Non-blocking IO.

- Why Node: http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js
- When to use node: http://stackoverflow.com/questions/5062614/how-to-decide-when-to-use-nodejs


### MVC Framework: ExpressJS

Tried and tested. 
Good body of *answered* questions: 
http://stackoverflow.com/questions/tagged/express


http://expressjs.com/


### Datastore: MongoDB

On Heroku We are using MongoHQ Sandbox (512mb) for Staging  
and Small (2GB Storage) @ $15/Month

Setup: https://devcenter.heroku.com/articles/mongohq

