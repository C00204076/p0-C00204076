/*! Node v0.0.0 - MIT license */
'use strict';

var Node = function ()
{
  // your code goes here
  var number;

  if(number % 2 === 0)
  {
      return number / 2;
  }

  if(Math.abs(number % 2) === 0)
  {
    return (3 * number) + 1;
  }
}
