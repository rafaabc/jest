# Framework of Automated Tests with Jest

To consolidate the knowledge that I have been acquiring on the subject, I created this practical example
of an automated unit testing framework built with Jest.

I created a function to validate the user to drive based on age and a valid driver's license. I consider, for instance, that a person can get a driver's license at the age of 18 and beyond.

I used the equivalence partitioning and boundary value analysis to devise the basic test cases:

1. Age of 17
2. Age of 18 and no valid driver's license
3. Age of 18 and a valid driver's license
4. Age of 19 and no valid driver's license
5. Age of 19 and a valid driver's license

The project is already configured to run the test coverage.

# Requirements

Tools:
- [VSCode](https://code.visualstudio.com/Download)
- [Jest](https://jestjs.io/)

# Installation
Run npm i to install the dev dependencies.

# Running via command line
To run the tests via the command line of all test classes in the project:

`npm run test`

# Report
Running the tests make the application generates a test coverage report
