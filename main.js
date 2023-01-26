const body = document.querySelector('body');

const boomButton = document.querySelector('.btn-boom');
const bingButton = document.querySelector('.btn-bing');
const oofButton = document.querySelector('.btn-oof');
const discordButton = document.querySelector('.btn-discord');
const fartButton = document.querySelector('.btn-fart');
const aughButton = document.querySelector('.btn-augh');
const nflButton = document.querySelector('.btn-nfl');
const spongebobButton = document.querySelector('.btn-spongebob');
const bkButton = document.querySelector('.btn-bk');

discordButton.addEventListener('click', () => {
  const discordSound = new Audio('./sounds/discord.mp3');
  discordSound.play();
})
bingButton.addEventListener('click', () => {
  const bingSound = new Audio('./sounds/bing.mp3');
  bingSound.play();
})
boomButton.addEventListener('click', () => {
  const boomSound = new Audio('./sounds/vine-boom.mp3');
  boomSound.play();
})
oofButton.addEventListener('click', () => {
  const oofSound = new Audio('./sounds/oof.mp3');
  oofSound.play();
})

aughButton.addEventListener('click', () => {
  const aughSound = new Audio('./sounds/augh.mp3');
  aughSound.play();
})
nflButton.addEventListener('click', () => {
  const nflSound = new Audio('./sounds/nfl.mp3');
  nflSound.play();
})
spongebobButton.addEventListener('click', () => {
  const spongebobSound = new Audio('./sounds/spongebob.mp3');
  spongebobSound.play();
})
fartButton.addEventListener('click', () => {
  const fartSound = new Audio('./sounds/fart.mp3');
  fartSound.play();
})
bkButton.addEventListener('click', () => {
  const bkSound = new Audio('./sounds/whopper.mp3');
  bkSound.play();
})

body.appendChild(boomButton);
body.appendChild(discordButton)
body.appendChild(oofButton)
body.appendChild(bingButton)


body.appendChild(aughButton);
body.appendChild(nflButton)
body.appendChild(spongebobButton)
body.appendChild(fartButton)
body.appendChild(bkButton)



// document.addEventListener('DOMContentLoaded', () => {
  // windowOpen("window-child.html","Ratting","width=550,height=170,left=150,top=200,toolbar=0,status=0,")




  // const body = document.querySelector('body');
  // const widgetContainer = document.createElement('div');


  // const widgetContainerStyles = `
  //   position: absolute;
  //   bottom: 25px;
  //   left: 25px;
  //   margin: 0;
  //   padding: 0;
  //   border: 1px solid black;
  //   height: 50px;
  //   width: 250px;
  //   display: grid;
  //   grid-template-columns: repeat(5, 1fr);
  //   grid-template-rows: 50px;
  // `

  // widgetContainer.style = widgetContainerStyles;
  // body.appendChild(widgetContainer);

  // const widgetStyles = `
  //   border: 1px solid black;
  //   border-radius: 10px;
  //   background-color: tan;
  //   color: white;
  //   cursor: pointer;
  // `;

  // const boomWidget = document.createElement('button');
  // boomWidget.innerText = "BOOM";

  // const dogWidget = document.createElement('button');
  // dogWidget.innerText = 'DOG';

  // const oofWidget = document.createElement('button');
  // oofWidget.innerText = 'OOF';
  
  // const bingWidget = document.createElement('button');
  // bingWidget.innerText = 'bing';
  
  // const discordWidget = document.createElement('button');
  // discordWidget.innerText = 'discord';


  // boomWidget.style = widgetStyles;
  // dogWidget.style = widgetStyles;
  // oofWidget.style = widgetStyles;
  // bingWidget.style = widgetStyles;
  // discordWidget.style = widgetStyles;
  // widgetContainer.appendChild(boomWidget);
  // widgetContainer.appendChild(dogWidget);
  // widgetContainer.appendChild(oofWidget);
  // widgetContainer.appendChild(bingWidget);
  // widgetContainer.appendChild(discordWidget);

  // boomWidget.addEventListener('click', () => {
  //   const boomSound = new Audio('/sounds/vine-boom.mp3');
  //   boomSound.play();
  // })
  
  // bingWidget.addEventListener('click', () => {
  //   const bingSound = new Audio('/sounds/bing.mp3');
  //   bingSound.play();
  // })

  // oofWidget.addEventListener('click', () => {
  //   const oofSound = new Audio('./sounds/oof.mp3');
  //   oofSound.play();
  // })
  // discordWidget.addEventListener('click', () => {
  //   const discordSound = new Audio('/sounds/discord.mp3');
  //   discordSound.play();
  // })
// })
