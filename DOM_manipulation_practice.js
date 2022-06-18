/* Instructions:

A <p> with red text that says “Hey I’m red!”
An <h3> with blue text that says “I’m a blue h3!”
A <div> with a black border and pink background color with the following elements inside of it:
    Another <h1> that says “I’m in a div”
    A <p> that says “ME TOO!”
    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container. 

*/

// Need to get a reference to the body to append all the newly created elements to the body.
// They don't automatically get added to the DOM through the script reference.
const body = document.querySelector('body');

// Problem 1:
const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Hey I\'m red!';
body.appendChild(para);

//Problem 2:
const heading = document.createElement('h3');
heading.style.color = 'blue';
heading.textContent = 'I\'m a blue h3!';
body.appendChild(heading);

//Problem 3:
const block = document.createElement('div');
block.style.cssText = 'border: 3px solid black; background: pink';
body.appendChild(block);
const heading_in_block = document.createElement('h1');
heading_in_block.textContent = 'I\'m in a div';
const para_in_block = document.createElement('p');
para_in_block.textContent = 'ME TOO!';
block.appendChild(heading_in_block);
block.appendChild(para_in_block);
