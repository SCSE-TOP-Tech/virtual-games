// To add JWT Password Authentication 

export const characters = [
    // Brand
    {
        id: "brand",
        name: "Brand", 
        image: "src.png",  
        actions: {
            walk: "src.svg",
            talk: "src.svg"
        },
        room: {
            name: "Brand's Room",
            background: "src.png",
            objects: {
                clues:{
                    galaxy_phone: {
                    desc: 'Brand Galaxy Phone', 
                    time: '9:30pm',
                    msg: 'Hey, I am feeling unwell but I can’t find you at your clinic. Where are you?',
                    src:'src.png'
                    }
                },
                furnitures: {
                    pool_table: 'src.png',
                    wardrobe: 'src.png',
                    dressing_table: 'src.png',
                    door: 'src.png',
                    bed: 'src.png',
                    trophy_rack: 'src.png',
                    dressing_table: 'src.png',
                },
            }
        }
    }, 
    // Carmen
    {
        id: "carmen",
        name: "Carmen", 
        image: "src.png",  
        actions: {
            walk: "src.svg",
            talk: "src.svg"
        },
        room: {
            name: "Carmen's Room",
            background: "src.png",
            objects: {
                clues: {
                    master_key: {
                        desc: 'Seems like the key to the Master Room',
                        src: 'src.png'
                    },
                    invitation_letter: {
                        desc: 'Sent from Planet Earth',
                        src: 'src.png'
                    },
                    clothespin: {
                        desc: 'Oddly familiar clothespin',
                        src: 'src.png'
                    },
                },
                furnitures:{
                    dressing_table: 'src.png',
                    rack: 'src.png',
                    bed: 'src.png',
                    desk: 'src.png'
                }
            }
        }
    },
    // Cooper (To Update)
    {
        id: "cooper",
        name: "Cooper", 
        image: "src.png",  
        actions: {
            walk: "src.svg",
            talk: "src.svg"
        },
        room: {
            name: "Cooper's Room",
            background: "src.png",
            objects: {
                clues: {
                    spaceID_card: {
                        desc: 'Home Station: Earth',
                        src: 'src.png'
                    }
                },
                furnitures:{
                    door: 'src.png',
                    coffee_table: 'src.png',
                    bed: 'src.png',
                    piano: 'src.png',
                    wardrobe: 'src.png',

                },
                dummy_objects:{
                    newspaper: 'src.png',
                    coffee_machine: 'src.png',
                    luggage: 'src.png'
                }
            }
        }
    },
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
                    name: 'Home Station: Andromeda',
                    width: 485,
                    height: 318,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516227/virtual_games/rooms/doyle/id_yzk534.png'
                },
                music_albums: {
                    name: 'Music Albums',
                    width: 485,
                    height: 318,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/album_pbr2bh.png'
                },
                bloodstained_towel: {
                    name: 'Blood-stained Towel',
                    width: 612,
                    height: 408,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/towel_ysje7j.png'
                }
            },
            furnitures:{
                door: 'src.png',
                wardrobe: 'src.png',
                table: 'src.png', 
            },
            dummy_objects:{
                rug: {
                    name: 'Blood-stained Rug',
                    width: 1632,
                    height: 519,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/album_pbr2bh.png'
                },
                clothes: {
                    name: 'Clothes',
                    width: 637,
                    height: 327,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/clothes_ybv5gf.png'
                },
                luggage: {
                    name: 'Luggage',
                    width: 398,
                    height: 627,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/luggage_kwyefl.png'
                }
            }
        }
    },
    // Mann (To Update)
    {
        id: "mann",
        name: "Mann", 
        role: "player",
        image: "src.png",  
        actions: {
            walk: "src.svg",
            talk: "src.svg"
        }
    },
    // Princess White (To Update)
    {
        id: "princesswhite",
        name: "Princess White", 
        image: "src.png",  
        actions: {
            walk: "src.svg",
            talk: "src.svg"
        },
        room:{
            name: "Princess White Room",
            background: {
                name:"Doyle's Room Background",
                height: 1024,
                width: 1024,
                src:`https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680258151/virtual_games/rooms/doyleroombg_zl4tz4.png`
            }
        }
    },
    // Romily (To Update)
    {
        id: "romily",
        name: "Romily", 
        image: "src.png",  
        actions: {
            walk: "src.svg",
            talk: "src.svg"
        }
    },
    // Seraphine (V1)
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
                    width: 225,
                    height: 225,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527556/virtual_games/rooms/seraphine/lipstick_zhpyid.png'
                },
            },
            dummy_objects:{
                teddybear: {
                    name: 'Teddy Bear',
                    width: 360,
                    height: 540,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/teddybear_owi8x6.png'
                },
                camera: {
                    name: 'Camera',
                    width: 500,
                    height: 500,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/camera_tpymff.png'
                },
                jewelrybox: {
                    name: 'Jewelry Box',
                    width: 825,
                    height: 590,
                    src: 'https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/jewelrybox_oi31xq.png'
                }
            }
        }
    },
    // Doctor (To Update)
    {
        id: "doctor",
        name: "Doctor", 
        role: "npc",
        image: "src.png",  
        actions: {
            walk: "src.svg",
            talk: "src.svg"
        }
    },
    // Knight (To Update)
    {
        id: "knight",
        name: "Knight", 
        role: "npc",
        image: "src.png",  
        actions: {
            walk: "src.svg",
            talk: "src.svg"
        },
        room: {
            name: "Knight's Room",
            background: "src.png",
            objects: {
                clues: {
                    lipstick: {
                        desc: 'Lipstick found next to the dead body',
                        src: 'src.png'
                    },
                    space_note: {
                        desc: 'Princess White owes $1,000,000',
                        src: 'src.png'
                    },
                    guest_book: {
                        desc: 'Guest signed in as "Sibling"',
                        src: 'src.png'
                    },
                    photo_albums: {
                        desc: 'Photo albums of each hero (except Seraphine)',
                        src: 'src.png'
                    },
                    broken_watch: {
                        desc: 'Shows 25th Jan (1 day before d-day)',
                        src: 'src.png'
                    },
                    space_guns: {
                        desc: 'Space Guns tagged to each hero (except Seraphine)',
                        src: 'src.png'
                    },
                    dead_knight_shirt: {
                        desc: 'Contains female nail polish',
                        src: 'src.png'
                    },
                    dead_knight: {
                        desc: 'Blood on the floor writing “CW”',
                        src: 'src.png'
                    }
                },
                furnitures:{
                    desk: 'src.png',
                    bed: 'src.png',
                    drawer: 'src.png',
                    door: 'src.png', 
                }
            }
        }
    },
]

export const rooms = [
    // Clinic (To Update)
    {
        id: "clinic",
        name: "Clinic",
        background: "src.png",
        objects: {
            clues:{
                galaxy_phone: {
                    desc: 'Brand Galaxy Phone', 
                    time: '9:30pm',
                    msg: 'Hey, I am feeling unwell but I can’t find you at your clinic. Where are you?',
                    src:'src.png'
                }
            },
            furnitures: {
                pool_table: 'src.png',
                wardrobe: 'src.png',
                dressing_table: 'src.png',
                door: 'src.png',
                bed: 'src.png',
                trophy_rack: 'src.png',
                dressing_table: 'src.png',
            },
        }
    },
    // Control Room (To Update)
    {
        id: "control",
        name: "Control Room",
        background: "src.png",
        objects: {
            clues:{
                galaxy_phone: {
                    desc: 'Brand Galaxy Phone', 
                    time: '9:30pm',
                    msg: 'Hey, I am feeling unwell but I can’t find you at your clinic. Where are you?',
                    src:'src.png'
                }
            },
            furnitures: {
                pool_table: 'src.png',
                wardrobe: 'src.png',
                dressing_table: 'src.png',
                door: 'src.png',
                bed: 'src.png',
                trophy_rack: 'src.png',
                dressing_table: 'src.png',
            },
        }
    },
    // Dressing Room (To Update)
    {
        id: "dressing",
        name: "Dressing Room",
        background: "src.png",
        objects: {
            clues:{
                galaxy_phone: {
                    desc: 'Brand Galaxy Phone', 
                    time: '9:30pm',
                    msg: 'Hey, I am feeling unwell but I can’t find you at your clinic. Where are you?',
                    src:'src.png'
                }
            },
            furnitures: {
                pool_table: 'src.png',
                wardrobe: 'src.png',
                dressing_table: 'src.png',
                door: 'src.png',
                bed: 'src.png',
                trophy_rack: 'src.png',
                dressing_table: 'src.png',
            },
        }
    },
    // Kitchenette (To Update)
    {
        id: "kitchenette",
        name: "Kitchenette",
        background: "src.png",
        objects: {
            clues:{
                galaxy_phone: {
                    desc: 'Brand Galaxy Phone', 
                    time: '9:30pm',
                    msg: 'Hey, I am feeling unwell but I can’t find you at your clinic. Where are you?',
                    src:'src.png'
                }
            },
            furnitures: {
                pool_table: 'src.png',
                wardrobe: 'src.png',
                dressing_table: 'src.png',
                door: 'src.png',
                bed: 'src.png',
                trophy_rack: 'src.png',
                dressing_table: 'src.png',
            },
        }
    },
    // Storage Room (To Update)
    {
        id: "storage",
        name: "Storage Room",
        background: "src.png",
        objects: {
            clues:{
                galaxy_phone: {
                    desc: 'Brand Galaxy Phone', 
                    time: '9:30pm',
                    msg: 'Hey, I am feeling unwell but I can’t find you at your clinic. Where are you?',
                    src:'src.png'
                }
            },
            furnitures: {
                pool_table: 'src.png',
                wardrobe: 'src.png',
                dressing_table: 'src.png',
                door: 'src.png',
                bed: 'src.png',
                trophy_rack: 'src.png',
                dressing_table: 'src.png',
            },
        }
    }
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