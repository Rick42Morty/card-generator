const button = document.getElementById('submitBtn');
const textArea = document.getElementById('sourceText');
const container = document.getElementById('cardContainer');

const jobs = [
  'CEO',
  'Manager',
  'Tech Director',
  'Purchasing Manager',
  'Assistant',
  'Development manager',
  'Foreign markets manager'
];

const fonts = [
  'Arial, Helvetica, sans-serif',
  'Verdana, Geneva, sans-serif',
  'Arial Black, Gadget, sans-serif',
  'Impact, Charcoal, sans-serif',
  'Georgia, serif',
  'Console, Monaco, monospace',
  'Lucida Sans Unicode, Lucida Grande, sans-serif',
  'Times New Roman, Times New Roman, Times, serif',
  'Verdana, Geneva, sans-serif',
  'Trebuchet MS, Trebuchet MS, sans-serif'
];

const randFont = () => fonts[Math.floor(Math.random() * fonts.length)];

document.body.addEventListener('keypress', e => {
  if (e.key === 'Enter') button.click();
});

const randNum = (base, top) => base + Math.floor(Math.random() * (top - base));

const randPhonePrefix = () => {
  const rand = randNum(0, 6);
  switch (rand) {
    case 0:
      return 'Tel:';
    case 1:
      return 'Mob:';
    case 2:
      return 'Phone:';
    case 3:
      return '';
    case 4:
      return 'Tel';
    case 5:
      return 'Mobile';
    default:
      return '';
  }
};
const randomLightColor = () => {
  if (Math.random() < 0.2) return 'white';
  return `rgb(
    ${randNum(150, 255)}, 
    ${randNum(150, 255)}, 
    ${randNum(150, 255)})`;
};

const randomDarkColor = () => {
  if (Math.random() < 0.3) return 'black';
  return `rgb(
    ${randNum(0, 120)}, 
    ${randNum(0, 120)}, 
    ${randNum(0, 120)})`;
};

const createCard = man => {
  if (man.trim() === '') return;
  const card = document.createElement('div');
  card.contentEditable = 'true';
  card.classList.add('card-style');
  card.classList.add('card1');

  if (Math.random() < 0.33) {
    card.style.textAlign = 'right';
  } else if (Math.random() < 0.5) {
    card.style.textAlign = 'left';
  } else {
    card.style.textAlign = 'center';
  }

  card.style.fontFamily = randFont();

  const data = man.split('\t');

  // Add company name
  const company = document.createElement('h1');
  if (Math.random() < 0.5) company.style.fontFamily = 'Arial';
  company.style.color = randomDarkColor();
  company.style.fontSize = `${randNum(7, 9)}mm`;
  company.style.lineHeight = company.style.fontSize;
  const compName = `${data[8] ? data[8] : 'random inc'}`;
  if (Math.random() < 0.5) {
    company.innerText = compName.toUpperCase();
  } else {
    company.innerText = compName;
  }

  if (Math.random() < 0.25) {
    const color = randomLightColor();
    company.style.backgroundColor = color;
  }

  if (Math.random() < 0.33) {
    company.style.textAlign = 'right';
  } else if (Math.random() < 0.5) {
    company.style.textAlign = 'left';
  } else {
    company.style.textAlign = 'center';
  }

  card.appendChild(company);

  //Add main info div

  const mainInfo = document.createElement('div');
  if (Math.random() < 0.25) {
    const color = randomLightColor();
    mainInfo.style.backgroundColor = color;
  }

  const name = document.createElement('h2');
  name.style.fontSize = `${randNum(6, 7)}mm`;
  name.style.lineHeight = name.style.fontSize;
  name.innerText = `${data[0]} ${data[1]}`.toLowerCase();
  mainInfo.appendChild(name);

  const job = document.createElement('h4');
  job.innerText = `${jobs[Math.floor(Math.random() * jobs.length)]}`;
  job.style.fontSize = `${randNum(4, 5)}mm`;
  job.style.lineHeight = job.style.fontSize;
  mainInfo.appendChild(job);

  const phone = document.createElement('h3');
  phone.innerText = `${randPhonePrefix()} ${data[7]}`;
  phone.style.fontSize = `${randNum(4, 5)}mm`;
  phone.style.lineHeight = phone.style.fontSize;
  mainInfo.appendChild(phone);

  card.appendChild(mainInfo);

  //Add contacts

  const contacts = document.createElement('p');
  const contactOption = randNum(0, 8);
  switch (contactOption) {
    case 0:
      contacts.innerText = `${data[7]}
    ${data[4].toLowerCase()}
    ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
      break;
    case 1:
      contacts.innerText = `${data[7]}
    ${data[4].toLowerCase()}
    ${data[9] ? data[9] : 'www.randomsite.com'}
    ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
      break;
    case 2:
      contacts.innerText = `E-mail: ${data[4].toLowerCase()}
    Web: ${data[9] ? data[9] : 'www.randomsite.com'}
    Address: ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
      break;
    case 3:
      contacts.innerText = `mobile: ${data[7]}
    E-mail: ${data[4].toLowerCase()}
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}`;
      break;
    case 4:
      contacts.innerText = `WhatsApp: ${data[7]}
    E-mail: ${data[4].toLowerCase()}
    ${data[9] ? data[9] : 'www.randomsite.com'}
    ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
      break;
    case 5:
      contacts.innerText = `E-mail: ${data[4].toLowerCase()}
    Address: ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}`;
      break;
    case 6:
      contacts.innerText = `E-mail: ${data[4].toLowerCase()}
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}`;
      break;
    case 7:
      contacts.innerText = `Viber: ${data[7]}
    E-mail: ${data[4].toLowerCase()}
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}
    Address: ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
      break;
    default:
      contacts.innerText = `Viber: ${data[7]}
    E-mail: ${data[4].toLowerCase()}
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}
    Address: ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
  }

  contacts.style.fontSize = `${randNum(3, 4)}mm`;
  contacts.style.lineHeight = contacts.style.fontSize;

  if (Math.random() < 0.25) {
    const color = randomLightColor();
    contacts.style.backgroundColor = color;
  }

  if (Math.random() < 0.33) {
    contacts.style.textAlign = 'right';
  } else if (Math.random() < 0.5) {
    contacts.style.textAlign = 'left';
  } else {
    contacts.style.textAlign = 'center';
  }

  card.appendChild(contacts);

  card.style.backgroundColor = randomLightColor();
  if (Math.random() < 0.25) {
    const color1 = randomLightColor();
    const color2 = randomLightColor();
    if (Math.random() < 0.5) {
      card.style.background = `linear-gradient(${color1}, ${color2})`;
    } else {
      card.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
    }
  }
  card.style.color = randomDarkColor();
  container.appendChild(card);
};

button.addEventListener('click', e => {
  e.preventDefault();
  const people = textArea.value.split('\n');
  people.forEach(el => {
    createCard(el);
  });
});
