
/*1번*/
var newImg=document.createElement('img');
newImg.src='"media/starbucks_logo.png"';
newImg.alt='스타벅스';

var container=document.getElementById('.container');
container.append(newImg);


/*2번*/
var boxElements = document.querySelector('.box');
var child=boxElements.children;

Array.from(child).forEach(child => {
    child.setAttribute('style','font-size: 24px');
});

/*3번*/
var answer=document.getElementById('.box .answer');
answer.textContent='네 잘하고 있습니다.';
