# GraphQL Essential Training

This is an example of how to build a Graphql server with Node.js.
It was developed along the course [GraphQL Essential Training](https://www.linkedin.com/learning/graphql-essential-training).

## Set the project

### Requirements
- Download and install the latest version of [Node.js](https://nodejs.org/).
- Download and install [MongoDB](https://docs.mongodb.com/guides/server/install/).
- Install node modules with `npm install`.

### Run the project
- Run the server, execute `npm start`.
- Open a browser and go to `http://localhost:8080/graphql`.

## Samples

### Create a friend

```graphql
mutation {
  createFriend(input: {
    firstName: "Jane",
    lastName: "Doe",
    gender: FEMALE,
    age: 26,
    email: "janedoe@examplemail.com",
  }) {
    id
    firstName
    lastName
    age
  }
}
```

A possible output:

```graphql
{
  "data": {
    "createFriend": {
      "id": "6125559ede8d090ee635c01c",
      "firstName": "Jane",
      "lastName": "Doe",
      "age": 26
    }
  }
}
```

### Update a friend

```graphql
mutation {
  updateFriend(input: {
    id: "6125559ede8d090ee635c01c",
    age: 25,
  }) {
    id
    firstName
    lastName
    age
  }
}
```

A possible output:

```graphql
{
  "data": {
    "createFriend": {
      "id": "6125559ede8d090ee635c01c",
      "firstName": "Jane",
      "lastName": "Doe",
      "age": 25
    }
  }
}
```

### Get a friend by id

```graphql
query {
  getOneFriend(id: "6125559ede8d090ee635c01c") {
    id
    firstName
    lastName
    email
    age
  }
}
```

A possible output:

```graphql
{
  "data": {
    "getOneFriend": {
      "id": "6125559ede8d090ee635c01c",
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "janedoe@examplemail.com",
      "age": 25
    }
  }
}
```


### Delete a friend

```graphql
mutation {
  deleteFriend(id: "6125559ede8d090ee635c01c")
}
```

A possible output:

```graphql
{
  "data": {
    "deleteFriend": "Successfully deleted friend"
  }
}
```

### Get all aliens

```graphql
query {
  getAliens {
    firstName
    lastName
    planetName
  }
}
```

A possible output:

```graphql
{
  "data": {
    "getAliens": [
      {
        "firstName": "Gwen",
        "lastName": "Dach",
        "planetName": "culpa"
      },
      {
        "firstName": "Jeramie",
        "lastName": "Kuphal",
        "planetName": "assumenda"
      },
      {
        "firstName": "Georgette",
        "lastName": "Wehner",
        "planetName": "blanditiis"
      },
      {
        "firstName": "Christophe",
        "lastName": "Zieme",
        "planetName": "quidem"
      },
      {
        "firstName": "Shane",
        "lastName": "Prohaska",
        "planetName": "rerum"
      },
      {
        "firstName": "Lonny",
        "lastName": "Reilly",
        "planetName": "quis"
      },
      {
        "firstName": "Dameon",
        "lastName": "Morissette",
        "planetName": "perspiciatis"
      },
      {
        "firstName": "Alva",
        "lastName": "Hamill",
        "planetName": "quo"
      },
      {
        "firstName": "Lucas",
        "lastName": "Aufderhar",
        "planetName": "aspernatur"
      },
      {
        "firstName": "Granville",
        "lastName": "Smith",
        "planetName": "odio"
      }
    ]
  }
}
```