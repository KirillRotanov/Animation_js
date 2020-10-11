// console.log(document.body.innerHTML);
// document.body.innerHTML = '<h1>Hello world</h1>';

const div1 = document.getElementById('div1');
console.log(div1.innerHTML);
div1.style.border = '1px solid black';
const prs = document.querySelectorAll('#div1');
for (let index = 0; index < prs.length; index++) {
    prs[index].innerHTML = `<span>NEW TEXT ${index+1}</span>`;
}
const children = div1.children;
console.log(children.length);
const newP = document.createElement('p');
const newPText = document.createTextNode('this text created by special method');
newP.appendChild(newPText);
// div1.appendChild(newP);
// div1.insertBefore(newP, div1.firstElementChild);
div1.append(newP);
const newP2=document.createElement('p');
const newP2Text=document.createTextNode('p2 text');
newP2.append(newP2Text);
div1.replaceChild(newP2, div1.firstElementChild);
