// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// interface Members {
//   [key: string]: {
//     _id: string;
//     name: string;
//     email: string;
//     title: string;
//     image: string;
//     socials: {
//       email: string;
//       facebook: string;
//       linkedin: string;
//     };
//     openToWork: boolean;
//     manager: boolean;
//     active: boolean;
//   };
// }

const data = [
  {
    _id: '606235b66f19d569a83edfab',
    name: 'Leonor Rico',
    email: 'Yadira__Schaden@yahoo.com',
    title: 'Principal Configuration Specialist',
    image: 'https://cdn.fakercloud.com/avatars/d_kobelyatsky_128.jpg',
    boss: null,
    socials: [
      {
        social: {
          name: 'Facebook',
        },
        link: 'https://facebook.com/test',
      },
    ],
    openToWork: true,
    manager: true,
    active: true,
  },
  {
    _id: '606235ca6f19d569a83edfac',
    name: 'Estela Rivas',
    email: 'Abagail34@hotmail.com',
    title: 'Chief Applications Planner',
    image: 'https://cdn.fakercloud.com/avatars/wim1k_128.jpg',
    boss: '606235b66f19d569a83edfab',
    socials: [],
    openToWork: true,
    manager: false,
    active: true,
  },
  {
    _id: '60687134f625016e2c0ce2f4',
    name: 'Gerardo Rodríguez',
    email: 'Constantin_Fadel@gmail.com',
    title: 'Internal Optimization Consultant',
    image: 'https://cdn.fakercloud.com/avatars/aeon56_128.jpg',
    boss: '606235ca6f19d569a83edfac',
    socials: [],
    openToWork: true,
    manager: false,
    active: true,
  },
  {
    _id: '606b205fec2e2f46ecb8d305',
    name: 'Lourdes Sedillo',
    email: 'Dario.Reilly@yahoo.com',
    title: 'Dynamic Accounts Associate',
    image: 'https://cdn.fakercloud.com/avatars/carlosjgsousa_128.jpg',
    boss: '60687134f625016e2c0ce2f4',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/przemek.jozwiakowski',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
        },
        link: 'https://github.com/Przemocny',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
        },
        link: 'https://www.linkedin.com/in/pjozwiakowski/',
      },
    ],
    openToWork: false,
    manager: false,
    active: true,
  },
];

const tomek = (data_: Array<string | number>) => {
  const members: Members = {};

  data.forEach((memberItem) => {
    members[memberItem._id] = {
      _id: memberItem._id,
      name: memberItem.name,
      email: memberItem.email,
      title: memberItem.title,
      image: memberItem.image,
      openToWork: memberItem.openToWork,
      manager: memberItem.manager,
      active: memberItem.active,
      socials: {},
    };
  });

  data.forEach((memberItem) => {
    if (memberItem.boss) {
      members[memberItem._id].parent = { ...members[memberItem.boss] };
    }
    memberItem.socials.forEach((memberItemSocial) => {
      const socialName = memberItemSocial.social.name.toLowerCase();
      members[memberItem._id].socials[socialName] = memberItemSocial.link;
    });
  });
  console.log(members);
  return members;
};

tomek();
