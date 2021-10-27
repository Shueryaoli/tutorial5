# tutorial5
tutorial5 code  

The results in the submitted report are obtained from running locally which can host the waitlist database in the MongoDB server and I have initialized the database and test all CRUD operations.  

In docker, you need to install mongoDB first to execute the command.  

1) apt install gnupg  
2) apt install curl

3) curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -

4) echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list 
5) apt update
6) apt install mongodb-org
7) apt install screen
8) screen mongod [Press Ctrl+a followed by d to return to terminal]
9) mongo [This will open a mongoDB CLI]

But there are some problems running in docker after separating UI and api, so I run the code locally to implement the operations required in the tutorial. If there is a problem in docker, please download the code(.zip file) from my github link and follow the README.md under "api" folder and "ui" folder, and run it locally to get the correct results.
