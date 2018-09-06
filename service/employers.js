var employers = [
  {
    id: 0,
    name: 'Employer #01',
    location: 'Tel-Aviv'
  },
  {
    id: 1,
    name: 'Employer #02',
    location: 'Bat Yam'
  },
  {
    id: 2,
    name: 'Employer #03',
    location: 'Yaffo'
  },
  {
    id: 3,
    name: 'Employer #04',
    location: 'Jerusalem'
  },
  {
    id: 4,
    name: 'Employer #05',
    location: 'Holon'
  },
  {
    id: 5,
    name: 'Employer #06',
    location: 'Haifa'
  }
];

var lastId = 5;

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
