# TestCafe - UI Test Automation

## Usage
1. Fork/Clone
1. Install dependencies - `npm install`
1. Test - `npm test`

## Testing frameworks evaluated before deciding on TestCafe
I was evaluating frameworks against following features:
  - Test structure/assertions/runner
  - UI automation support
  - Cross browser support
  - Coding ease
  - Documentation and size of community using the framework

The different framework I looked into are Jest, Mocha, Ava, and Cucumber; for web, I did a little research on Protractor, Cypress, Selenium (already know some about it). Didn't specifically look into which frameworks are better for stubs/mocks but frameworks like Sinon can be used in conjunction to any other framework, I think.

It is hard to get wrong with the choice of frameworks in this scenario. Considering the scope of testing (which I assumed is Black box testing here), and knowing what framework is already used, I decided to give TestCafe a try. Another reason for going with it is the all-in-one support that it provides- has it's own test structure, support for UI automation, and supports many browsers (given the way it works).

## Assumptions:
 - Mentioned test cases are part of a smoke test run, hence organizing the structure and number of tests just around them. Structure can be further expanded once the whole test plan is known.
 - No knowledge of backend frameworks.
 - Any change in HTML/CSS would be communicated to ensure the tests don't result with false positives.
 - Keeping the test limited to a single browser but if the need arises, testcafe is capable of running tests in multiple browsers or even Saucelabs.


## Challenges and Blockers
- No previous experience with using TestCafe so had to reply on documentation heavily.
- Spent good amount of time troubleshooting TestCafe's test-runner object not being able to find visible link. Solution was to maximize the window. Not sure if there's a better approach, or how this will work when tested against mobile browsers.
- Another challenging area was to match the article links to the article page they linked to. Substring matches or any fuzzy matches failed here. Resorted to using https://www.npmjs.com/package/string-similarity for string matches.
