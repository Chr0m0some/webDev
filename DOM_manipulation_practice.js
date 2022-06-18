/* a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container. */

// Problem 1:
const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Hey I\'m red!';

//Problem 2:
const heading = document.createElement('h3');
heading.style.color = 'blue';
heading.textContent = 'I\'m a blue h3!';

//Problem 3:
const block = document.createElement('div');
block.style.cssText = 'border: black; background: pink';
const heading_in_block = document.createElement('h1');
heading_in_block.textContent = 'I\'m in a div';
const para_in_block = document.createElement('p');
para_in_block.textContent = 'ME TOO!';
block.appendChild(heading_in_block);
block.appendChild(para_in_block);