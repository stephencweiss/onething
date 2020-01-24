# Seeding The DB

The seed function is intended to get a basic database up and running so that we can start testing actual functionality.

In order for it to work, it's important that the current database is empty.

To ensure that that's the case, the steps to take to run the seed successfully are:
1. Start the Postgres Server (e.g., `brew services start PostgreSQL`)<sup>1</sup>
1. Log into the database<sup>1</sup>
1. Drop the tables (due to linking, order is important - or use cascade):
    1. Drop Schedules
    1. Drop Templates
    1. Drop Users
1. Run the seed function from the command line: `node ./server/db/resources/seed.js`

<sup>1</sup> Depending on whether your environment, the way to start postgres can vary. [Here are two ways with a UNIX based operating system](https://www.stephencharlesweiss.com/blog/2019-11-30/psql-homebrew-docker-conflict/).
<sup>2</sup> One of the pre-requisites implied here is that the database already exists. If it doesn't, start there. Instructions to log into a db can be found [here](https://www.stephencharlesweiss.com/blog/2018-08-19/psql-access-db-via-shell/)

In the future, I may investigate automating the clean up, but for now this works sufficiently well.