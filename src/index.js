import homeTab from './homeTab.js';
import clickTab from './clickTab.js';

//Load Navigation bar and other base elements
const navDiv = document.createElement('nav');
navDiv.setAttribute('id','nav');
const home = document.createElement('button');
home.textContent = 'Home';
home.setAttribute('id','homeTab');
home.setAttribute('class','tab');
home.classList.add('current');
const menu = document.createElement('button');
menu.textContent = 'Menu';
menu.setAttribute('id','menuTab');
menu.setAttribute('class','tab');
const contact = document.createElement('button');
contact.textContent = 'Contact';
contact.setAttribute('id','contactTab');
contact.setAttribute('class','tab');

const contentDiv = document.createElement('div');
contentDiv.setAttribute('id','content');

const foot = document.createElement('div');
foot.setAttribute('id','foot');
const link = document.createElement('a');
link.href="https://www.freepik.com/free-vector/restaurant-mural-wallpaper_10351122.htm#query=restaurant%20wallpaper&position=3&from_view=search&track=ais"
link.textContent = 'Background Image by Freepik';

const div = document.getElementById('page');
div.appendChild(navDiv);
navDiv.appendChild(home);
navDiv.appendChild(menu);
navDiv.appendChild(contact);
div.appendChild(contentDiv);
div.appendChild(foot);
foot.appendChild(link);
    
//Load homepage
homeTab();

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', clickTab));