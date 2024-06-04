npm install @reduxjs/toolkit
npm i react-redux


#redux toolkit
-install @reduxjs/toolkit and react-redux
-build our store
-connect out store to our app
-Slice (cartSlice)
-dispatch(action)
-Selector


Types of Testing (developer) : 
-Unit Testing : test react component in isolation
-Integration Testing : So many component collaborated to make feature like (searchbox) , flow of action, mulitple component involved and talking to each other
-End to end Testing (e2e test)  : check flow as soon as user land on the website to the user exit on our website


React testing library uses JEST
commands : 
- npm i -D @testing-library/react
- npm i -D jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env     (babel dependencies)
- configure babel.config.js
- configure parcel config file to disable default babel transpilation (so that we can use babel.config.js not default babel config provided by parcel)
- jest configuration (npx jest --init)
- install jsdom library
- install @babel/preset-react to make jsx work in test cases 
- include @babel/preset-react inside my babel config
- install @testing-library/jest-dom  (npm i -D @testing-library/jest-dom)

test command : npm run test