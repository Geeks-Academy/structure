interface Members {
  [key: string]: {
    _id: string;
    name: string;
    email: string;
    title: string;
    image: string;
    socials: {
      email: string;
      facebook: string;
      linkedin: string;
    };
    openToWork: boolean;
    manager: boolean;
    active: boolean;
  };
}

module.exports = (data_: Array<string | number>) => {
  const data = [
    {
      openToWork: true,
      manager: false,
      boss: null,
      image: '',
      active: true,
      _id: '60b5091b9267841885e7dfc2',
      section: false,
      name: 'Jose Rodriguez',
      email: 'Jose+0@gmail.com',
      title: 'tester',
      socials: [],
      __v: 0,
    },
  ];

  const members: Members = {};

  data.forEach((memberItem) => {
    members[memberItem._id] = { ...memberItem };
  });

  // members['606235b66f19d569a83edfab'] = {
  //   _id: '606235b66f19d569a83edfab',
  //   name: 'Leonor Rico',
  //   email: 'Yadira__Schaden@yahoo.com',
  //   title: 'Principal Configuration Specialist',
  //   image: 'https://cdn.fakercloud.com/avatars/d_kobelyatsky_128.jpg',
  //   socials: {
  //     email: 'example@gmail.com',
  //     facebook: 'https://www.facebook.com/example',
  //     linkedin: 'https://www.linkedin.com/in/example/',
  //   },
  //   openToWork: true,
  //   manager: true,
  //   active: true,
  // };

  return members;
};
