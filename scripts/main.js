const createMyElement = (para) => document.createElement(para);

const getMyElement = (para) => document.querySelector(para);

const speakersSection = getMyElement('.my-row');
const closeBtn = getMyElement('.close-cross');
const mobileMenu = getMyElement('.close-mobile');
const togglerBtn = getMyElement('.navbar-toggler');

function closeToggler() {
  mobileMenu.style.display = 'none';
}

togglerBtn.addEventListener('click', () => {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  }
});

closeBtn.addEventListener('click', closeToggler);

const ministers = [
  {
    id: 1,
    name: 'Michael Ajogba',
    title: 'Snr. Pastor of the Mantle Church',
    message: 'We believe the Lord brought you here to bless your life.',
    ministerImage: './assets/images/daddy-image.jpg',
    crownImg: './assets/images/chess-board.png',
  },
  {
    id: 2,
    name: 'Michael Ajogba',
    title: 'Snr. Pastor of the Mantle Church',
    message: 'We believe the Lord brought you here to bless your life.',
    ministerImage: './assets/images/daddy-image.jpg',
    crownImg: './assets/images/chess-board.png',
  },
  {
    id: 3,
    name: 'Michael Ajogba',
    title: 'Snr. Pastor of the Mantle Church',
    message: 'We believe the Lord brought you here to bless your life.',
    ministerImage: './assets/images/daddy-image.jpg',
    crownImg: './assets/images/chess-board.png',
  },
  {
    id: 4,
    name: 'Michael Ajogba',
    title: 'Snr. Pastor of the Mantle Church',
    message: 'We believe the Lord brought you here to bless your life.',
    ministerImage: './assets/images/daddy-image.jpg',
    crownImg: './assets/images/chess-board.png',
  },
  {
    id: 5,
    name: 'Michael Ajogba',
    title: 'Snr. Pastor of the Mantle Church',
    message:
      'We believe the Lord brought you here to bless your life. Lord brought you here to bless your life.',
    ministerImage: './assets/images/daddy-image.jpg',
    crownImg: './assets/images/chess-board.png',
  },
  {
    id: 6,
    name: 'Michael Ajogba',
    title: 'Snr. Pastor of the Mantle Church',
    message: 'We believe the Lord brought you, to bless you',
    ministerImage: './assets/images/daddy-image.jpg',
    crownImg: './assets/images/chess-board.png',
  },
];

function displaySpeaker() {
  ministers.forEach((speaker) => {
    const divContainer = createMyElement('div');
    divContainer.className = 'div-container';

    const imageTag = createMyElement('img');
    imageTag.src = speaker.ministerImage;

    const divInner = createMyElement('div');
    const h1 = createMyElement('p');
    h1.className = 'speaker-name';
    h1.textContent = speaker.name;

    const para = createMyElement('p');
    para.textContent = speaker.title;
    para.className = 'speaker-title';

    const paraTwo = createMyElement('p');
    paraTwo.textContent = speaker.message;

    const crownImg = createMyElement('img');
    crownImg.src = speaker.crownImg;
    crownImg.className = 'crown-image';

    divInner.appendChild(h1);
    divInner.appendChild(para);
    divInner.appendChild(paraTwo);

    divContainer.appendChild(crownImg);
    divContainer.appendChild(imageTag);
    divContainer.appendChild(divInner);

    speakersSection.appendChild(divContainer);
  });
}

displaySpeaker();
