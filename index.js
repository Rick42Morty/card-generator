const button = document.getElementById('submitBtn');
const customButton = document.getElementById('customBtn');
const textArea = document.getElementById('sourceText');
const container = document.getElementById('cardContainer');

const jobs = [
  'manager',
'supply director',
'Marketing Manager',
'regional representative',
'sourcing manager',
'Product manager',
'manager',
'Marketing Executive',
'Marketing Executive',
'Product manager',
'Marketing Executive',
'General Manager',
'supply manager',
'Marketing Executive',
'Business Development',
'supply director',
'Business Development',
'Marketing Executive',
'General Manager',
'supply director',
'supply director',
'sourcing manager',
'supply director',
'supply manager',
'Sourcing officer',
'Sourcing Manager',
'Business Development',
'Marketing Manager',
'Product manager',
'supply director',
'supply manager',
'supply director',
'supply director',
'Sourcing Manager',
'Marketing Manager',
'General Manager',
'CEO',
'General Manager',
'Sourcing Manager',
'Sourcing Manager',
'Marketing Executive',
'supply director',
'Marketing Executive',
'supply director',
'CEO',
'General Manager',
'manager',
'Business Development',
'supply director',
'marketing director',
'supply manager',
'manager',
'supply manager',
'Marketing Manager',
'Marketing Executive',
'Marketing Executive',
'General Manager',
'supply manager',
'CEO',
'supply manager',
'regional manager',
'Marketing Executive',
'Sourcing Manager',
'Business Development',
'Business Development',
'Business Development',
'supply director',
'regional manager',
'Business Development',
'supply director',
'manager',
'General Manager',
'manager',
'supply manager',
'manager',
'General Manager',
'Marketing Manager',
'Marketing Executive',
'Marketing Executive',
'General Manager',
'supply director',
'CEO',
'marketing director',
'sourcing manager',
'Marketing Manager',
'Business Development',
'regional representative',
'supply manager',
'supply director',
'manager',
'CEO',
'Sourcing officer',
'Business Development',
'sourcing manager',
'regional representative',
'General Manager',
'supply manager',
'Sourcing officer',
'manager',
'supply director',
'supply director',
'Marketing Executive',
'Marketing Manager',
'Sourcing Manager',
'marketing director',
'manager',
'Sourcing Manager',
'General Manager',
'Marketing Manager',
'manager',
'supply manager',
'General Manager',
'marketing director',
'Product manager',
'General Manager',
'Business Development',
'regional representative',
'supply manager',
'GM',
'supply manager',
'founder',
'manager',
'supply director',
'manager',
'Marketing Executive',
'Marketing Manager',
'CEO',
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
  'Georgia, serif',
  'Console, Monaco, monospace',
  'Lucida Sans Unicode, Lucida Grande, sans-serif',
  'Times New Roman, Times New Roman, Times, serif',
  'Verdana, Geneva, sans-serif',
  'Trebuchet MS, Trebuchet MS, sans-serif',
  'Roboto, sans-serif',
  'ZCOOL XiaoWei, serif',
  'Open Sans, sans-serif',
  'Lato, sans-serif',
  'Montserrat, sans-serif',
  'Baloo Chettan, cursive',
  'Saira Extra Condensed, sans-serif',
  'Raleway, sans-serif',
  'Arimo, sans-serif',
  'Merriweather, serif',
  'Slabo, serif',
  'Noto Sans, sans-serif',
  'Poppins, sans-serif',
  'Playfair Display, serif',
  'Roboto Mono, monospace',
  'Muli, sans-serif',
  'Nunito, sans-serif',
  'Sniglet, cursive',
  'Bitter, serif',
  'Source Code Pro, monospace'
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
  if (Math.random() < 0.1) return 'white';
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

  if (Math.random() < 0.1) {
    const color = randomLightColor();
    company.style.backgroundColor = color;
  }

  if (Math.random() < 0.1) {
    if (Math.random() < 0.5) {
      company.style.textDecoration = 'underline';
    } else {
      company.style.borderBottom = `2mm solid ${randomDarkColor()}`;
    }
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
  if (Math.random() < 0.1) {
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
  const jobFont = randNum(4, 5);
  job.style.fontSize = `${jobFont}mm`;
  job.style.lineHeight = job.style.fontSize;
  // mainInfo.appendChild(job);

  const phone = document.createElement('h3');
  phone.innerText = `${randPhonePrefix()} ${data[7]}`;
  phone.style.fontSize = `${jobFont - 1}mm`;
  phone.style.lineHeight = phone.style.fontSize;
  // mainInfo.appendChild(phone);

  if (Math.random() < 0.33) {
    mainInfo.appendChild(job);
    mainInfo.appendChild(phone);
  } else if (Math.random() < 0.5) {
    mainInfo.appendChild(phone);
    mainInfo.appendChild(job);
  } else {
    mainInfo.appendChild(job);
    //mainInfo.appendChild(phone);
  }

  if (Math.random() < 0.066) {
    const bordColor = randomDarkColor();
    mainInfo.style.borderBottom = `2mm solid ${bordColor}`;
    mainInfo.style.borderTop = `2mm solid ${bordColor}`;
  }

  card.appendChild(mainInfo);

  //Add contacts

  const contacts = document.createElement('p');
  const contactOption = randNum(0, 9);
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
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}
    Address: ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
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
     ${data[9] ? data[9] : 'www.randomsite.com'}
     ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;

      break;
    case 6:
      contacts.innerText = `E-mail: ${data[4].toLowerCase()}
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}
    Address: ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
      break;
    case 7:
      contacts.innerText = `Telegram: ${data[7]}
    E-mail: ${data[4].toLowerCase()}
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}
    Address: ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
      break;
    case 8:
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

  if (Math.random() < 0.1) {
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

    if (Math.random() < 0.2) {
      card.style.background = `linear-gradient(${color1}, ${color2})`;
    } else if (Math.random() < 0.25) {
      card.style.background = `linear-gradient(${randNum(0, 360)}deg, ${color1}, ${color2})`;
    } else if (Math.random() < 0.3) {
      const n = randNum(20, 80);
      card.style.background = `linear-gradient(to right, ${color1} ${n}%, ${color2} ${100 - n}%)`;
    } else if (Math.random() < 0.3) {
      const n = randNum(20, 80);
      card.style.background = `linear-gradient(${randNum(
        0,
        360
      )}deg, ${color1} ${n}%, ${color2} ${100 - n}%)`;
    } else if (Math.random() < 0.4) {
      const n = randNum(20, 80);
      card.style.background = `repeating-linear-gradient(${randNum(
        0,
        360
      )}deg, ${color1}, ${color1} ${n / 100 - 0.06}em,
      ${color2} ${n / 100 + 0.06}em, ${color2} 1em)`;
      card.style.backgroundColor = randomLightColor();
    } else {
      card.classList.add('pattern1');
      card.style.backgroundSize = `${randNum(1, 4)}em ${randNum(1, 4)}em`;
      card.style.backgroundColor = randomLightColor();
    }
  }
  card.style.color = randomDarkColor();
  container.appendChild(card);
};

const createCustomCard = (man, index) => {
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

  if (Math.random() < 0.1) {
    if (Math.random() < 0.5) {
      company.style.textDecoration = 'underline';
    } else {
      company.style.borderBottom = `2mm solid ${randomDarkColor()}`;
    }
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

  const name = document.createElement('h2');
  name.style.fontSize = `${randNum(6, 7)}mm`;
  name.style.lineHeight = name.style.fontSize;
  name.innerText = `${data[0]} ${data[1]}`.toLowerCase();
  mainInfo.appendChild(name);

  const job = document.createElement('h4');
  job.innerText = `${jobs[Math.floor(Math.random() * jobs.length)]}`;
  const jobFont = randNum(4, 5);
  job.style.fontSize = `${jobFont}mm`;
  job.style.lineHeight = job.style.fontSize;
  // mainInfo.appendChild(job);

  const phone = document.createElement('h3');
  phone.innerText = `${randPhonePrefix()} ${data[7]}`;
  phone.style.fontSize = `${jobFont - 1}mm`;
  phone.style.lineHeight = phone.style.fontSize;
  // mainInfo.appendChild(phone);

  if (Math.random() < 0.33) {
    mainInfo.appendChild(job);
    mainInfo.appendChild(phone);
  } else if (Math.random() < 0.5) {
    mainInfo.appendChild(phone);
    mainInfo.appendChild(job);
  } else {
    mainInfo.appendChild(job);
    //mainInfo.appendChild(phone);
  }

  if (Math.random() < 0.066) {
    const bordColor = randomDarkColor();
    mainInfo.style.borderBottom = `2mm solid ${bordColor}`;
    mainInfo.style.borderTop = `2mm solid ${bordColor}`;
  }

  card.appendChild(mainInfo);

  //Add contacts

  const contacts = document.createElement('p');
  const contactOption = randNum(0, 9);
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
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}
    Address: ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
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
     ${data[9] ? data[9] : 'www.randomsite.com'}
     ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;

      break;
    case 6:
      contacts.innerText = `E-mail: ${data[4].toLowerCase()}
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}
    Address: ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
      break;
    case 7:
      contacts.innerText = `Telegram: ${data[7]}
    E-mail: ${data[4].toLowerCase()}
    Website: ${data[9] ? data[9] : 'www.randomsite.com'}
    Address: ${data[10] ? data[10] : data[2] + ' Random Street 54-78'}`;
      break;
    case 8:
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

  if (Math.random() < 0.33) {
    contacts.style.textAlign = 'right';
  } else if (Math.random() < 0.5) {
    contacts.style.textAlign = 'left';
  } else {
    contacts.style.textAlign = 'center';
  }

  card.appendChild(contacts);

  const numberOfCustomPatterns = 25;

  card.classList.add(`custom${index % numberOfCustomPatterns}`);
  card.style.backgroundColor = randomLightColor();
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

customButton.addEventListener('click', e => {
  e.preventDefault();
  const people = textArea.value.split('\n');
  people.forEach((el, ind) => {
    createCustomCard(el, ind);
  });
});
