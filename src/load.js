export default function load() {

    const tabs = document.querySelectorAll('.tab');

    const navDiv = document.createElement('nav');
    navDiv.setAttribute('id','nav');
    const homeTab = document.createElement('input');
    homeTab.value = 'Home';
    homeTab.setAttribute('type','button');
    homeTab.setAttribute('id','homeTab');
    homeTab.setAttribute('class','tab');
    homeTab.classList.add('current');
    const menuTab = document.createElement('input');
    menuTab.value = 'Menu';
    menuTab.setAttribute('type','button');
    menuTab.setAttribute('id','menuTab');
    menuTab.setAttribute('class','tab');
    const contactTab = document.createElement('input');
    contactTab.value = 'Contact';
    contactTab.setAttribute('type','button');
    contactTab.setAttribute('id','contactTab');
    contactTab.setAttribute('class','tab');

    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id','content');

    const foot = document.createElement('div');
    foot.setAttribute('id','foot');
    const link = document.createElement('a');
    link.href="https://www.freepik.com/free-vector/restaurant-mural-wallpaper_10351122.htm#query=restaurant%20wallpaper&position=3&from_view=search&track=ais"
    link.textContent = 'Image by Freepik';

    const div = document.getElementById('page');

    div.appendChild(navDiv);
    navDiv.appendChild(homeTab);
    navDiv.appendChild(menuTab);
    navDiv.appendChild(contactTab);
    div.appendChild(contentDiv);
    div.appendChild(foot);
    foot.appendChild(link);

 //   tabs.forEach(tab => tab.addEventListener('click', clickTab));
};