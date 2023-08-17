export default function homeTab() {
    
    //Clear content
    const content = document.getElementById('content');
    content.innerHTML = '';

    //Load header
    const div1 = document.createElement('div');
    const innerDiv1 = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'The Greatest Restaurant';
    content.appendChild(div1);
    div1.appendChild(innerDiv1);
    innerDiv1.appendChild(header);

    //Load review
    const div2 = document.createElement('div');
    div2.classList.add('container-outer');
    const innerDiv2 = document.createElement('div');
    innerDiv2.classList.add('container-inner');
    const reviewHeader = document.createElement('h2');
    reviewHeader.classList.add('centered');
    reviewHeader.textContent = 'Review';
    const para1 = document.createElement('p');
    para1.textContent = '"This restaurant is the best ever. It serves all kinds of food from all over the world. It is absolutely delicious. I would recommend it over and over again!"';
    const para2 = document.createElement('p');
    para2.setAttribute('id','customer');
    para2.textContent = '- Johnny Hamburgers Periodical';
    content.appendChild(div2);
    div2.appendChild(innerDiv2);
    innerDiv2.appendChild(reviewHeader);
    innerDiv2.appendChild(para1);
    innerDiv2.appendChild(para2);

    //Load hours
    const div3 = document.createElement('div');
    div3.classList.add('container-outer');
    const innerDiv3 = document.createElement('div');
    innerDiv3.classList.add('container-inner','grid-container');
    const hoursHeader = document.createElement('h2');
    hoursHeader.classList.add('grid-header');
    hoursHeader.textContent = 'Hours';
    const day1 = document.createElement('h4');
    day1.classList.add('item-name');
    day1.textContent = 'Sunday:';
    const hours1 = document.createElement('h4');
    hours1.classList.add('item-listing');
    hours1.textContent = '9am - 8pm';
    const day2 = document.createElement('h4');
    day2.classList.add('item-name');
    day2.textContent = 'Monday:';
    const hours2 = document.createElement('h4');
    hours2.classList.add('item-listing');
    hours2.textContent = '11am - 9pm';
    const day3 = document.createElement('h4');
    day3.classList.add('item-name');
    day3.textContent = 'Tuesday:';
    const hours3 = document.createElement('h4');
    hours3.classList.add('item-listing');
    hours3.textContent = '11am - 9pm';
    const day4 = document.createElement('h4');
    day4.classList.add('item-name');
    day4.textContent = 'Wednesday:';
    const hours4 = document.createElement('h4');
    hours4.classList.add('item-listing');
    hours4.textContent = '11am - 9pm';
    const day5 = document.createElement('h4');
    day5.classList.add('item-name');
    day5.textContent = 'Thursday:';
    const hours5 = document.createElement('h4');
    hours5.classList.add('item-listing');
    hours5.textContent = '11am - 9pm';
    const day6 = document.createElement('h4');
    day6.classList.add('item-name');
    day6.textContent = 'Friday:';
    const hours6 = document.createElement('h4');
    hours6.classList.add('item-listing');
    hours6.textContent = '11am - 9pm';
    const day7 = document.createElement('h4');
    day7.classList.add('item-name');
    day7.textContent = 'Saturday:';
    const hours7 = document.createElement('h4');
    hours7.classList.add('item-listing');
    hours7.textContent = '8am - 11pm';
    content.appendChild(div3);
    div3.appendChild(innerDiv3);
    innerDiv3.appendChild(hoursHeader);
    innerDiv3.appendChild(day1);
    innerDiv3.appendChild(hours1);
    innerDiv3.appendChild(day2);
    innerDiv3.appendChild(hours2);
    innerDiv3.appendChild(day3);
    innerDiv3.appendChild(hours3);
    innerDiv3.appendChild(day4);
    innerDiv3.appendChild(hours4);
    innerDiv3.appendChild(day5);
    innerDiv3.appendChild(hours5);
    innerDiv3.appendChild(day6);
    innerDiv3.appendChild(hours6);
    innerDiv3.appendChild(day7);
    innerDiv3.appendChild(hours7);

    //Load location information
    const div4 = document.createElement('div');
    div4.classList.add('container-outer');
    const innerDiv4 = document.createElement('div');
    innerDiv4.classList.add('container-inner');
    const locationHead = document.createElement('h2');
    locationHead.classList.add('centered');
    locationHead.textContent = 'Location';
    const locationPara = document.createElement('p');
    locationPara.classList.add('centered');
    locationPara.textContent = '12345 Main Street, Mainland, WI';
    content.appendChild(div4);
    div4.appendChild(innerDiv4);
    innerDiv4.appendChild(locationHead);
    innerDiv4.appendChild(locationPara);
};