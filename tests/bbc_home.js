import { Selector, ClientFunction } from 'testcafe';

fixture `navigates to bbc.com`
  .page `http://www.bbc.com/`
  .beforeEach( async t => {
    await t
    .maximizeWindow();
  });

const navLinks = Selector('.orb-nav-links').find('a');

test('Home, News, Weather, Sport links exist on homepage', async t => {
  await t
    .expect(navLinks.withText('Home').visible).ok()
    .expect(navLinks.withText('News').visible).ok()
    .expect(navLinks.withText('Weather').visible).ok()
    .expect(navLinks.withText('Sport').visible).ok();
});

test('navigates to Sport section shown in the header', async t => {
  await t
    .click(navLinks.withText('Sport'))
    .expect(Selector('title').innerText).contains('Sport');

  const getLocation = ClientFunction(() => document.location.href);
  await t
    .expect(getLocation()).contains('/sport');
});
