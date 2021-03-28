const key = []

key[0] = {
    container: "#basic-example",
    connectors: {
        type: 'step'
    },
    node: {
        HTMLclass: 'nodeExample1'
    }
}


key[1] = { 
    "key": 1, 
    stackChildren: true,
    name: "Przemysław Jóźwiakowski", 
    title: "CEO",             
    manager: true,
    image: "https://ca.slack-edge.com/T017TS5J06T-U0188QN584T-232239a47d89-512",
    socials: {
        email: "przemyslaw.jozwiakowski@gmail.com",
        facebook:"https://www.facebook.com/przemek.jozwiakowski",
        github: "https://github.com/Przemocny",
        linkedin: "https://www.linkedin.com/in/pjozwiakowski/",
    }
}

key[2] = { 
    "key": 2, 
    parent: key[1], 
    stackChildren: true,
    name: "UI UX"
}

key[3] = { 
    "key": 3, 
    parent: key[1], 
    stackChildren: true,
    name: "Frontend"
}

key[4] = { 
    "key": 4, 
    parent: key[1], 
    stackChildren: true,
    name: "Mentorship"
}

key[5] = { 
    "key": 5, 
    parent: key[1], 
    stackChildren: true,
    name: "DevOps"
}

key[6] = {
    "key": 6, 
    parent: key[1], 
    stackChildren: true,
    name: "Rating"
}

key[7] = { 
    "key": 7, 
    parent: key[1], 
    stackChildren: true,
    name: "Projects"
}

key[8] = { 
    "key": 8, 
    parent: key[1], 
    stackChildren: true,
    name: "Test"
}
 
key[9] = { 
    "key": 9, 
    parent: key[2], 
    stackChildren: true,
    name: "Miłosz Bieniek", 
    title: "Design Lead", 
    manager: true,
    image: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p480x480/46187879_1456971984405250_3551884704787464192_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=UiurfKjx7-MAX8juS_3&_nc_ht=scontent-waw1-1.xx&tp=6&oh=9b114abb0bbf7e5b718c71c4cef49e8f&oe=606D6E5A",
    socials: {
        email: "kontakt@mbieniek.pl",
        facebook:"https://www.facebook.com/miloszak.b",
        linkedin:"https://www.linkedin.com/in/mi%C5%82osz-bieniek-34474a179/",
    }
}
 
key[10] = { 
    "key": 10, 
    parent: key[9], 
    stackChildren: true,
    name: "Wojciech Smacki", 
    title: "UI Designer",
    image: "https://media-exp1.licdn.com/dms/image/C4D03AQFBaqHkZxPFLQ/profile-displayphoto-shrink_800_800/0/1563117049852?e=1620864000&v=beta&t=Dmf5Wx66PftuwKXFvIyA85w5fjMjyh91QScojFL7FE8",
    socials: {
        email: "rdyyxd@gmail.com",
        facebook:"https://www.facebook.com/rdyy7",
        linkedin:"https://www.linkedin.com/in/wojciech-smacki-b0593272/",
    }
}

key[11] = { 
    "key": 11, 
    parent: key[2], 
    name: "Anika Kustra", 
    title: "Project Manager, UX",
    stackChildren: true,
    manager: true,
    image: "https://media.discordapp.net/attachments/782939475717652481/819268700195651664/90617470_206343937316896_5809877092514398208_n.jpg?width=1422&height=1497",
    socials: {
        email: "anika.kustra@gmail.com",
        facebook:"https://www.facebook.com/AniQCat",
        linkedin:"https://www.linkedin.com/in/anika-kustra/",
    }
}

key[12] = { 
    "key": 12, 
    parent: key[11], 
    stackChildren: true,
    name: "Monika Fularska", 
    title: "UX Designer",
    image: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/159248018_1347754595607279_3858603432197025038_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=C7GLfKj5LPAAX86KzAv&_nc_ht=scontent-waw1-1.xx&oh=5a4fc2226a89b4716c036d2e39194733&oe=606D801B",
    socials: {
        email: "monika.fularska@onet.pl",
        facebook:"https://www.facebook.com/monika.fularska.3",
        instagram: "https://www.instagram.com/monka899/",
        linkedin:"https://www.linkedin.com/in/monika-fularska-17b449147/",
    }
}
 
key[13] = { 
    "key": 13, 
    parent: key[11], 
    stackChildren: true,
    name: "Agata Kuza", 
    title: "UX Designer",
    image: "https://cdn.discordapp.com/avatars/780083069944201236/86bf8911f564f7f4df4168023bef0d58.png?size=256",
    socials: {
        email: "agata.kuza@hotmail.com",
        facebook:"https://www.facebook.com/agata.kuza",
        instagram: "https://www.instagram.com/agatakuza/",
        linkedin:"https://www.linkedin.com/in/agatakuza/",
    }
}

key[14] = { 
    "key": 14, 
    parent: key[3], 
    stackChildren: true,
    name: "Marek Kowalonek", 
    title: "Project Manager",
    manager: true,
    image: "https://ca.slack-edge.com/T017TS5J06T-U0188SP0NG3-b0304cacb6ac-512",
    socials: {
        email: "marek.kowalonek@gmail.com",
        facebook:"https://www.facebook.com/23121443f/",
        github: "https://github.com/hayuna/",
        instagram: "https://www.instagram.com/mras2303/",
        linkedin:"https://www.linkedin.com/in/%F0%9F%94%AE-marek-kowalonek-6a8923107/",
    }
}

key[15] = { 
    "key": 15, 
    parent: key[14], 
    stackChildren: true,
    name: "Tomasz Korenberg", 
    title: "Frontend Developer",
    image: "https://media-exp1.licdn.com/dms/image/C4D03AQEeBbPoprMlhg/profile-displayphoto-shrink_800_800/0/1586898705606?e=1622073600&v=beta&t=s4OGAlZaU6sBnuUtAjl5hAhFiVmfzMw7PQUkv2ZDtPU",
    socials: {
        email: "tkoras@o2.pl",
        facebook:"https://www.facebook.com/tomasz.skadytomasz",
        github: "https://github.com/TomaszKorenberg",
        linkedin:"https://www.linkedin.com/in/tomasz-korenberg-258692187/",
    }
}
 
key[16] = { 
    "key": 16, 
    parent: key[14], 
    stackChildren: true,
    name: "Piotr Grobelak", 
    title: "Frontend Developer",
    image: "https://ca.slack-edge.com/T017TS5J06T-U01893VJC2E-6bf2bf0c2005-512",
    socials: {
        email: "grobelak.piotr@gmail.com",
        facebook:"https://www.facebook.com/profile.php?id=100020286522190",
        github: "https://github.com/PiotrGrobelak",
        linkedin:"https://www.linkedin.com/in/piotr-grobelak/",
    }
}

key[17] = { 
    "key": 17, 
    parent: key[14], 
    stackChildren: true,
    name: "Maciej Spałek", 
    title: "Frontend Developer",
    image: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/s480x480/117390333_3387525714671229_5920464408278755339_o.jpg?_nc_cat=102&ccb=3&_nc_sid=7206a8&_nc_ohc=shs8LjW3CdgAX-5vb0g&_nc_oc=AQlLjtJilD8LLLtOqacNvI66Yj1Zttb8puxebddlAu3hYFwFZqezMqau_lXqv6tDmBE&_nc_ht=scontent-waw1-1.xx&tp=7&oh=646b1acd7d95a8d53872da845992bd7b&oe=6057A510",
    socials: {
        email: "spwrtt@gmail.com",
        facebook:"https://www.facebook.com/MaciekSpalek",
        github: "https://github.com/MaciejSpalek",
        linkedin:"https://www.linkedin.com/in/maciej-spa%C5%82ek/",
    }
}

key[18] = { 
    "key": 18, 
    parent: key[14], 
    stackChildren: true,
    name: "Marcin Krysiński", 
    title: "Frontend Developer",
    image: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p480x480/40620370_1110096179144760_3079358664943861760_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=NS-aWEpXM1cAX-NASMM&_nc_ht=scontent-cdg2-1.xx&tp=6&oh=1c634935914477738d5f0a145417d020&oe=607E6839",
    socials: {
        email: "marcin_krysinski@outlook.com",
        facebook:"https://www.facebook.com/marcin.krysinskii",
        github: "https://github.com/Krysik",
    }
}

key[19] = { 
    "key": 19, 
    parent: key[14], 
    stackChildren: true,
    name: "Konrad Rudnicki", 
    title: "Frontend Developer",
    image: "https://media-exp1.licdn.com/dms/image/C4E03AQGcsSpIFL40cw/profile-displayphoto-shrink_800_800/0/1615387688837?e=1622073600&v=beta&t=UndKE7CxTLEgWSWhPLoXoPpd8naVCN-y_TBjwHNROwc",
    socials: {
        email: "konrad.rudnicki@gmail.com",
        facebook:"https://www.facebook.com/konrad.rudnicki.399",
        github: "https://github.com/zeglarz",
        linkedin: "https://www.linkedin.com/in/konradrudnicki/"
    }
}

key[20] = { 
    "key": 20, 
    parent: key[14], 
    stackChildren: true,
    name: "Łukasz Hendrysiak", 
    title: "Frontend Developer",
    image: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/67714378_3003054743100154_1822985803496685568_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=2cmzTHAdU1EAX8v2DaM&_nc_ht=scontent-cdg2-1.xx&oh=4a454d7a4e731f76ab7d3ddbda34d8ed&oe=607B2E80",
    socials: {
        email: "lukasz.hendrysiak@gmail.com",
        facebook:"https://www.facebook.com/lukasz.hendrysiak",
        github: "https://github.com/hendrysiak",
        instagram: "https://www.instagram.com/hendrysiaklukasz/",
        linkedin:"https://www.linkedin.com/in/%C5%82ukasz-hendrysiak-939523179/",
    }
}

key[22] = { 
    "key": 22, 
    parent: key[4], 
    stackChildren: true,
    name: "Jacek Więckowski", 
    title: "Java Developer",
    image: "https://media-exp1.licdn.com/dms/image/C5103AQEQ_xU_YvPgrg/profile-displayphoto-shrink_800_800/0/1517518394051?e=1622073600&v=beta&t=R1gzZIv0OiE_T1iL2_KHJxiEeoT7VT0huPmerYGRyY8",
    socials: {
        email: "wieckow44@gmail.com",
        facebook:"https://www.facebook.com/jacek.wieckowski.3",
        github: "https://github.com/jwieckow",
        linkedin:"https://www.linkedin.com/in/jacek-wieckowski-45a258117/",
    }
}

key[23] = { 
    "key": 23, 
    parent: key[4], 
    stackChildren: true,
    name: "Piotr Mierzejewski", 
    title: "Java Developer",
    image: "https://ca.slack-edge.com/T017TS5J06T-U01AKNF7G9X-gfd207e3c159-512",
    socials: {
        email: "piotr.mierzejewski@mail.com",
        facebook:"https://www.facebook.com/profile.php?id=100049666071393",
        github: "https://github.com/Posampas",
    }
}

key[24] = { 
    "key": 24, 
    parent: key[5], 
    stackChildren: true,
    name: "Bartłomiej Więckowski", 
    title: "Project Manager",
    manager: true,
    image: "https://media-exp1.licdn.com/dms/image/C5103AQEH2xFc45wPWA/profile-displayphoto-shrink_800_800/0/1517599585425?e=1620864000&v=beta&t=Y43IbbuWGTlwHMkr7KQ46_BfPegv4eK6zmLGpettgwg",
    socials: {
        email: "bar.wieckowski@gmail.com",
        facebook:"https://www.facebook.com/profile.php?id=100004457194867",
        github: "https://github.com/bwieckow",
        linkedin:"https://www.linkedin.com/in/bart%C5%82omiej-wi%C4%99ckowski-a13b41119/",
    }
}

key[25] = { 
    "key": 25, 
    parent: key[24], 
    stackChildren: true,
    name: "Piotr Wachulec", 
    title: "DevOps",
    image: "https://ca.slack-edge.com/T017TS5J06T-U01JFVCL3KP-b5835ae344b5-512",
    socials: {
        email: "p.wachulec@gmail.com",
        facebook:"https://www.facebook.com/pwachulec",
        github: "https://github.com/PiotrWachulec",
        instagram: "https://www.instagram.com/piotr_wachulec/",
        linkedin:"https://www.linkedin.com/in/piotrwachulec/",
    }
}

key[26] = { 
    "key": 26, 
    parent: key[4], 
    stackChildren: true,
    name: "Rafał Maduzia", 
    title: "Java Developer",
    image: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/71399027_2358509571029621_6092089828642390016_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5iGdSTHyuDoAX_zknEH&_nc_ht=scontent-waw1-1.xx&oh=f7f12d5bd2f10be9a094097df8b73331&oe=606D39B6",
    socials: {
        email: "rafi11m@hotmail.com",
        facebook:"https://www.facebook.com/profile.php?id=100006118020280",
        github: "https://github.com/rmaduzia",
        linkedin:"https://www.linkedin.com/in/rafa%C5%82-maduzia/",
    }
}

key[27] = { 
    "key": 27, 
    parent: key[14], 
    stackChildren: true,
    name: "Marta Wiese", 
    title: "Trainee Frontend Developer",
    image: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/15621771_1185001804887725_4784570161683151699_n.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=uSF1XFwnouIAX8Ji3m0&_nc_ht=scontent-waw1-1.xx&oh=ff193a111cfb5736d50d772c26f10f50&oe=60603EFC",
    socials: {
        email: "marta.wiese5@gmail.com",
        facebook:"https://www.facebook.com/marta.wiese",
        github: "https://github.com/MarW5",
        instagram: "https://www.instagram.com/marta.wiese_official/",
        linkedin:"https://www.linkedin.com/in/marta-wiese/"
    ,
    }
}

key[28] = { 
    "key": 28, 
    parent: key[4], 
    stackChildren: true,
    name: "Adam Kurjaniuk", 
    title: "Trainee Java Developer", 
    image: "https://ca.slack-edge.com/T017TS5J06T-U01NP1LQ0EA-gfb7b98dc4e6-512",
    socials: {
        email: "penq5@wp.pl",
        github: "https://github.com/Z3tiX",
    }
}

key[29] = { 
    "key": 30, 
    parent: key[11], 
    stackChildren: true,
    name: "Monika Maksimowicz", 
    title: "UX Designer", 
    image: "https://media.discordapp.net/attachments/782939475717652481/819268495249899530/13879302_1050729368349645_6295463308019375652_n.jpg",
    socials: {
        email: "monika.maksimowicz@gmail.com",
        facebook:"https://www.facebook.com/monika.maksimowicz.50",
        instagram: "https://www.instagram.com/p/ePmhmdRl3E/",
        linkedin:"https://www.linkedin.com/in/monika-maksimowicz-38941b150/",
    }
}

key[31] = { 
    "key": 31, 
    parent: key[14], 
    stackChildren: true,
    name: "Krzysztof Męcik", 
    title: "Junior Frontend Developer", 
    image: "https://scontent.fpoz5-1.fna.fbcdn.net/v/t1.0-9/118858716_3213278425424902_4367096746847197373_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HueQ7MVwLWsAX-42fgm&_nc_ht=scontent.fpoz5-1.fna&oh=72a4c27995c4c561080db4b62e3962dc&oe=60828EBE",
    socials: {
        email: "krzysztof.mecik@poczta.fm",
        facebook:"https://www.facebook.com/krzysztof.mecik/",
        instagram: "https://www.instagram.com/krzysztofmecik/",
        linkedin:"https://www.linkedin.com/in/krzysztof-m%C4%99cik-2302a017a/",
    }
}

export const members = [
    ...key
];
