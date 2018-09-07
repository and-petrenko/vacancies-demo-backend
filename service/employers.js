var employers = [
  {
    id: 0,
    name: 'Employer #01',
    location: 'Tel-Aviv',
    logo: 'https://www.drushim.co.il/images/logo.png'
  },
  {
    id: 1,
    name: 'Employer #02',
    location: 'Bat Yam',
    logo: 'http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2015/07/logo-maker-09.jpg'
  },
  {
    id: 2,
    name: 'Employer #03',
    location: 'Yaffo',
    logo: 'https://www.logolynx.com/images/logolynx/d5/d5879b5a204d222b526600e93cc01022.jpeg'
  },
  {
    id: 3,
    name: 'Employer #04',
    location: 'Jerusalem',
    logo: 'https://www.logodesignlove.com/images/simple-logos/shell-logo.gif'
  },
  {
    id: 4,
    name: 'Employer #05',
    location: 'Holon',
    logo: 'https://s.yimg.com/uu/api/res/1.2/uQymqCo8GpH8x90X8PvKlw--~B/aD0zMTI7dz02NDA7c209MTthcHBpZD15dGFjaHlvbg--/http://l.yimg.com/os/publish-images/sports/2016-03-23/fd5039a0-f127-11e5-949d-d17a084da2b1_Riders-logos-side-by-side.jpg'
  },
  {
    id: 5,
    name: 'Employer #06',
    location: 'Haifa',
    logo: 'https://www.logodesignlove.com/images/car/audi-logo.gif'
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
