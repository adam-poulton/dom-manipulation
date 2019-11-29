const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.style['color'] = 'red'
paragraph.textContent = 'Hey I\'m red!'

container.appendChild(paragraph)

const heading = document.createElement('h3');
heading.style.color = 'blue';
heading.textContent = 'I\'m a blue h3!';

container.appendChild(heading)

const div = document.createElement('div');
div.style.cssText = 'border: 1px solid black; background-color: pink;';

const divHeading = document.createElement('h1');
divHeading.textContent = 'I\'m in a div';

const divPara = document.createElement('p');
divPara.textContent = 'ME TOO!';

div.appendChild(divHeading);
div.appendChild(divPara);

container.appendChild(div);