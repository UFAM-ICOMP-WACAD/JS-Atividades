const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'Era meia noite, muito tarde e então :insertx: resolveu dar uma volta, no frio, fazia uns 20 graus nessa hora, mas tinha destino, ele ia encontrar Gabriel no :inserty: , até que percebeu uma perseguição, ocorreu um peso de 200 kg nas costas e começou a correr até chegar no :inserty: e então :insertz:, mas no final das contas era Gabriel fazendo :insertx: se assustar completamente';
const insertX = ['Neil Watts', 'Colin Reeds', 'Eva Rosalene'];
const insertY = ['Laboratório de máquina do tempo', 'Muy Gringo', 'Alamanda'];
const insertZ = ['fechou a porta', 'comemorou', 'ficou maluco'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Gabriel', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('20 graus', temperature);
    newStory = newStory.replaceAll('200 kg', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}