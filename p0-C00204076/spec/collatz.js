var path = require('path');
var expect = require('chai').expect;

var collatz = require(path.join(__dirname, '..', './collatz.js'));

describe('collatz()', function ()
{
  'use strict';

  it('exists', function ()
  {
    expect(collatz()).to.be.a('function');

  });

  it('does something', function ()
  {
    expect(true).to.equal(false);
  });

  it('does something else', function ()
  {
    expect(true).to.equal(false);
  });

  // Add more assertions here
  it('number % === 0', function()
  {
    expect(true).to.equal(false);
  });

  it('Math.abs(number % 2) === 0', function()
  {
    expect(true).to.equal(false);
  });

});
