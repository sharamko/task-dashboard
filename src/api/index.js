const customers = [
  {
    name: 'Andros Guion',
    company: 'Agimba',
    phone: '(636) 564-8521',
    email: 'aguion@icq.com',
    country: 'USA',
    status: 'Inactive',
  },
  {
    name: 'Adi Crisall',
    company: 'Devpulse',
    phone: '(242) 704-9607',
    email: 'crisall@bb.com',
    country: 'Iran',
    status: 'Inactive',
  },
  {
    name: 'Garrick Stoner',
    company: 'Yakidoo',
    phone: '(722) 667-3075',
    email: 'stoner@loc.gov',
    country: 'Syria',
    status: 'Active',
  },
  {
    name: 'Ketti Axel',
    company: 'Vinder',
    phone: '(872) 372-3973',
    email: 'kax@news.com',
    country: 'Japan',
    status: 'Inactive',
  },
  {
    name: 'Martica Herley',
    company: 'Dablist',
    phone: '(265) 427-1698',
    email: 'mherl@har.edu',
    country: 'Greece',
    status: 'Active',
  },
  {
    name: 'Sybilla Tumini',
    company: 'Oyoba',
    phone: '(728) 908-8832',
    email: 'stumi@wire.com',
    country: 'China',
    status: 'Active',
  },
  {
    name: 'Sax Al Hirsi',
    company: 'Quaxo',
    phone: '(725) 875-6155',
    email: 'sal@shiny.com',
    country: 'UK',
    status: 'Active',
  },
  {
    name: 'Danika Lukash',
    company: 'Jabbers',
    phone: '(837) 426-0639',
    email: 'lukash@ns.org',
    country: 'China',
    status: 'Inactive',
  },
];

const currentUser = {
  name: 'Evano',
  job: 'Project Manager',
  img: '/img/evano.png',
};

export function getCustomers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(customers), 250);
  });
}

export function getUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(currentUser), 250);
  });
}
