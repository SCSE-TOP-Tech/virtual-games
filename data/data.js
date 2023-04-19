// To add JWT Password Authentication 

export const characters = [
    // Doyle (Updated V1)
    {
        id: "doyle",
        name: "Doyle", 
        image: "src.png",  
        actions: {
            x: "src.svg",
            talk: "src.svg"
        },
        room: {
            name: "Doyle's Room",
            background: {
                name:"Doyle's Room Background",
                height: 1024,
                width: 1024,
                src:`https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680258151/virtual_games/rooms/doyleroombg_zl4tz4.png`
            },
            clues: {
                spaceID_card: {
                    name: 'Space ID Card',
                    desc: 'Home Station: Andromeda',
                    width: 485,
                    height: 318,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516227/virtual_games/rooms/doyle/id_yzk534.png'
                },
                music_albums: {
                    name: 'Music Albums',
                    desc: 'Music Albums belonging to...',
                    width: 485,
                    height: 318,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/album_pbr2bh.png'
                },
                bloodstained_towel: {
                    name: 'Blood-stained Towel',
                    desc: 'Towel stained with blood',
                    width: 612,
                    height: 408,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/towel_ysje7j.png'
                }
            },
            dummy_objects:{
                rug: {
                    name: 'Blood-stained Rug',
                    desc: 'Music Albums belonging to...',
                    width: 1632,
                    height: 519,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/album_pbr2bh.png'
                },
                clothes: {
                    name: 'Clothes',
                    desc: 'Music Albums belonging to...',
                    width: 637,
                    height: 327,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/clothes_ybv5gf.png'
                },
                luggage: {
                    name: 'Luggage',
                    desc: 'Music Albums belonging to...',
                    width: 398,
                    height: 627,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/luggage_kwyefl.png'
                }
            }
        }
    },
    // Carmen (Updated V1)
    {
        id: "carmen",
        name: "Carmen", 
        image: "src.png",  
        actions: {
            x: "src.svg",
            talk: "src.svg"
        },
        room: {
            name:"Carmen's Room",
            background: {
                name:"Carmen's Room Background",
                height: 1024,
                width: 1024,
                src:"https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853525/virtual_games/rooms/carmen/carmenbg_nk8x4n.png"
            },
            clues: {
                master_key: {
                    name: 'Master Key',
                    desc: 'Seems like the key to the Master Room',
                    width: 348,
                    height: 306,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853516/virtual_games/rooms/carmen/master-key_uunebr.png'
                },
                mail: {
                    name: 'Invitation Letter',
                    desc: 'Sent from Planet Earth',
                    width: 348,
                    height: 306,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/album_pbr2bh.png'
                }
            },
            dummy_objects:{
                clothespin: {
                    name: 'Clothespin',
                    desc: 'Oddly familiar clothespin',
                    width: 230,
                    height: 219,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853516/virtual_games/rooms/carmen/clothspin_hzfkhg.png'
                }
            }
        }
    },
    // Seraphine (Updated V1)
    {
        id: "seraphine",
        name: "Seraphine", 
        image: "src.png",  
        actions: {
            walk: "src.svg",
            talk: "src.svg"
        },
        room: {
            name: "Seraphine Room",
            background: {
                name:"Seraphine's Room Background",
                height: 1024,
                width: 1024,
                src:`https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527564/virtual_games/rooms/seraphine/background_s71lfy.png`
            }, 
            clues: {
                lipstick: {
                    name: "Seraphine's Lipstick",
                    desc: '',
                    width: 225,
                    height: 225,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527556/virtual_games/rooms/seraphine/lipstick_zhpyid.png'
                },
            },
            dummy_objects:{
                teddybear: {
                    name: 'Teddy Bear',
                    desc: '',
                    width: 360,
                    height: 540,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/teddybear_owi8x6.png'
                },
                camera: {
                    name: 'Camera',
                    desc: '',
                    width: 500,
                    height: 500,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/camera_tpymff.png'
                },
                jewelrybox: {
                    name: 'Jewelry Box',
                    desc: '',
                    width: 825,
                    height: 590,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/jewelrybox_oi31xq.png'
                }
            }
        }
    },
    // Cooper (Updated V1)
    {
        id: "cooper",
        name: "Cooper", 
        image: "src.png",  
        actions: {
            x: "src.svg",
            talk: "src.svg"
        },
        room: {
            name: "Cooper's Room",
            background: {
                name:"Cooper's Room Background",
                height: 1024,
                width: 1024,
                src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860699/virtual_games/rooms/cooper/background_iqjcqz.png'
            },
            clues: {

            },
            dummy_objects:{
                newspaper: {
                    name: 'Newspaper',
                    desc: 'Pile of newspapers',
                    width: 523,
                    height: 228,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860694/virtual_games/rooms/cooper/newspaper_nikarg.png'
                },
                coffee_machine: {
                    name: 'Coffee Machine',
                    desc: 'Fine-looking coffee machine',
                    width: 341,
                    height: 218,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860694/virtual_games/rooms/cooper/coffeemachine_gcwlqv.png'
                },
                luggage: {
                    name: 'Luggage',
                    desc: "Cooper's Luggage",
                    width: 551,
                    height: 453,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860693/virtual_games/rooms/cooper/luggage_ek0ycq.png'
                },
                spaceID_card: {
                    name: 'Space ID Card',
                    desc: 'Home Station: Earth',
                    width: 608,
                    height: 254,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860693/virtual_games/rooms/cooper/id_ybs5kj.png'
                }
            }
        }
    },
    // Romily (Updated V1)
    {
        id: "romily",
        name: "Romily", 
        image: "src.png",  
        actions: {
            x: "src.svg",
            talk: "src.svg"
        },
        room: {
            name: "Romily's Room",
            background: {
                name:"Romily's Room Background",
                height: 1024,
                width: 1024,
                src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861949/virtual_games/rooms/romily/background_zndzxj.png'
            },
            dummy_objects:{
                basketball: {
                    name: 'Basketball',
                    desc: 'Galaxy Basketball',
                    width: 501,
                    height: 498,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861945/virtual_games/rooms/romily/basketball_yrwg4k.png'
                },
                clothes: {
                    name: 'Clothes',
                    desc: 'Pile of boring clothes',
                    width: 637,
                    height: 392,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861944/virtual_games/rooms/romily/clothes_kig0x8.png'
                },
                towel: {
                    name: 'Blood-stained Towel',
                    desc: "Blood stained towel",
                    width: 612,
                    height: 408,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861943/virtual_games/rooms/romily/towel_wkxqn4.png'
                },
                dumbbell: {
                    name: 'Dumbbells',
                    desc: '30kg dumbbells',
                    width: 428,
                    height: 584,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861944/virtual_games/rooms/romily/dumbbell_prijmb.png'
                },
                punchingbag: {
                    name: 'Punching Bag',
                    desc: '30kg dumbbells',
                    width: 325,
                    height: 483,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861944/virtual_games/rooms/romily/punching-bag_p2d8yl.png'
                }
            }
        }
    },
    // Maan (Updated V1)
    {
        id: "maan",
        name: "Maan", 
        image: "src.png",  
        actions: {
            x: "src.svg",
            talk: "src.svg"
        },
        room: {
            name: "Maan's Room",
            background: {
                name:"Maan's Room Background",
                height: 1024,
                width: 1024,
                src:`https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870723/virtual_games/rooms/maan/background_sbrqpu.png`
            },
            clues: {
                spaceID_card: {
                    name: 'Space ID Card',
                    desc: 'Home Station: Andromeda',
                    width: 485,
                    height: 318,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516227/virtual_games/rooms/doyle/id_yzk534.png'
                },
            },
            dummy_objects:{
                spacesword: {
                    name: 'Space Sword',
                    desc: 'Extra edgy sword',
                    width: 459,
                    height: 544,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870716/virtual_games/rooms/maan/spacesword_bxyqiw.png'
                }
            }
        }
    },
]

export const rooms = [
    // Hallway (To Update)
    {
        id: "hallway",
        name: "Hallway",
        background: {
            name:"Hallway Background",
            height: 1024,
            width: 1024,
            src:`https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681871724/virtual_games/rooms/hallway/hallway-spaceship_afeimt.png`
        },
        clues: {
            portrait: {
                name: 'Portrait of Siblings',
                desc: 'Image of the White Siblings',
                width: 449,
                height: 444,
                src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681871718/virtual_games/rooms/hallway/perspective-sibling-photo_qlwolu.png'
            },
        },
        dummy_objects:{
            spacesword: {
                name: 'Space Sword',
                desc: 'Extra edgy sword',
                width: 459,
                height: 544,
                src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870716/virtual_games/rooms/maan/spacesword_bxyqiw.png'
            }
        }
    },
]

export const scenes = [
    // Group 1 (To Update)
    {
        id: "group1", 
        name: "Group 1",
        // Start Scene
        start: {
            time: "10:00p.m.",  
            context: {
                text: ""
            },
            narrations: [
              {
                id:"",
                text:""
              },
              {
                id:"",
                text:""
              }
            ]
          }
    },

    // Group 2 (To Update)
    {
        id: "group2", 
        name: "Group 2",
        // Start Scene
        start: {
            time: "10:00p.m.",  
            context: {
                text: ""
            },
            narrations: [
              {
                id:"",
                text:""
              },
              {
                id:"",
                text:""
              }
            ]
          }
    },

    // Knight's Death
    {
        id: "knight_death", 
        name: "Knight's Death",
        // Start Scene
        start: {
            time: "8:00p.m.",  
            context: {
                text: "The 7 heroes headed over to the Knight’s room to find out more from the knight."
            },
            narrations: [
                {
                    id:"brand",
                    text:"There is 1 more person on this spaceship whom we have not interrogated, the Knight!"
                },
                {
                    id:"mann",
                    text:"Yes, he is an important person in the spaceship as he holds the master key to Princess White’s room as well."
                },
            ],
            interactions: [
                {
                    scream: {
                        text: " ... ",
                        src: "src"
                    }
                }
            ]
        }, 
        // Knight Room Scene
        knight_room: {
            time: "8:15p.m.",  
            context: {
                text: "Upon reaching the knight’s room, the heroes were shocked by the sight in front of them! Click on items in the room to collect hints.",
                hints: "You have collected all the hints from the knight’s room.",
                end_text: 'The 4 heroes started looking up and down for the lost master key.'
            },
            narration: [
                {
                    id:"seraphine",
                    text:"I looked everywhere, but I can't seem to find knight’s master key."
                },
                {
                    id:"mann",
                    text:"I couldn’t find it too, where can it be?"
                },
                {
                    id:"cooper",
                    text: "Let’s look for it around the spaceship."
                }
            ]
        },
        // Carmen Room Scene
        carmen_room: {
            time: "9:00p.m.",  
            context: {
                text: "NA",
            },
            narration: [
                {
                    id: "seraphine",
                    text:"We found the master key!"
                },
                {
                    id: "cooper",
                    text:"Well, Carmen, this seems suspicious…."
                },
                {
                    id:"mann",
                    text: "Hmm, whose hairpin is that?"
                }
            ]
        }
    },

    // Doctor's Death(To Update)
    {
        id: "doctor_death", 
        name: "Doctor's Death",
        // Start Scene
        start: {
            time: "10:00p.m.",  
            context: {
                text: ""
            },
            narrations: [
                {
                id:"",
                text:""
                },
                {
                id:"",
                text:""
                }
            ]
        }
    },
]

export const transitions = [
    // Prologue
    {
        id: "prologue",
        name: "Prologue",
        bg: "src.png", 
        narrations: [
        {
            id: "",
            text: ""
        },
        {
            id: "",
            text: ""
        },
        {
            id: "",
            text: ""
        }
        ],
        animations: {
            shake:{
                src: "src", 
                text: "..."
            }
        }
    },
    
    // Start
    {
        id: "starting",
        name: "Starting Scene",
        bg: "src.png", 
        narrations: [
        {
            id: "",
            text: ""
        },
        {
            id: "",
            text: ""
        },
        {
            id: "",
            text: ""
        }
        ],
        animations: {
            shake:{
                src: "src", 
                text: "..."
            }
        }
    },

    // Ending
    {
        id: "ending",
        name: "Ending Scene",
        bg: "src.png", 
        narrations: [
        {
            id: "",
            text: ""
        },
        {
            id: "",
            text: ""
        },
        {
            id: "",
            text: ""
        }
        ],
        animations: {
            shake:{
                src: "src", 
                text: "..."
            }
        }
    }
]