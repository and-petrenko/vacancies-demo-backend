var employerService = require('./employers');

var vacancies = [
  {
    id: 0,
    employerId: 0,
    title: 'Title #01',
    description: 'Description #06',
    requirements: 'I want all and now!',
    experience: 'Experiences.',
    place: 'Some place',
    tags: ['tag2', 'tag1', 'tag3']
  },
  {
    id: 1,
    employerId: 0,
    title: 'Title #02',
    description: 'Description #05',
    requirements: 'I want all and now!',
    experience: 'Experiences.',
    place: 'Some place',
    tags: ['tag2', 'tag1', 'tag3']
  },
  {
    id: 2,
    employerId: 1,
    title: 'Title #03',
    description: 'Description #04',
    requirements: 'I want all and now!',
    experience: 'Experiences.',
    place: 'Some place',
    tags: ['tag2', 'tag1', 'tag3']
  },
  {
    id: 3,
    employerId: 2,
    title: 'Title #04',
    description: 'Description #03',
    requirements: 'I want all and now!',
    experience: 'Experiences.',
    place: 'Some place',
    tags: ['tag2', 'tag1', 'tag3']
  },
  {
    id: 4,
    employerId: 3,
    title: 'Title #05',
    description: 'Description #02',
    requirements: 'I want all and now!',
    experience: 'Experiences.',
    place: 'Some place',
    tags: ['tag2', 'tag1', 'tag3']
  },
  {
    id: 5,
    employerId: 5,
    title: 'Title #06',
    description: 'Description #01',
    requirements: 'I want all and now!',
    experience: 'Experiences.',
    place: 'Some place',
    tags: ['tag2', 'tag1', 'tag3']
  }
];

var lastId = 5;

function get() {
  const employers = employerService.get().reduce(
    (result, item) => {
      result[item.id] = item;
      return result;
    },
    {}
  );
  return vacancies.map(
    item => ({...item, employerName: employers[item.employerId].name})
  );
}

function getByEmployerId(employerId) {
  return vacancies.filter(item => (item.employerId === employerId));
}

function getById(id) {
  return vacancies.find(item => (item.id === id));
}

function add(item) {
  const vacancy = {...item, id: ++lastId};
  vacancies.push(vacancy);
  return vacancy;
}

function del(id) {
  const result = vacancies.filter(item => (item.id === id));
  vacancies = vacancies.filter(item => (item.id !== id));
  return result;
}

function update(id, item) {
  const vacancy = {...item, id};
  const idx = vacancies.indexOf(item => (item.id === id));
  if (idx < 0) {
    vacancies.push(vacancy);
    lastId = id > lastId ? id : lastId;
  } else {
    vacancies[idx] = vacancy;
  }
  return vacancy;
}

module.exports = {
  get,
  getByEmployerId,
  getById,
  add,
  del,
  update
};
