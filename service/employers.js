var employers = [
  {
    id: 1,
    name: 'Drushim',
    location: 'Tel-Aviv',
    logo: 'https://www.drushim.co.il/images/logo.png'
  },
  {
    id: 2,
    name: 'ProfITsoft',
    location: 'Kharkov',
    logo: 'http://profitsoft.ua/static/app/img/logo.png'
  },
  {
    id: 3,
    name: 'Amazon',
    location: 'Haifa',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/2000px-Amazon_logo_plain.svg.png'
  },
  {
    id: 4,
    name: 'Philips',
    location: 'Haifa',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Philips_logo.svg/1280px-Philips_logo.svg.png'
  },
  {
    id: 5,
    name: 'Zara',
    location: 'Haifa',
    logo: 'https://avatanplus.com/files/resources/original/58a8bf26f126d15a532ab04c.png'
  },
  {
    id: 6,
    name: 'Google',
    location: 'Haifa',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
  }
];

var lastId = 6;

function get() {
  return employers;
}

function getById(id) {
  return employers.find(item => (item.id === id));
}

function add(item) {
  const employer = {...item, id: ++lastId};
  employers.push(employer);
  return employer;
}

function del(id) {
  const result = employers.filter(item => (item.id === id));
  employers = employers.filter(item => (item.id !== id));
  return result;
}

function update(id, item) {
  const employer = {...item, id};
  const idx = employers.indexOf(item => (item.id === id));
  if (idx < 0) {
    employers.push(employer);
    lastId = id > lastId ? id : lastId;
  } else {
    employers[idx] = employer;
  }
  return employer;
}

module.exports = {
  get,
  getById,
  add,
  del,
  update
};
