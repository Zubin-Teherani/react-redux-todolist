const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should have correct title', () => {
    browser.url('http://localhost:3000')
    const actualTitle = browser.getTitle();

    expect(actualTitle).equal('Todo List');
  });
});
