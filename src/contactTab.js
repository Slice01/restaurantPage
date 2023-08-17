export default function contactTab() {
    
    //Clear content
    const content = document.getElementById('content');
    content.innerHTML = '';

    //Load Header
    const div1 = document.createElement('div');
    const innerDiv1 = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'Contact Us';
    content.appendChild(div1);
    div1.appendChild(innerDiv1);
    innerDiv1.appendChild(header);

    //Load contact 1
    const div2 = document.createElement('div');
    div2.classList.add('container-outer');
    const innerDiv2 = document.createElement('div');
    innerDiv2.classList.add('container-inner','grid-container');
    const eeHead1 = document.createElement('h2');
    eeHead1.classList.add('grid-header');
    eeHead1.textContent = 'Steve Rodgers';
    const statPos1 = document.createElement('h4');
    statPos1.classList.add('item-name');
    statPos1.textContent = 'Position';
    const pos1 = document.createElement('h4');
    pos1.classList.add('item-listing');
    pos1.textContent = 'Owner';
    const statNum1 = document.createElement('h4');
    statNum1.classList.add('item-name');
    statNum1.textContent = 'Phone Number';
    const num1 = document.createElement('h4');
    num1.classList.add('item-listing');
    num1.textContent = '555-123-4567';
    const statMail1 = document.createElement('h4');
    statMail1.classList.add('item-name');
    statMail1.textContent = 'Email';
    const mail1 = document.createElement('h4');
    mail1.classList.add('item-listing');
    mail1.textContent = 'steve.rodgers@restaurant.com';
    content.appendChild(div2);
    div2.appendChild(innerDiv2);
    innerDiv2.appendChild(eeHead1);
    innerDiv2.appendChild(statPos1);
    innerDiv2.appendChild(pos1);
    innerDiv2.appendChild(statNum1);
    innerDiv2.appendChild(num1);
    innerDiv2.appendChild(statMail1);
    innerDiv2.appendChild(mail1);

    //Load contact 2
    const div3 = document.createElement('div');
    div3.classList.add('container-outer');
    const innerDiv3 = document.createElement('div');
    innerDiv3.classList.add('container-inner','grid-container');
    const eeHead2 = document.createElement('h2');
    eeHead2.classList.add('grid-header');
    eeHead2.textContent = 'Tony Stark';
    const statPos2 = document.createElement('h4');
    statPos2.classList.add('item-name');
    statPos2.textContent = 'Position';
    const pos2 = document.createElement('h4');
    pos2.classList.add('item-listing');
    pos2.textContent = 'Head Chef';
    const statNum2 = document.createElement('h4');
    statNum2.classList.add('item-name');
    statNum2.textContent = 'Phone Number';
    const num2 = document.createElement('h4');
    num2.classList.add('item-listing');
    num2.textContent = '555-999-9999';
    const statMail2 = document.createElement('h4');
    statMail2.classList.add('item-name');
    statMail2.textContent = 'Email';
    const mail2 = document.createElement('h4');
    mail2.classList.add('item-listing');
    mail2.textContent = 'tony.stark@restaurant.com';
    content.appendChild(div3);
    div3.appendChild(innerDiv3);
    innerDiv3.appendChild(eeHead2);
    innerDiv3.appendChild(statPos2);
    innerDiv3.appendChild(pos2);
    innerDiv3.appendChild(statNum2);
    innerDiv3.appendChild(num2);
    innerDiv3.appendChild(statMail2);
    innerDiv3.appendChild(mail2);
    
    //Load contact 3
    const div4 = document.createElement('div');
    div4.classList.add('container-outer');
    const innerDiv4 = document.createElement('div');
    innerDiv4.classList.add('container-inner','grid-container');
    const eeHead3 = document.createElement('h2');
    eeHead3.classList.add('grid-header');
    eeHead3.textContent = 'Bruce Banner';
    const statPos3 = document.createElement('h4');
    statPos3.classList.add('item-name');
    statPos3.textContent = 'Position';
    const pos3 = document.createElement('h4');
    pos3.classList.add('item-listing');
    pos3.textContent = 'Front Of House Manager';
    const statNum3 = document.createElement('h4');
    statNum3.classList.add('item-name');
    statNum3.textContent = 'Phone Number';
    const num3 = document.createElement('h4');
    num3.classList.add('item-listing');
    num3.textContent = '555-424-4242';
    const statMail3 = document.createElement('h4');
    statMail3.classList.add('item-name');
    statMail3.textContent = 'Email';
    const mail3 = document.createElement('h4');
    mail3.classList.add('item-listing');
    mail3.textContent = 'bruce.banner@grestaurant.com';
    content.appendChild(div4);
    div4.appendChild(innerDiv4);
    innerDiv4.appendChild(eeHead3);
    innerDiv4.appendChild(statPos3);
    innerDiv4.appendChild(pos3);
    innerDiv4.appendChild(statNum3);
    innerDiv4.appendChild(num3);
    innerDiv4.appendChild(statMail3);
    innerDiv4.appendChild(mail3);
    
};