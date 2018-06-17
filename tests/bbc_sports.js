import { Selector } from 'testcafe';

fixture `navigates to bbc.com/sport`
  .page `http://www.bbc.com/sport`
  .beforeEach( async t => {
    await t
    .maximizeWindow();
  });

var stringSimilarity = require('string-similarity');

test('article links navigate to their correponding article', async t => {

  //Selecting all articles as they share 'lakeside__content' class
  const articles = Selector('div')
    .withAttribute('class', /lakeside__content/)
    .find('a');

  // Get a random Article for testing
  let articlesCount = await articles.count;
  const randomArticle = articles.nth(
    Math.ceil(Math.random() * articlesCount)
  );
  let randomArticleLinkText = await randomArticle.innerText;

  //navigate to the article
  await t
    .click(randomArticle)

  let randomArticleHeadingText = await Selector('h1').innerText;

  // There has to be a better way than using stringSimilarity :)
  // https://www.npmjs.com/package/string-similarity
  var similarity = stringSimilarity.compareTwoStrings(
    randomArticleLinkText,
    randomArticleHeadingText);

  // Test
  await t
    //40% match is much lower but for this solution, seems to work ok
    .expect(similarity).gt(0.4);

});
