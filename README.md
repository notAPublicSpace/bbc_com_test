# TestCafe - UI Test Automation

## Usage
1. Fork/Clone
1. Install dependencies - `npm install`
1. Test - `npm test`
1. To run tests on all available browsers, change `chrome` to `all` in test script 

## Testing frameworks evaluated before deciding on TestCafe
I was evaluating frameworks against the following features:
  - Test structure/assertions/runner
  - UI automation support
  - Cross browser support
  - Coding ease
  - Documentation and size of community using the framework

The different frameworks that I looked into are Jest, Mocha, Ava, and Cucumber; for web, I did a little research on Protractor, Cypress, Selenium (already know a little about it). Didn't specifically look into which frameworks are better for stubs/mocks but frameworks like Sinon can be used in conjunction to any other framework.

As this is a straight-forward scenario, it is hard to get wrong with the choice of framework. Considering the scope of testing (which I assumed is Black-box testing here) and knowing what framework is already used at the company, I decided to give TestCafe a try. Another reason for going with it is the all-in-one support that it provides- has it's own test structure, support for UI automation, and supports many browsers (given the way it works).

## Basis of the test (assumptions):
 - The test cases are figured to be a part of a smoke test run, hence organized the structure and number of tests around them. Structure can be further expanded, once the whole test plan is known.
 - No knowledge of backend frameworks.
 - Any change in HTML/CSS would be communicated to ensure that the tests don't result with false positives in production.
 - Keeping the test limited to a single browser but if the need arises, testcafe is capable of running tests in multiple browsers or even Saucelabs. 
 - Performance of bbc.com is out of the scope for this testing.


## Challenges and Blockers
- No previous experience using TestCafe so had to rely on documentation heavily.
- Spent good amount of time troubleshooting TestCafe's test-runner object not being able to find visible link. Solution was to maximize the window. Not sure if there's a better approach, or how this will work when tested against mobile browsers.
- Also noticed that mavigations links took time to show up on bbc.com but TestCafe (and some other frameworks) already have built-in wait for elements to become visible. Initally, I thought this delay was the reason of above-mentioned challenge.
- Another challenging area was to match the article links to the article page they linked to. Substring matches or any fuzzy matches failed here. Resorted to using https://www.npmjs.com/package/string-similarity for string matches.
- There have been some intermittent issues with running tests on Firefox/safari. Didn't get a chance to dig into it further. 
