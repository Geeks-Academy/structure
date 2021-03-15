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
    text: {
        "name": "Przemysław Jóźwiakowski", 
        "title": "CEO",             
    },
    manager: true,
    "image": "https://ca.slack-edge.com/T017TS5J06T-U0188QN584T-232239a47d89-512",
    "socials": {
        "email": {
            "link": "przemyslaw.jozwiakowski@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/przemek.jozwiakowski"
        },
        "github": {
            "link": "https://github.com/Przemocny"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/pjozwiakowski/"
        }
    }
}

key[2] = { 
    "key": 2, 
    parent: key[1], 
    stackChildren: true,
    text: {
        "name": "UI UX"
    }
}

key[3] = { 
    "key": 3, 
    parent: key[1], 
    stackChildren: true,
    text: {
        "name": "Frontend"
    },
}

key[4] = { 
    "key": 4, 
    parent: key[1], 
    stackChildren: true,
    text: {
        "name": "Mentorship"
    }
}

key[5] = { 
    "key": 5, 
    parent: key[1], 
    stackChildren: true,
    text: {
        "name": "DevOps"
    }
}

key[6] = {
    "key": 6, 
    parent: key[1], 
    stackChildren: true,
    text: {
        "name": "Rating"
    }
}

key[7] = { 
    "key": 7, 
    parent: key[1], 
    stackChildren: true,
    text: {
        "name": "Projects"
    }
}

key[8] = { 
    "key": 8, 
    parent: key[1], 
    stackChildren: true,
    text: {
        "name": "Test"
    }
}
 
key[9] = { 
    "key": 9, 
    parent: key[2], 
    stackChildren: true,
    text: {
        "name": "Miłosz Bieniek", 
        "title": "Design Lead", 
    },
    manager: true,
    "image": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p480x480/46187879_1456971984405250_3551884704787464192_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=UiurfKjx7-MAX8juS_3&_nc_ht=scontent-waw1-1.xx&tp=6&oh=9b114abb0bbf7e5b718c71c4cef49e8f&oe=606D6E5A",
    "socials": {
        "email": {
            "link": "kontakt@mbieniek.pl"
        },
        "facebook": {
            "link": "https://www.facebook.com/miloszak.b"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/mi%C5%82osz-bieniek-34474a179/"
        }
    }
}
 
key[10] = { 
    "key": 10, 
    parent: key[9], 
    stackChildren: true,
    text: {
        "name": "Wojciech Smacki", 
        "title": "UI Designer",
    },
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQFBaqHkZxPFLQ/profile-displayphoto-shrink_800_800/0/1563117049852?e=1620864000&v=beta&t=Dmf5Wx66PftuwKXFvIyA85w5fjMjyh91QScojFL7FE8",
    "socials": {
        "email": {
            "link": "rdyyxd@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/rdyy7"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/wojciech-smacki-b0593272/"
        }
    }
}

key[11] = { 
    "key": 11, 
    parent: key[2], 
    text: {
        "name": "Anika Kustra", 
        "title": "Project Manager, UX",
    },
    stackChildren: true,
    manager: true,
    "image": "https://media.discordapp.net/attachments/782939475717652481/819268700195651664/90617470_206343937316896_5809877092514398208_n.jpg?width=1422&height=1497",
    "socials": {
        "email": {
            "link": "anika.kustra@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/AniQCat"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/anika-kustra/"
        }
    }
}

key[12] = { 
    "key": 12, 
    parent: key[11], 
    stackChildren: true,
    text: {
        "name": "Monika Fularska", 
        "title": "UX Designer",
    },
    "image": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/159248018_1347754595607279_3858603432197025038_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=C7GLfKj5LPAAX86KzAv&_nc_ht=scontent-waw1-1.xx&oh=5a4fc2226a89b4716c036d2e39194733&oe=606D801B",
    "socials": {
        "email": {
            "link": "monika.fularska@onet.pl"
        },
        "facebook": {
            "link": "https://www.facebook.com/monika.fularska.3"
        },
        "instagram": {
            "link": "https://www.instagram.com/monka899/"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/monika-fularska-17b449147/"
        }
    }
}
 
key[13] = { 
    "key": 13, 
    parent: key[11], 
    stackChildren: true,
    text: {
        "name": "Agata Kuza", 
        "title": "UX Designer",
    },
    "image": "https://cdn.discordapp.com/avatars/780083069944201236/86bf8911f564f7f4df4168023bef0d58.png?size=256",
    "socials": {
        "email": {
            "link": "agata.kuza@hotmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/agata.kuza"
        },
        "instagram": {
            "link": "https://www.instagram.com/agatakuza/"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/agatakuza/"
        }
    }
}

key[14] = { 
    "key": 14, 
    parent: key[3], 
    stackChildren: true,
    text: {
        "name": "Marek Kowalonek", 
        "title": "Project Manager",
    },
    manager: true,
    "image": "https://ca.slack-edge.com/T017TS5J06T-U0188SP0NG3-b0304cacb6ac-512",
    "socials": {
        "email": {
            "link": "marek.kowalonek@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/23121443f/"
        },
        "github": {
            "link": "https://github.com/hayuna/"
        },
        "instagram": {
            "link": "https://www.instagram.com/mras2303/"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/%F0%9F%94%AE-marek-kowalonek-6a8923107/"
        }
    }
}

key[15] = { 
    "key": 15, 
    parent: key[14], 
    stackChildren: true,
    text: {
        "name": "Tomasz Korenberg", 
        "title": "Frontend Developer",
    },
    "image": "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-1/p480x480/29354816_1728889580483804_2447892175144418764_o.jpg?_nc_cat=108&ccb=3&_nc_sid=7206a8&_nc_ohc=ZSYmPQnOfmMAX--5Y3X&_nc_ht=scontent-waw1-1.xx&tp=6&oh=7e0338b974013ab817ef130a0c398465&oe=60555E1B",
    "socials": {
        "email": {
            "link": "tkoras@o2.pl"
        },
        "facebook": {
            "link": "https://www.facebook.com/tomasz.skadytomasz"
        },
        "github": {
            "link": "https://github.com/TomaszKorenberg"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/tomasz-korenberg-258692187/"
        }
    }
}
 
key[16] = { 
    "key": 16, 
    parent: key[14], 
    stackChildren: true,
    text: {
        "name": "Piotr Grobelak", 
        "title": "Frontend Developer",
    },
    "image": "https://ca.slack-edge.com/T017TS5J06T-U01893VJC2E-6bf2bf0c2005-512",
    "socials": {
        "email": {
            "link": "grobelak.piotr@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/profile.php?id=100020286522190"
        },
        "github": {
            "link": "https://github.com/PiotrGrobelak"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/piotr-grobelak/"
        }
    }
}

key[17] = { 
    "key": 17, 
    parent: key[14], 
    stackChildren: true,
    text: {
        "name": "Maciej Spałek", 
        "title": "Frontend Developer",
    },
    "image": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/s480x480/117390333_3387525714671229_5920464408278755339_o.jpg?_nc_cat=102&ccb=3&_nc_sid=7206a8&_nc_ohc=shs8LjW3CdgAX-5vb0g&_nc_oc=AQlLjtJilD8LLLtOqacNvI66Yj1Zttb8puxebddlAu3hYFwFZqezMqau_lXqv6tDmBE&_nc_ht=scontent-waw1-1.xx&tp=7&oh=646b1acd7d95a8d53872da845992bd7b&oe=6057A510",
    "socials": {
        "email": {
            "link": "spwrtt@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/MaciekSpalek"
        },
        "github": {
            "link": "https://github.com/MaciejSpalek"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/maciej-spa%C5%82ek/"
        }
    }
}

key[18] = { 
    "key": 18, 
    parent: key[14], 
    stackChildren: true,
    text: {
        "name": "Marcin Krysiński", 
        "title": "Frontend Developer",
    },
    "image": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p480x480/40620370_1110096179144760_3079358664943861760_o.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_ohc=kxmc6abOl1AAX_QBn50&_nc_ht=scontent-waw1-1.xx&tp=6&oh=40c8feb64af75d3815884054b298af66&oe=6056DB39",
    "socials": {
        "email": {
            "link": "marcin_krysinski@outlook.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/marcin.krysinskii"
        },
        "github": {
            "link": "https://github.com/Krysik"
        }
    }
}

key[19] = { 
    "key": 19, 
    parent: key[14], 
    stackChildren: true,
    text: {
        "name": "Konrad Rudnicki", 
        "title": "Frontend Developer",
    },
    "image": "https://ca.slack-edge.com/T017TS5J06T-U01ME867RHS-3ac1fb22fb57-512",
    "socials": {
        "email": {
            "link": "konrad.rudnicki@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/konrad.rudnicki.399"
        },
        "github": {
            "link": "https://github.com/zeglarz"
        }
    }
}

key[20] = { 
    "key": 20, 
    parent: key[14], 
    stackChildren: true,
    text: {
        "name": "Łukasz Hendrysiak", 
        "title": "Frontend Developer",
    },
    "image": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p480x480/67714378_3003054743100154_1822985803496685568_o.jpg?_nc_cat=104&ccb=3&_nc_sid=7206a8&_nc_ohc=YZZrbFRkmAsAX-mBlqX&_nc_ht=scontent-waw1-1.xx&tp=6&oh=99f6c07f27aaf73639c17b6b32c3fb61&oe=60559A95",
    "socials": {
        "email": {
            "link": "lukasz.hendrysiak@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/lukasz.hendrysiak"
        },
        "github": {
            "link": "https://github.com/hendrysiak"
        },
        "instagram": {
            "link": "https://www.instagram.com/hendrysiaklukasz/"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/%C5%82ukasz-hendrysiak-939523179/"
        }
    }
}

key[21] = { 
    "key": 21, 
    parent: key[14], 
    stackChildren: true,
    text: {
        "name": "Wojciech Czarnocki", 
        "title": "Frontend Developer",
    },
    "image": "https://ca.slack-edge.com/T017TS5J06T-U01HGML3J68-de2a92692f4f-512",
    "socials": {
        "email": {
            "link": "czarnocki.w@wp.pl"
        },
        "github": {
            "link": "https://github.com/caren1"
        }
    }
}

key[22] = { 
    "key": 22, 
    parent: key[4], 
    stackChildren: true,
    text: {
        "name": "Jacek Więckowski", 
        "title": "Java Developer",
    },
    "image": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c54.0.480.480a/p480x480/10422547_817628188289658_4567403423951867527_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_ohc=PqZ4WoV6QRoAX8vOYHP&_nc_ht=scontent-waw1-1.xx&tp=27&oh=80ae75898470ed260370885172daa59a&oe=60567D31",
    "socials": {
        "email": {
            "link": "wieckow44@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/jacek.wieckowski.3"
        },
        "github": {
            "link": "https://github.com/jwieckow"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/jacek-wieckowski-45a258117/"
        }
    }
}

key[23] = { 
    "key": 23, 
    parent: key[4], 
    stackChildren: true,
    text: {
        "name": "Piotr Mierzejewski", 
        "title": "Java Developer",
    },
    "image": "https://ca.slack-edge.com/T017TS5J06T-U01AKNF7G9X-gfd207e3c159-512",
    "socials": {
        "email": {
            "link": "piotr.mierzejewski@mail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/profile.php?id=100049666071393"
        },
        "github": {
            "link": "https://github.com/Posampas"
        }
    }
}

key[24] = { 
    "key": 24, 
    parent: key[5], 
    stackChildren: true,
    text: {
        "name": "Bartłomiej Więckowski", 
        "title": "Project Manager",
    },
    manager: true,
    "image": "https://media-exp1.licdn.com/dms/image/C5103AQEH2xFc45wPWA/profile-displayphoto-shrink_800_800/0/1517599585425?e=1620864000&v=beta&t=Y43IbbuWGTlwHMkr7KQ46_BfPegv4eK6zmLGpettgwg",
    "socials": {
        "email": {
            "link": "bar.wieckowski@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/profile.php?id=100004457194867"
        },
        "github": {
            "link": "https://github.com/bwieckow"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/bart%C5%82omiej-wi%C4%99ckowski-a13b41119/"
        }
    }
}

key[25] = { 
    "key": 25, 
    parent: key[24], 
    stackChildren: true,
    text: {
        "name": "Piotr Wachulec", 
        "title": "DevOps",
    },
    "image": "https://ca.slack-edge.com/T017TS5J06T-U01JFVCL3KP-b5835ae344b5-512",
    "socials": {
        "email": {
            "link": "p.wachulec@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/pwachulec"
        },
        "github": {
            "link": "https://github.com/PiotrWachulec"
        },
        "instagram": {
            "link": "https://www.instagram.com/piotr_wachulec/"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/piotrwachulec/"
        }
    }
}

key[26] = { 
    "key": 26, 
    parent: key[4], 
    stackChildren: true,
    text: {
        "name": "Rafał Maduzia", 
        "title": "Java Developer",
    },
    "image": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/71399027_2358509571029621_6092089828642390016_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5iGdSTHyuDoAX_zknEH&_nc_ht=scontent-waw1-1.xx&oh=f7f12d5bd2f10be9a094097df8b73331&oe=606D39B6",
    "socials": {
        "email": {
            "link": "rafi11m@hotmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/profile.php?id=100006118020280"
        },
        "github": {
            "link": "https://github.com/rmaduzia"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/rafa%C5%82-maduzia/"
        }
    }
}

key[27] = { 
    "key": 27, 
    parent: key[14], 
    stackChildren: true,
    text: {
        "name": "Marta Wiese", 
        "title": "Trainee Frontend Developer",
    },
    "image": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/15621771_1185001804887725_4784570161683151699_n.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=uSF1XFwnouIAX8Ji3m0&_nc_ht=scontent-waw1-1.xx&oh=ff193a111cfb5736d50d772c26f10f50&oe=60603EFC",
    "socials": {
        "email": {
            "link": "marta.wiese5@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/marta.wiese"
        },
        "github": {
            "link": "https://github.com/MarW5"
        },
        "instagram": {
            "link": "https://www.instagram.com/marta.wiese_official/"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/marta-wiese/"
        }
    }
}

key[28] = { 
    "key": 28, 
    parent: key[4], 
    stackChildren: true,
    text: {
        "name": "Adam Kurjaniuk", 
        "title": "Trainee Java Developer", 
    },
    "image": "https://ca.slack-edge.com/T017TS5J06T-U01NP1LQ0EA-gfb7b98dc4e6-512",
    "socials": {
        "email": {
            "link": "penq5@wp.pl"
        },
        "github": {
            "link": "https://github.com/Z3tiX"
        }
    }
}

key[29] = { 
    "key": 29, 
    parent: key[4],
    stackChildren: true,
    text: {
        "name": "Grzegorz Szewc", 
        "title": "Trainee Java Developer", 
    },
    "image": "https://ca.slack-edge.com/T017TS5J06T-U01P8DV6U49-g5966e1b5e53-512",
    "socials": {
        "email": {
            "link": "szewc.kgrzegorz@gmail.com"
        }
    }
}

key[30] = { 
    "key": 30, 
    parent: key[11], 
    stackChildren: true,
    text: {
        "name": "Monika Maksimowicz", 
        "title": "UX Designer", 
    },
    "image": "https://media.discordapp.net/attachments/782939475717652481/819268495249899530/13879302_1050729368349645_6295463308019375652_n.jpg",
    "socials": {
        "email": {
            "link": "monika.maksimowicz@gmail.com"
        },
        "facebook": {
            "link": "https://www.facebook.com/monika.maksimowicz.50"
        },
        "instagram": {
            "link": "https://www.instagram.com/p/ePmhmdRl3E/"
        },
        "linkedin": {
            "link": "https://www.linkedin.com/in/monika-maksimowicz-38941b150/"
        }
    }
}





const chart_config = [
    ...key
];

