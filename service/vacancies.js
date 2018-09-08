var employerService = require('./employers');

var vacancies = [
  {
    id: 1,
    employerId: 1,
    title: 'Software Developer (.Net) - Entry Level',
    description: 'VMD has an exciting opportunity for you to join as an Entry Level Software Developer (.Net) working in our Chantilly, VA office.',
    requirements: 'Working knowledge in the following areas: HTML, C#, ASP.NET, MVC, SQL Server 2012, or Visual Studio 2015.',
    experience: '2',
    place: 'Tel-Aviv',
    tags: ['C#']
  },
  {
    id: 2,
    employerId: 2,
    title: 'Senior Java Developer',
    description: 'Provide custom program development. The job posting is for a regular full time, non-exempt position. The position is not covered under the Service Contract Act (SCA) Davis Bacon Act (DBA), or union.',
    requirements: 'B.S. Degree in Computer Science or related field of study or an equivalent combination of education and experience from which comparable knowledge and skills may be acquired. Also, the applications developer must satisfy all certification requirements necessary to be part of the Cyber Security Work Force (CSWF).',
    experience: '4-5',
    place: 'Kharkov',
    tags: ['Spring', 'Hibernate', 'OOP']
  },
  {
    id: 3,
    employerId: 3,
    title: 'Senior Front-end developer',
    description: 'The Omni-Channel Digital Banking Platform empowers financial institutions to accelerate their digital transformation and effectively compete in a digital-first world. It unifies functionality from traditional core systems and new fintech capabilities into a seamless digital customer experience, drastically improving any customer channel.',
    requirements: 'Experience in using JavaScript, JQuery, HTML, CSS',
    experience: '3+',
    place: 'Haifa',
    tags: ['JavaScript','JQuery','HTML','CSS']
  },
  {
    id: 4,
    employerId: 3,
    title: 'Middle QA Automation Engineer',
    description: 'Lean portal solution (CXP). It’s based on a rich presentation layer and a loosely coupled Web-Oriented Architecture that combines content and interaction.',
    requirements: 'Experience in testing automation of Angular-based web applications (Protractor, Jasmine or Cucumber-JS);',
    experience: '2+',
    place: 'Haifa',
    tags: ['Jenkins', 'Docker', 'Putty', 'MongoDB']
  }
  // ,{
  //   id: 5,
  //   employerId: 5,
  //   title: 'Zara Managers',
  //   description: 'As a Zara Manager, you are an integral part of the Zara image. You are directly responsible for the success of your department. Your strong leadership skills and retail experience will set the example for your team while performing various tasks related to customer service, visual merchandising, sales and stock management, buying, loss prevention, human resources, and operations.',
  //   requirements: 'Ability to multi-task in a fast-paced setting',
  //   experience: '3',
  //   place: 'Haifa',
  //   tags: ['MANAGER']
  // },
  // {
  //   id: 6,
  //   employerId: 6,
  //   title: 'Applications Engineer, University Graduate',
  //   description: 'Apply to this job on the Verily Life Sciences career site at Verily Careers. For more information about this role please see the Verily Life Sciences career site above.',
  //   requirements: 'Java experience',
  //   experience: '5+',
  //   place: 'Haifa',
  //   tags: ['Java']
  // }
];

// var lastId = 6;
var lastId = 4;

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
