export default function homeTab() {
    const content = document.getElementById('content');

    const header = document.createElement('h1');
    header.textContent = 'The Greatest Restaurant';

    const para = document.createElement('p');
    para.textContent = 'This restaurant is the best ever.  It serves all kinds of crap from all over the world.  Delicious.  Would recommend.'

    content.appendChild(header);
    content.appendChild(para);

};