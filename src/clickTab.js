import homeTab from './homeTab.js';
import menuTab from './menuTab.js';
import contactTab from './contactTab.js';

export default function clickTab() {

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('current'));

    //Load tab based on what tab was pressed
    switch(this.id) {
        case 'homeTab':
            const homeT = document.getElementById('homeTab');
            homeT.classList.add('current');
            homeTab();
            break;
        case 'menuTab':
            const menuT = document.getElementById('menuTab');
            menuT.classList.add('current');
            menuTab();
            break;
        case 'contactTab':
            const contactT = document.getElementById('contactTab');
            contactT.classList.add('current');
            contactTab();
            break;
    };
};