/* global describe, it, browser */
const expect = require('chai').expect;

describe('TodoList App', () => {
  beforeEach(() => {
    browser.url('http://localhost:3000');
  });

  it('Should have correct title', () => {
    const actualTitle = browser.getTitle();

    expect(actualTitle).equal('Todo List');
  });

  it('Should allow me to create a todo', () => {
    const todoText = 'Example to do';
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.eq(todoText);
  });
});

