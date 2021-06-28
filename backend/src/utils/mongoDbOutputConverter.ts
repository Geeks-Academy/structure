interface MembersRoot {
  [key: string]: {
    _id: string;
    name: string;
    email: string;
    title: string;
    image: string;
    socials: {
      [key: string]: string;
    };
    openToWork: boolean;
    manager: boolean;
    active: boolean;
    parent?: Member;
    absent: boolean;
    section: boolean;
  };
}

interface Member {
  _id: string;
  name: string;
  email: string;
  title: string;
  image: string;
  socials: {
    [key: string]: string;
  };
  openToWork: boolean;
  manager: boolean;
  active: boolean;
  parent?: Member;
  absent: boolean;
  section: boolean;
}

interface OldMembers {
  _id: string;
  name: string;
  email: string;
  title: string;
  image: string;
  boss: string | null;
  socials:
    | {
        [key: string]:
          | {
              _id: string;
              __v: number;
              image: string;
              active: boolean;
              name: string;
            }
          | string;
      }[]
    | [];
  openToWork: boolean;
  manager: boolean;
  active: boolean;
  absent?: boolean;
  section?: boolean;
  __v?: number;
}

const dataT: OldMembers[] = [
  {
    openToWork: false,
    manager: true,
    boss: null,
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621966704/members/T017TS5J06T-U0188QN584T-232239a47d89-512.png',
    active: true,
    _id: '60b937e9cd0fd90856b5de3a',
    name: 'Przemysław Jóźwiakowski',
    title: 'CEO',
    email: 'przemyslaw.jozwiakowski@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
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
          __v: 0,
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
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/pjozwiakowski/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: true,
    boss: '60b937e9cd0fd90856b5de3a',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621966880/members/46187879_1456971984405250_3551884704787464192_n.jpg.jpg',
    active: true,
    _id: '60b93817cd0fd90856b5de3b',
    name: 'Miłosz Bieniek',
    title: 'Design Lead',
    email: 'kontakt@mbieniek.pl',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/miloszak.b',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/mi%C5%82osz-bieniek-34474a179/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93817cd0fd90856b5de3b',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621966974/members/1617194900219.jpg',
    active: true,
    _id: '60b9384bcd0fd90856b5de3c',
    name: 'Wojciech Smacki',
    title: 'UI Designer',
    email: 'rdyyxd@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/rdyy7',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/wojciech-smacki-b0593272/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: true,
    manager: false,
    boss: '60b93817cd0fd90856b5de3b',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967087/members/90617470_206343937316896_5809877092514398208_n.jpg',
    active: true,
    _id: '60b93860cd0fd90856b5de3d',
    name: 'Anika Kustra',
    title: 'UX Designer',
    email: 'anika.kustra@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/AniQCat',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/anika-kustra/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93817cd0fd90856b5de3b',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967194/members/1517839767586.jpg',
    active: true,
    _id: '60b93873cd0fd90856b5de3e',
    name: 'Monika Fularska',
    title: 'UI/UX Designer',
    email: 'monika.fularska@onet.pl',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/monika.fularska.3',
      },
      {
        social: {
          active: true,
          _id: '60a2e91e607c338c8e59fc86',
          name: 'instagram',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/instagram.png',
          __v: 0,
        },
        link: 'https://www.instagram.com/monka899/',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/monika-fularska-17b449147/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93817cd0fd90856b5de3b',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967242/members/86bf8911f564f7f4df4168023bef0d58.png',
    active: false,
    _id: '60b93885cd0fd90856b5de3f',
    name: 'Agata Kuza',
    title: 'UX Designer',
    email: 'agata.kuza@hotmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/agata.kuza',
      },
      {
        social: {
          active: true,
          _id: '60a2e91e607c338c8e59fc86',
          name: 'instagram',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/instagram.png',
          __v: 0,
        },
        link: 'https://www.instagram.com/agatakuza/',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/agatakuza/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93817cd0fd90856b5de3b',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968140/members/13879302_1050729368349645_6295463308019375652_n.jpg',
    active: true,
    _id: '60b93898cd0fd90856b5de40',
    name: 'Monika Maksimowicz',
    title: 'UX Designer',
    email: 'monika.maksimowicz@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/monika.maksimowicz.50',
      },
      {
        social: {
          active: true,
          _id: '60a2e91e607c338c8e59fc86',
          name: 'instagram',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/instagram.png',
          __v: 0,
        },
        link: 'https://www.instagram.com/p/ePmhmdRl3E/',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/monika-maksimowicz-38941b150/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93817cd0fd90856b5de3b',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968414/members/135480651_2159324897531675_602912579982248870_n.jpg.jpg',
    active: true,
    _id: '60b938a8cd0fd90856b5de41',
    name: 'Olga Matysek',
    title: 'UI/UX Designer',
    email: 'olga.matysek.o@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/olga.m0',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/olga-m-32632b1a7/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93817cd0fd90856b5de3b',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968535/members/45375391_2023645807692619_131211929497632768_n.jpg.jpg',
    active: true,
    _id: '60b938bacd0fd90856b5de42',
    name: 'Emilia Świątek',
    title: 'UI/UX Designer',
    email: 'emiliajulia.swiatek@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/emilia.swiatek.3',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/emilia-%C5%9Bwi%C4%85tek-0bb21ba2/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93817cd0fd90856b5de3b',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968600/members/1600175131182.jpg',
    active: true,
    _id: '60b938c7cd0fd90856b5de43',
    name: 'Aleksandra Gacek',
    title: 'UI/UX Designer',
    email: 'ac.gacek@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '60a2e92e607c338c8e59fc88',
          name: 'behance',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/behance.png',
          __v: 0,
        },
        link: 'https://www.behance.net/aleksandragacek',
      },
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/gacekalexandra',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/alexandragacek/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93817cd0fd90856b5de3b',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968689/members/1618670673238.jpg',
    active: true,
    _id: '60b938d6cd0fd90856b5de44',
    name: 'Aneta Pawłowska',
    title: 'UI/UX Designer',
    email: 'anetakarolinapawlowska@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/aneta.pe21',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/aneta-paw%C5%82owska-b02ab94b/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93817cd0fd90856b5de3b',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968751/members/84068257_3298497756846142_7079146718549245952_n.jpg.jpg',
    active: true,
    _id: '60b938e3cd0fd90856b5de45',
    name: 'Kinga Sochacz',
    title: 'UI/UX Designer',
    email: 'kinga846@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/singa.kocha',
      },
      {
        social: {
          active: true,
          _id: '60a2e91e607c338c8e59fc86',
          name: 'instagram',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/instagram.png',
          __v: 0,
        },
        link: 'https://www.instagram.com/kingasochacz_',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: true,
    boss: '60b937e9cd0fd90856b5de3a',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967278/members/T017TS5J06T-U0188SP0NG3-b0304cacb6ac-512.jpg',
    active: true,
    _id: '60b93912cd0fd90856b5de46',
    name: 'Marek Kowalonek',
    title: 'Frontend Lead <br> Backend Lead',
    email: 'marekkowalonek@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/23121443f/',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/hayuna/',
      },
      {
        social: {
          active: true,
          _id: '60a2e91e607c338c8e59fc86',
          name: 'instagram',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/instagram.png',
          __v: 0,
        },
        link: 'https://www.instagram.com/mras2303/',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/%F0%9F%94%AE-marek-kowalonek-6a8923107/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93912cd0fd90856b5de46',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967311/members/1586898705606.jpg',
    active: true,
    _id: '60b93933cd0fd90856b5de47',
    name: 'Tomasz Korenberg',
    title: 'Fullstack Developer',
    email: 'tkoras@o2.pl',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/tomasz.skadytomasz',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/TomaszKorenberg',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/tomasz-korenberg-258692187/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93912cd0fd90856b5de46',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967346/members/T017TS5J06T-U01893VJC2E-6bf2bf0c2005-512.png',
    active: true,
    _id: '60b93948cd0fd90856b5de48',
    name: 'Piotr Grobelak',
    title: 'Frontend Developer',
    email: 'grobelak.piotr@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/profile.php?id=100020286522190',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/PiotrGrobelak',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/piotr-grobelak/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93912cd0fd90856b5de46',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967434/members/117390333_3387525714671229_5920464408278755339_n.jpg.jpg',
    active: true,
    _id: '60b93957cd0fd90856b5de49',
    name: 'Maciej Spałek',
    title: 'Frontend Developer',
    email: 'spwrtt@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/MaciekSpalek',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/MaciejSpalek',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/maciej-spa%C5%82ek/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93912cd0fd90856b5de46',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967506/members/40620370_1110096179144760_3079358664943861760_n.jpg.jpg',
    active: true,
    _id: '60b9396dcd0fd90856b5de4a',
    name: 'Marcin Krysiński',
    title: 'Fullstack Developer',
    email: 'marcin_krysinski@outlook.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/marcin.krysinskii',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/Krysik',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93912cd0fd90856b5de46',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967556/members/1615387688837.jpg',
    active: true,
    _id: '60b93981cd0fd90856b5de4b',
    name: 'Konrad Rudnicki',
    title: 'Frontend Developer',
    email: 'konrad.rudnicki@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/konrad.rudnicki.399',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/zeglarz',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/konradrudnicki/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93912cd0fd90856b5de46',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967627/members/67714378_3003054743100154_1822985803496685568_n.jpg.jpg',
    active: true,
    _id: '60b9399dcd0fd90856b5de4c',
    name: 'Łukasz Hendrysiak',
    title: 'Fullstack Developer',
    email: 'lukasz.hendrysiak@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/lukasz.hendrysiak',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/hendrysiak',
      },
      {
        social: {
          active: true,
          _id: '60a2e91e607c338c8e59fc86',
          name: 'instagram',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/instagram.png',
          __v: 0,
        },
        link: 'https://www.instagram.com/hendrysiaklukasz/',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/%C5%82ukasz-hendrysiak-939523179/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93912cd0fd90856b5de46',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968041/members/15621771_1185001804887725_4784570161683151699_n.jpg.jpg',
    active: true,
    _id: '60b939aecd0fd90856b5de4d',
    name: 'Marta Wiese',
    title: 'Frontend Developer',
    email: 'marta.wiese5@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/marta.wiese',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/MarW5',
      },
      {
        social: {
          active: true,
          _id: '60a2e91e607c338c8e59fc86',
          name: 'instagram',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/instagram.png',
          __v: 0,
        },
        link: 'https://www.instagram.com/marta.wiese_official/',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/marta-wiese/',
      },
    ],
    __v: 0,
    absent: true,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93912cd0fd90856b5de46',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968319/members/118858716_3213278425424902_4367096746847197373_n.jpg.jpg',
    active: true,
    _id: '60b939bccd0fd90856b5de4e',
    name: 'Krzysztof Męcik',
    title: 'Frontend Developer',
    email: 'krzysztof.mecik@poczta.fm',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/krzysztof.mecik/',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/Tubka',
      },
      {
        social: {
          active: true,
          _id: '60a2e91e607c338c8e59fc86',
          name: 'instagram',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/instagram.png',
          __v: 0,
        },
        link: 'https://www.instagram.com/krzysztofmecik/',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/krzysztof-m%C4%99cik-2302a017a/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b937e9cd0fd90856b5de3a',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967712/members/1517518394051.jpg',
    active: true,
    _id: '60b939d6cd0fd90856b5de4f',
    name: 'Jacek Więckowski',
    title: 'Java Developer',
    email: 'wieckow44@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/jacek.wieckowski.3',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/jwieckow',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/jacek-wieckowski-45a258117/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b939d6cd0fd90856b5de4f',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967782/members/T017TS5J06T-U01AKNF7G9X-gfd207e3c159-512.png',
    active: true,
    _id: '60b939eccd0fd90856b5de50',
    name: 'Piotr Mierzejewski',
    title: 'Java Developer',
    email: 'piotr.mierzejewski@mail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/profile.php?id=100049666071393',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/Posampas',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b939d6cd0fd90856b5de4f',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967969/members/1529737263286.jpg',
    active: true,
    _id: '60b939fccd0fd90856b5de51',
    name: 'Rafał Maduzia',
    title: 'Java Developer',
    email: 'rafi11m@hotmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/profile.php?id=100006118020280',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/rmaduzia',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/rafa%C5%82-maduzia/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b939d6cd0fd90856b5de4f',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967782/members/T017TS5J06T-U01AKNF7G9X-gfd207e3c159-512.png',
    active: true,
    _id: '60b93a0ccd0fd90856b5de52',
    name: 'Adam Kurjaniuk',
    title: 'Java Developer',
    email: 'penq5@wp.pl',
    socials: [
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/Z3tiX',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: true,
    boss: '60b937e9cd0fd90856b5de3a',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967848/members/20024009_784712898353943_1042182651429395623_o.jpg.jpg',
    active: true,
    _id: '60b93a28cd0fd90856b5de53',
    name: 'Bartłomiej Więckowski',
    title: 'DevOps Lead',
    email: 'bar.wieckowski@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/profile.php?id=100004457194867',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/bwieckow',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/bart%C5%82omiej-wi%C4%99ckowski-a13b41119/',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93a28cd0fd90856b5de53',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967901/members/T017TS5J06T-U01JFVCL3KP-b5835ae344b5-512.jpg',
    active: true,
    _id: '60b93a3dcd0fd90856b5de54',
    name: 'Piotr Wachulec',
    title: 'DevOps',
    email: 'p.wachulec@gmail.com',
    socials: [
      {
        social: {
          active: true,
          _id: '6068924ff625016e2c0ce2f5',
          __v: 0,
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/facebook.png',
          name: 'facebook',
        },
        link: 'https://www.facebook.com/pwachulec',
      },
      {
        social: {
          active: true,
          _id: '60a2e8fc607c338c8e59fc83',
          name: 'github',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/github.png',
          __v: 0,
        },
        link: 'https://github.com/PiotrWachulec',
      },
      {
        social: {
          active: true,
          _id: '60a2e91e607c338c8e59fc86',
          name: 'instagram',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/instagram.png',
          __v: 0,
        },
        link: 'https://www.instagram.com/piotr_wachulec/',
      },
      {
        social: {
          active: true,
          _id: '60a2e8e0607c338c8e59fc80',
          name: 'linkedin',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/linkedin.png',
          __v: 0,
        },
        link: 'https://www.linkedin.com/in/piotrwachulec/',
      },
      {
        social: {
          active: true,
          _id: '60a2e986607c338c8e59fc92',
          name: 'devto',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621368965/social_icons/devto.png',
          __v: 0,
        },
        link: 'https://dev.to/piotrwachulec',
      },
      {
        social: {
          active: true,
          _id: '60a2e8eb607c338c8e59fc81',
          name: 'youtube',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/youtube.png',
          __v: 0,
        },
        link: 'https://www.youtube.com/channel/UC6L70fSSgyXBscFTgCnBLWg',
      },
      {
        social: {
          active: true,
          _id: '60a2e8f4607c338c8e59fc82',
          name: 'twitter',
          image:
            'https://res.cloudinary.com/mras2303/image/upload/v1621288862/social_icons/twitter.png',
          __v: 0,
        },
        link: 'https://twitter.com/piotrwachulec',
      },
    ],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b93a3dcd0fd90856b5de54',
    image:
      'https://res.cloudinary.com/mras2303/image/upload/c_thumb,g_face,w_300,h_300/v1624398572/intdzjt3e0v0fx21sdxq.jpg',
    active: true,
    _id: '60d25ac4979b2c8fd7a6387a',
    name: 'Test',
    email: 'test@gmail.com',
    title: 'test',
    socials: [],
    __v: 0,
  },
  {
    openToWork: false,
    manager: false,
    boss: '60b937e9cd0fd90856b5de3a',
    image: '',
    active: true,
    _id: '60d25bff979b2c8fd7a6387b',
    name: 'Test',
    email: 'test+11@example.com',
    title: 'Test',
    socials: [],
    __v: 0,
    section: false,
  },
];

const tomek = (data: Array<OldMembers> = dataT) => {
  const members: MembersRoot = {};

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
      absent: false,
      section: false,
    };
  });

  data.forEach((memberItem) => {
    if (memberItem.boss) {
      members[memberItem._id].parent = { ...members[memberItem.boss] };
    }
    if (memberItem.absent) {
      members[memberItem._id].absent = true;
    }
    if (memberItem.section) {
      members[memberItem._id].section = true;
    }
    memberItem.socials.forEach((memberItemSocial) => {
      const socialName = memberItemSocial.social.name.toLowerCase();
      members[memberItem._id].socials[socialName] = <string>memberItemSocial.link;
    });
  });
  console.log(members);
  return members;
};

tomek();
