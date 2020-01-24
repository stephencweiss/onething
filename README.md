# OneThing

## Usage

### Installation
This project has front- and back-end components. The installation of packages are managed separately.

Before starting the application:
```sh
$ npm i
$ cd client && npm i
```

Be sure you've also created the database and [seeded it](./server/db/resources/seed.readme.md)

### Running

To run the front- and back-ends in parallel:
```sh
$ npm run dev:server
```
Then open a new terminal:
```sh
$ npm run dev:web
```

In the future, I may tie these together into a single command or orchestrate with something like Lerna.
