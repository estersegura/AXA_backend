# AXA_backend

## Project structure

This project has been made using express.js

The project has the following structure:

```
src 
│
└─── __tests__
│   │   client.route.test.ts
│   │   policy.route.test.ts
│   
└─── config
│    │   connection.ts
│
└─── constants
│    │   error.constant.ts
│    │   url.constant.ts
│
└─── models
│    │   client.model.ts
│    │   policy.model.ts
│    └─── interfaces
│       │   client.model.ts
│       │   policy.model.ts
│
└─── routes
│    │   client.route.ts
│    │   policy.route.ts
│
└─── services
│    │   api.service.ts
│    │   env.services.ts│   
│  
│   .env
│   app.ts
│   index.html
│
ecosystem.config.js
package.json
package-lock.json
README.md
tsconfig.json

```

The usage of the main folders are:

<ul>
  <li><strong>__tests__:</strong> Test files for every service using JEST</li>
  <li><strong>constants:</strong> Contains some of the constants used in the project</li>
  <li><strong>models:</strong> Contains the models to use in the database and the interfaces used to save the two main objects: Clients and Policies</li>
  <li><strong>routes:</strong> Definition of the route files</li>
  <li><strong>services:</strong> Services files that allows the project to obtain the information of the clients and the policies, and load the enviroment variables</li>
</ul>


## Run the project

Execute the project locally running:

```console
$ npm run dev
```

## Run the test

In this project there are two tests. The test has been made using JEST

One is for testing the services into client.route.ts file, and can be executed locally running the next command:

```console
$ npm run test src/__tests__/client.route.test.ts
```

And the other one is for testing the services of policy.route.ts and can be executed running:

```console
$ npm run test src/__tests__/policy.route.test.ts
```

## API

In this API we can find 4 services:


1. Get user data filtered by user id

        GET http://localhost:3000/clients/id/{clientId}

2. Get user data filtered by username

        GET http://localhost:3000/clients/username/{clientName}
        
3. Get the list of policies linked to a username

        GET http://localhost:3000/policies/username/{clientName}
        
1. Get the user linked to a policy number

        GET http://localhost:3000/policies/number/{policyId}

