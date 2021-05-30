const key = [];

key[1] = {
  key: 1,
  stackChildren: true,
  name: 'Przemysław Jóźwiakowski',
  email: 'przemyslaw.jozwiakowski@gmail.com',
  title: 'CEO',
  manager: true,
  active: true,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621966704/members/T017TS5J06T-U0188QN584T-232239a47d89-512.png',
  socials: {
    facebook: 'https://www.facebook.com/przemek.jozwiakowski',
    github: 'https://github.com/Przemocny',
    linkedin: 'https://www.linkedin.com/in/pjozwiakowski/',
  },
};

key[2] = {
  key: 2,
  parent: key[1],
  stackChildren: true,
  name: 'UI UX',
};

key[3] = {
  key: 3,
  parent: key[1],
  stackChildren: true,
  name: 'Frontend',
};

key[4] = {
  key: 4,
  parent: key[1],
  stackChildren: true,
  name: 'Mentorship',
};

key[5] = {
  key: 5,
  parent: key[1],
  stackChildren: true,
  name: 'DevOps',
};

key[6] = {
  key: 6,
  parent: key[1],
  stackChildren: true,
  name: 'Rating',
};

key[7] = {
  key: 7,
  parent: key[1],
  stackChildren: true,
  name: 'Projects',
};

key[8] = {
  key: 8,
  parent: key[1],
  stackChildren: true,
  name: 'Test',
};

key[9] = {
  key: 9,
  parent: key[2],
  stackChildren: true,
  name: 'Miłosz Bieniek',
  title: 'Design Lead',
  manager: true,
  email: 'kontakt@mbieniek.pl',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621966880/members/46187879_1456971984405250_3551884704787464192_n.jpg.jpg',
  socials: {
    facebook: 'https://www.facebook.com/miloszak.b',
    linkedin: 'https://www.linkedin.com/in/mi%C5%82osz-bieniek-34474a179/',
  },
};

key[10] = {
  key: 10,
  parent: key[9],
  stackChildren: true,
  name: 'Wojciech Smacki',
  title: 'UI Designer',
  email: 'rdyyxd@gmail.com',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621966974/members/1617194900219.jpg',
  socials: {
    facebook: 'https://www.facebook.com/rdyy7',
    linkedin: 'https://www.linkedin.com/in/wojciech-smacki-b0593272/',
  },
};

key[11] = {
  key: 11,
  parent: key[9],
  name: 'Anika Kustra',
  title: 'UX',
  stackChildren: true,
  manager: true,
  email: 'anika.kustra@gmail.com',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967087/members/90617470_206343937316896_5809877092514398208_n.jpg',
  socials: {
    facebook: 'https://www.facebook.com/AniQCat',
    linkedin: 'https://www.linkedin.com/in/anika-kustra/',
  },
};

key[12] = {
  key: 12,
  parent: key[9],
  stackChildren: true,
  name: 'Monika Fularska',
  title: 'UX Designer',
  email: 'monika.fularska@onet.pl',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967194/members/1517839767586.jpg',
  socials: {
    facebook: 'https://www.facebook.com/monika.fularska.3',
    instagram: 'https://www.instagram.com/monka899/',
    linkedin: 'https://www.linkedin.com/in/monika-fularska-17b449147/',
  },
};

key[13] = {
  key: 13,
  parent: key[9],
  stackChildren: true,
  name: 'Agata Kuza',
  title: 'UX Designer',
  email: 'agata.kuza@hotmail.com',
  active: false,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967242/members/86bf8911f564f7f4df4168023bef0d58.png',
  socials: {
    facebook: 'https://www.facebook.com/agata.kuza',
    instagram: 'https://www.instagram.com/agatakuza/',
    linkedin: 'https://www.linkedin.com/in/agatakuza/',
  },
};

key[14] = {
  key: 14,
  parent: key[3],
  stackChildren: true,
  name: 'Marek Kowalonek',
  title: 'Project Manager',
  email: 'marek.kowalonek@gmail.com',
  manager: true,
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967278/members/T017TS5J06T-U0188SP0NG3-b0304cacb6ac-512.jpg',
  socials: {
    facebook: 'https://www.facebook.com/23121443f/',
    github: 'https://github.com/hayuna/',
    instagram: 'https://www.instagram.com/mras2303/',
    linkedin: 'https://www.linkedin.com/in/%F0%9F%94%AE-marek-kowalonek-6a8923107/',
  },
};

key[15] = {
  key: 15,
  parent: key[14],
  stackChildren: true,
  name: 'Tomasz Korenberg',
  title: 'Fullstack Developer',
  email: 'tkoras@o2.pl',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967311/members/1586898705606.jpg',
  socials: {
    facebook: 'https://www.facebook.com/tomasz.skadytomasz',
    github: 'https://github.com/TomaszKorenberg',
    linkedin: 'https://www.linkedin.com/in/tomasz-korenberg-258692187/',
  },
};

key[16] = {
  key: 16,
  parent: key[14],
  stackChildren: true,
  name: 'Piotr Grobelak',
  email: 'grobelak.piotr@gmail.com',
  title: 'Frontend Developer',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967346/members/T017TS5J06T-U01893VJC2E-6bf2bf0c2005-512.png',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100020286522190',
    github: 'https://github.com/PiotrGrobelak',
    linkedin: 'https://www.linkedin.com/in/piotr-grobelak/',
  },
};

key[17] = {
  key: 17,
  parent: key[14],
  stackChildren: true,
  name: 'Maciej Spałek',
  title: 'Frontend Developer',
  email: 'spwrtt@gmail.com',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967434/members/117390333_3387525714671229_5920464408278755339_n.jpg.jpg',
  socials: {
    facebook: 'https://www.facebook.com/MaciekSpalek',
    github: 'https://github.com/MaciejSpalek',
    linkedin: 'https://www.linkedin.com/in/maciej-spa%C5%82ek/',
  },
};

key[18] = {
  key: 18,
  parent: key[14],
  stackChildren: true,
  name: 'Marcin Krysiński',
  title: 'Fullstack Developer',
  email: 'marcin_krysinski@outlook.com',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967506/members/40620370_1110096179144760_3079358664943861760_n.jpg.jpg',
  socials: {
    facebook: 'https://www.facebook.com/marcin.krysinskii',
    github: 'https://github.com/Krysik',
  },
};

key[19] = {
  key: 19,
  parent: key[14],
  stackChildren: true,
  name: 'Konrad Rudnicki',
  title: 'Frontend Developer',
  email: 'konrad.rudnicki@gmail.com',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967556/members/1615387688837.jpg',
  socials: {
    facebook: 'https://www.facebook.com/konrad.rudnicki.399',
    github: 'https://github.com/zeglarz',
    linkedin: 'https://www.linkedin.com/in/konradrudnicki/',
  },
};

key[20] = {
  key: 20,
  parent: key[14],
  stackChildren: true,
  name: 'Łukasz Hendrysiak',
  title: 'Fullstack Developer',
  email: 'lukasz.hendrysiak@gmail.com',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967627/members/67714378_3003054743100154_1822985803496685568_n.jpg.jpg',
  socials: {
    facebook: 'https://www.facebook.com/lukasz.hendrysiak',
    github: 'https://github.com/hendrysiak',
    instagram: 'https://www.instagram.com/hendrysiaklukasz/',
    linkedin: 'https://www.linkedin.com/in/%C5%82ukasz-hendrysiak-939523179/',
  },
};

key[22] = {
  key: 22,
  parent: key[4],
  stackChildren: true,
  name: 'Jacek Więckowski',
  title: 'Java Developer',
  email: 'wieckow44@gmail.com',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967712/members/1517518394051.jpg',
  socials: {
    facebook: 'https://www.facebook.com/jacek.wieckowski.3',
    github: 'https://github.com/jwieckow',
    linkedin: 'https://www.linkedin.com/in/jacek-wieckowski-45a258117/',
  },
};

key[23] = {
  key: 23,
  parent: key[4],
  stackChildren: true,
  name: 'Piotr Mierzejewski',
  email: 'piotr.mierzejewski@mail.com',
  title: 'Java Developer',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967782/members/T017TS5J06T-U01AKNF7G9X-gfd207e3c159-512.png',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100049666071393',
    github: 'https://github.com/Posampas',
  },
};

key[24] = {
  key: 24,
  parent: key[5],
  stackChildren: true,
  name: 'Bartłomiej Więckowski',
  title: 'Project Manager',
  manager: true,
  email: 'bar.wieckowski@gmail.com',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967848/members/20024009_784712898353943_1042182651429395623_o.jpg.jpg',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100004457194867',
    github: 'https://github.com/bwieckow',
    linkedin: 'https://www.linkedin.com/in/bart%C5%82omiej-wi%C4%99ckowski-a13b41119/',
  },
};

key[25] = {
  key: 25,
  parent: key[24],
  stackChildren: true,
  name: 'Piotr Wachulec',
  email: 'p.wachulec@gmail.com',
  title: 'DevOps',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967901/members/T017TS5J06T-U01JFVCL3KP-b5835ae344b5-512.jpg',
  socials: {
    facebook: 'https://www.facebook.com/pwachulec',
    github: 'https://github.com/PiotrWachulec',
    instagram: 'https://www.instagram.com/piotr_wachulec/',
    linkedin: 'https://www.linkedin.com/in/piotrwachulec/',
    devto: 'https://dev.to/piotrwachulec',
    youtube: 'https://www.youtube.com/channel/UC6L70fSSgyXBscFTgCnBLWg',
    twitter: 'https://twitter.com/piotrwachulec',
  },
};

key[26] = {
  key: 26,
  parent: key[4],
  stackChildren: true,
  name: 'Rafał Maduzia',
  title: 'Java Developer',
  email: 'rafi11m@hotmail.com',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967969/members/1529737263286.jpg',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100006118020280',
    github: 'https://github.com/rmaduzia',
    linkedin: 'https://www.linkedin.com/in/rafa%C5%82-maduzia/',
  },
};

key[27] = {
  key: 27,
  parent: key[14],
  stackChildren: true,
  name: 'Marta Wiese',
  title: 'Trainee Frontend Developer',
  email: 'marta.wiese5@gmail.com',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968041/members/15621771_1185001804887725_4784570161683151699_n.jpg.jpg',
  socials: {
    facebook: 'https://www.facebook.com/marta.wiese',
    github: 'https://github.com/MarW5',
    instagram: 'https://www.instagram.com/marta.wiese_official/',
    linkedin: 'https://www.linkedin.com/in/marta-wiese/',
  },
};

key[28] = {
  key: 28,
  parent: key[4],
  stackChildren: true,
  name: 'Adam Kurjaniuk',
  email: 'penq5@wp.pl',
  title: 'Trainee Java Developer',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621967782/members/T017TS5J06T-U01AKNF7G9X-gfd207e3c159-512.png',
  socials: {
    github: 'https://github.com/Z3tiX',
  },
};

key[29] = {
  key: 30,
  parent: key[9],
  stackChildren: true,
  name: 'Monika Maksimowicz',
  title: 'UX Designer',
  email: 'monika.maksimowicz@gmail.com',
  active: true,
  openToWork: false,
  image:
    'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968140/members/13879302_1050729368349645_6295463308019375652_n.jpg',
  socials: {
    facebook: 'https://www.facebook.com/monika.maksimowicz.50',
    instagram: 'https://www.instagram.com/p/ePmhmdRl3E/',
    linkedin: 'https://www.linkedin.com/in/monika-maksimowicz-38941b150/',
  },
};

key[31] = {
  key: 31,
  parent: key[14],
  stackChildren: true,
  name: 'Krzysztof Męcik',
  title: 'Junior Frontend Developer',
  email: 'krzysztof.mecik@poczta.fm',
  active: true,
  openToWork: false,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968319/members/118858716_3213278425424902_4367096746847197373_n.jpg.jpg',
  socials: {
    facebook: 'https://www.facebook.com/krzysztof.mecik/',
    instagram: 'https://www.instagram.com/krzysztofmecik/',
    linkedin: 'https://www.linkedin.com/in/krzysztof-m%C4%99cik-2302a017a/',
  },
};

key[32] = {
  key: 32,
  parent: key[9],
  stackChildren: true,
  name: 'Olga Matysek',
  email: 'olga.matysek.o@gmail.com',
  title: 'UI/UX Designer',
  openToWork: false,
  active: true,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968414/members/135480651_2159324897531675_602912579982248870_n.jpg.jpg',
  socials: {
    facebook: 'https://www.facebook.com/olga.m0',
    linkedin: 'https://www.linkedin.com/in/olga-m-32632b1a7/',
  },
};

key[33] = {
  key: 33,
  parent: key[9],
  stackChildren: true,
  name: 'Emilia Świątek',
  email: 'emiliajulia.swiatek@gmail.com',
  title: 'UI/UX Designer',
  openToWork: false,
  active: true,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968535/members/45375391_2023645807692619_131211929497632768_n.jpg.jpg',
  socials: {
    facebook: 'https://www.facebook.com/emilia.swiatek.3',
    linkedin: 'https://www.linkedin.com/in/emilia-%C5%9Bwi%C4%85tek-0bb21ba2/',
  },
};

key[34] = {
  key: 34,
  parent: key[9],
  stackChildren: true,
  name: 'Aleksandra Gacek',
  email: 'ac.gacek@gmail.com',
  title: 'UI/UX Designer',
  openToWork: false,
  active: true,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968600/members/1600175131182.jpg',
  socials: {
    behance: 'https://www.behance.net/aleksandragacek',
    facebook: 'https://www.facebook.com/gacekalexandra',
    linkedin: 'https://www.linkedin.com/in/alexandragacek/',
  },
};

key[35] = {
  key: 35,
  parent: key[9],
  stackChildren: true,
  name: 'Aneta Pawłowska',
  email: 'anetakarolinapawlowska@gmail.com',
  title: 'UI/UX Designer',
  openToWork: false,
  active: true,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968689/members/1618670673238.jpg',
  socials: {
    facebook: 'https://www.facebook.com/aneta.pe21',
    linkedin: 'https://www.linkedin.com/in/aneta-paw%C5%82owska-b02ab94b/',
  },
};

key[36] = {
  key: 36,
  parent: key[9],
  stackChildren: true,
  name: 'Kinga Sochacz',
  email: 'kinga846@gmail.com',
  title: 'UI/UX Designer',
  openToWork: false,
  active: true,
  image: 'https://res.cloudinary.com/mras2303/image/upload/c_thumb,w_200/v1621968751/members/84068257_3298497756846142_7079146718549245952_n.jpg.jpg',
  socials: {
    facebook: 'https://www.facebook.com/singa.kocha',
    instagram: 'https://www.instagram.com/kingasochacz_',
  },
};

export const members = [...key];
