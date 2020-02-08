# node-express-ts-template
MEMO for creating new node project from scratch
- create a new folder for project
npm init                              //creates package.json
npm install typescript --save-dev	
npm install @types/node --save-dev
npx tsc --init                        //creates tsconfig.json
                                      //at the time of writing had all needed configs uncommented exept
                                      //"resolveJsonModule": true   (needed for nodemon)
npm install --save-dev ts-node
npm install --save-dev nodemon
-create file nodemon.json
{
    "watch": ["./"],		
    "ext": ".ts,.js",
    "ignore": [],
    "exec": "ts-node ./index.ts"	
  }
 npm install --save-dev cross-env   //for windows eg.
                                    //"start": "npm run build && cross-env NODE_ENV=production node build/index.js",
                                    //"build": "rimraf ./build && tsc",		(rimraf requires installation ofc)
                                    //"watch": "cross-env NODE_ENV=development nodemon"
  
 install all other needed dependencies
 
