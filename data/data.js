// To add JWT Password Authentication

export const characters = [
  // Doyle (Updated V1)
  {
    stateID: "doyle",
    name: "Doyle",
    image: "src.png",
    actions: {
      move: {
        name: "Doyle moves.",
        height: 300,
        wstateIDth: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756676/virtual_games/characters/movement/doyleMoving_rdhhi2.gif",
      },
    },
    room: {
      name: "Doyle's Room",
      background: {
        name: "Doyle's Room Background",
        height: 1024,
        wstateIDth: 1024,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516074/virtual_games/rooms/doyle/doyleroombg_eocjy8.png`,
      },
      clues: {
        spaceID_card: {
          name: "Space ID Card",
          desc: "Home Station: Andromeda",
          wstateIDth: 485,
          height: 318,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516227/virtual_games/rooms/doyle/stateID_yzk534.png",
        },
        music_albums: {
          name: "Music Albums",
          desc: "Music Albums belonging to...",
          wstateIDth: 485,
          height: 318,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/album_pbr2bh.png",
        },
        bloodstained_towel: {
          name: "Blood-stained Towel",
          desc: "Towel stained with blood",
          wstateIDth: 612,
          height: 408,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/towel_ysje7j.png",
        },
      },
      dummy_objects: {
        rug: {
          name: "Blood-stained Rug",
          desc: "Music Albums belonging to...",
          wstateIDth: 1632,
          height: 519,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/album_pbr2bh.png",
        },
        clothes: {
          name: "Clothes",
          desc: "Music Albums belonging to...",
          wstateIDth: 637,
          height: 327,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/clothes_ybv5gf.png",
        },
        luggage: {
          name: "Luggage",
          desc: "Music Albums belonging to...",
          wstateIDth: 398,
          height: 627,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516228/virtual_games/rooms/doyle/luggage_kwyefl.png",
        },
      },
    },
  },
  // Carmen (Updated V1)
  {
    stateID: "carmen",
    name: "Carmen",
    image: "src.png",
    actions: {
      move: {
        name: "Carmen moves.",
        height: 300,
        wstateIDth: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756674/virtual_games/characters/movement/camenMoving_ij1zy2.gif",
      },
    },
    room: {
      name: "Carmen's Room",
      background: {
        name: "Carmen's Room Background",
        height: 1024,
        wstateIDth: 1024,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853525/virtual_games/rooms/carmen/carmenbg_nk8x4n.png",
      },
      clues: {
        master_key: {
          name: "Master Key",
          desc: "Seems like the key to the Master Room",
          wstateIDth: 348,
          height: 306,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853516/virtual_games/rooms/carmen/master-key_uunebr.png",
        },
        mail: {
          name: "Invitation Letter",
          desc: "Sent from Planet Earth",
          wstateIDth: 348,
          height: 306,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853517/virtual_games/rooms/carmen/mail_ks6fyi.png",
        },
      },
      dummy_objects: {
        clothespin: {
          name: "Clothespin",
          desc: "Oddly familiar clothespin",
          wstateIDth: 230,
          height: 219,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680853516/virtual_games/rooms/carmen/clothspin_hzfkhg.png",
        },
      },
    },
  },
  // Seraphine (Updated V1)
  {
    stateID: "seraphine",
    name: "Seraphine",
    image: "src.png",
    actions: {
      move: {
        name: "Seraphine moves.",
        height: 300,
        wstateIDth: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756675/virtual_games/characters/movement/seraphineMoving_axmd0i.gif",
      },
    },
    room: {
      name: "Seraphine Room",
      background: {
        name: "Seraphine's Room Background",
        height: 1024,
        wstateIDth: 1024,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527564/virtual_games/rooms/seraphine/background_s71lfy.png`,
      },
      clues: {
        lipstick: {
          name: "Seraphine's Lipstick",
          desc: "",
          wstateIDth: 225,
          height: 225,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527556/virtual_games/rooms/seraphine/lipstick_zhpystateID.png",
        },
      },
      dummy_objects: {
        teddybear: {
          name: "Teddy Bear",
          desc: "",
          wstateIDth: 360,
          height: 540,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/teddybear_owi8x6.png",
        },
        camera: {
          name: "Camera",
          desc: "",
          wstateIDth: 500,
          height: 500,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/camera_tpymff.png",
        },
        jewelrybox: {
          name: "Jewelry Box",
          desc: "",
          wstateIDth: 825,
          height: 590,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680527557/virtual_games/rooms/seraphine/jewelrybox_oi31xq.png",
        },
      },
    },
  },
  // Cooper (Updated V1)
  {
    stateID: "cooper",
    name: "Cooper",
    image: "src.png",
    actions: {
      move: {
        name: "Cooper moves.",
        height: 300,
        wstateIDth: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756669/virtual_games/characters/movement/cooperMoving_bd2mcd.gif",
      },
      kill: {
        name: "Cooper kills.",
        height: 300,
        wstateIDth: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756229/virtual_games/characters/actions/cooperKill_i0w3x3.gif",
      },
    },
    room: {
      name: "Cooper's Room",
      background: {
        name: "Cooper's Room Background",
        height: 1024,
        wstateIDth: 1024,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860699/virtual_games/rooms/cooper/background_iqjcqz.png",
      },
      clues: {},
      dummy_objects: {
        newspaper: {
          name: "Newspaper",
          desc: "Pile of newspapers",
          wstateIDth: 523,
          height: 228,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860694/virtual_games/rooms/cooper/newspaper_nikarg.png",
        },
        coffee_machine: {
          name: "Coffee Machine",
          desc: "Fine-looking coffee machine",
          wstateIDth: 341,
          height: 218,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860694/virtual_games/rooms/cooper/coffeemachine_gcwlqv.png",
        },
        luggage: {
          name: "Luggage",
          desc: "Cooper's Luggage",
          wstateIDth: 551,
          height: 453,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860693/virtual_games/rooms/cooper/luggage_ek0ycq.png",
        },
        spaceID_card: {
          name: "Space ID Card",
          desc: "Home Station: Earth",
          wstateIDth: 608,
          height: 254,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680860693/virtual_games/rooms/cooper/stateID_ybs5kj.png",
        },
      },
    },
  },
  // Romily (Updated V1)
  {
    stateID: "romily",
    name: "Romily",
    image: "src.png",
    actions: {
      move: {
        name: "Romily moves.",
        height: 300,
        wstateIDth: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756676/virtual_games/characters/movement/romillyMoving_qkypcz.gif",
      },
    },
    room: {
      name: "Romily's Room",
      background: {
        name: "Romily's Room Background",
        height: 1024,
        wstateIDth: 1024,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861949/virtual_games/rooms/romily/background_zndzxj.png",
      },
      dummy_objects: {
        basketball: {
          name: "Basketball",
          desc: "Galaxy Basketball",
          wstateIDth: 501,
          height: 498,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861945/virtual_games/rooms/romily/basketball_yrwg4k.png",
        },
        clothes: {
          name: "Clothes",
          desc: "Pile of boring clothes",
          wstateIDth: 637,
          height: 392,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861944/virtual_games/rooms/romily/clothes_kig0x8.png",
        },
        towel: {
          name: "Blood-stained Towel",
          desc: "Blood stained towel",
          wstateIDth: 612,
          height: 408,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861943/virtual_games/rooms/romily/towel_wkxqn4.png",
        },
        dumbbell: {
          name: "Dumbbells",
          desc: "30kg dumbbells",
          wstateIDth: 428,
          height: 584,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861944/virtual_games/rooms/romily/dumbbell_prijmb.png",
        },
        punchingbag: {
          name: "Punching Bag",
          desc: "30kg dumbbells",
          wstateIDth: 325,
          height: 483,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680861944/virtual_games/rooms/romily/punching-bag_p2d8yl.png",
        },
      },
    },
  },
  // Maan (Updated V1)
  {
    stateID: "maan",
    name: "Maan",
    image: "src.png",
    actions: {
      move: {
        name: "Maan moves.",
        height: 300,
        wstateIDth: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756676/virtual_games/characters/movement/mannMoving_el5wuc.gif",
      },
    },
    room: {
      name: "Maan's Room",
      background: {
        name: "Maan's Room Background",
        height: 1024,
        wstateIDth: 1024,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870723/virtual_games/rooms/maan/background_sbrqpu.png`,
      },
      clues: {
        spaceID_card: {
          name: "Space ID Card",
          desc: "Home Station: Andromeda",
          wstateIDth: 485,
          height: 318,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516227/virtual_games/rooms/doyle/stateID_yzk534.png",
        },
      },
      dummy_objects: {
        spacesword: {
          name: "Space Sword",
          desc: "Extra edgy sword",
          wstateIDth: 459,
          height: 544,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870716/virtual_games/rooms/maan/spacesword_bxyqiw.png",
        },
      },
    },
  },
  // Brand (Updated V1)
  {
    stateID: "brand",
    name: "Brand",
    image: "src.png",
    actions: {
      move: {
        name: "Brand moves.",
        height: 300,
        wstateIDth: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756675/virtual_games/characters/movement/brandMoving_usbnrh.gif",
      },
    },
    room: {
      name: "Brand's Room",
      background: {
        name: "Brand's Room Background",
        height: 1024,
        wstateIDth: 1024,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684157090/virtual_games/rooms/brand/brandbg_lq1ogi.png`,
      },
      clues: {
        galaxy_phone: {
          name: "Galaxy Phone",
          desc: "Galaxy Phone",
          wstateIDth: 1024,
          height: 1024,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684157088/virtual_games/rooms/brand/galaxy-phone_xvefqp.png",
        },
      },
    },
  },
  // Knight (Updated V1)
  {
    stateID: "knight",
    name: "Knight",
    image: "src.png",
    actions: {
      move: {
        name: "Knight moves.",
        height: 300,
        wstateIDth: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756676/virtual_games/characters/movement/knightMoving_ojyv3i.gif",
      },
    },
    room: {
      name: "Knight's Room",
      background: {
        name: "Maan's Room Background",
        height: 1024,
        wstateIDth: 1024,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870723/virtual_games/rooms/maan/background_sbrqpu.png`,
      },
      clues: {
        spaceID_card: {
          name: "Space ID Card",
          desc: "Home Station: Andromeda",
          wstateIDth: 485,
          height: 318,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1680516227/virtual_games/rooms/doyle/stateID_yzk534.png",
        },
      },
      dummy_objects: {
        spacesword: {
          name: "Space Sword",
          desc: "Extra edgy sword",
          wstateIDth: 459,
          height: 544,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870716/virtual_games/rooms/maan/spacesword_bxyqiw.png",
        },
      },
    },
  },
  // Princess White (Updated V1)
  {
    stateID: "princess_white",
    name: "Princess White",
    image: "src.png",
    actions: {
      move: {
        name: "Princess White moves.",
        height: 300,
        wstateIDth: 300,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686756676/virtual_games/characters/movement/princessMoving_o75czo.gif",
      },
    },
    room: {
      name: "Princess White's Room",
      background: {
        name: "Princess White's Room Background",
        height: 952,
        wstateIDth: 952,
        src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684160197/virtual_games/rooms/princesswhite/background_ytuxli.png`,
      },
      clues: {
        map: {
          name: "Map of Infinity Stones",
          desc: "Map of the Infinity Stones",
          wstateIDth: 605,
          height: 575,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684160196/virtual_games/rooms/princesswhite/infinity-stones-map_ho4saw.png",
        },
        safe: {
          name: "Empty Safe",
          desc: "Safe that had been stolen from!",
          wstateIDth: 276,
          height: 210,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684160196/virtual_games/rooms/princesswhite/empty-safe_zzcxjz.png",
        },
      },
      dummy_objects: {
        door: {
          name: "Door",
          desc: "Just an ordinary door",
          wstateIDth: 86,
          height: 493,
          src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684160195/virtual_games/rooms/princesswhite/connecting-door_jjo8al.png",
        },
      },
    },
  },
];

export const rooms = [
  // Hallway (Updated V1)
  {
    stateID: "hallway",
    name: "Hallway",
    background: {
      name: "Hallway Background",
      height: 1024,
      wstateIDth: 1024,
      src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681871724/virtual_games/rooms/hallway/hallway-spaceship_afeimt.png`,
    },
    clues: {
      portrait: {
        name: "Portrait of Siblings",
        desc: "Image of the White Siblings",
        wstateIDth: 449,
        height: 444,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681871718/virtual_games/rooms/hallway/perspective-sibling-photo_qlwolu.png",
      },
    },
    dummy_objects: {
      spacesword: {
        name: "Space Sword",
        desc: "Extra edgy sword",
        wstateIDth: 459,
        height: 544,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1681870716/virtual_games/rooms/maan/spacesword_bxyqiw.png",
      },
    },
  },

  // Captain Room (Updated V1)
  {
    stateID: "captain",
    name: "Captain's Room",
    background: {
      name: "Captain Room's Background",
      height: 952,
      wstateIDth: 952,
      src: `https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158382/virtual_games/rooms/captain/background_pvyaxb.png`,
    },
    clues: {
      music_albums: {
        name: "Music Albums",
        desc: "Music Albums",
        wstateIDth: 618,
        height: 404,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158381/virtual_games/rooms/captain/musicalbums_rc95qi.png",
      },
      guestbook: {
        name: "Guest Book",
        desc: "Guest Book of the Event",
        wstateIDth: 690,
        height: 361,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158380/virtual_games/rooms/captain/guestbook_l1nqfu.png",
      },
      note: {
        name: "Debt Note",
        desc: "Debt Note of Princess White oweing 500,000 gold",
        wstateIDth: 771,
        height: 324,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158381/virtual_games/rooms/captain/note_zjinls.png",
      },
      lipstick: {
        name: "Lipstick",
        desc: "Lipstick",
        wstateIDth: 225,
        height: 225,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158380/virtual_games/rooms/captain/lipstick_upwiwx.png",
      },
      blood_letter: {
        name: "Bloody Letters",
        desc: "C and W written in blood",
        wstateIDth: 332,
        height: 208,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158380/virtual_games/rooms/captain/bloodletter_ykqiff.png",
      },
      broken_watch: {
        name: "Broken Watch",
        desc: "Broken Watch stopped at xx.xxpm",
        wstateIDth: 500,
        height: 500,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158380/virtual_games/rooms/captain/brokenwatch_qm3oec.png",
      },
      spaceguns: {
        name: "Space Guns",
        desc: "Space Guns",
        wstateIDth: 600,
        height: 416,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684158381/virtual_games/rooms/captain/spaceguns_doavma.png",
      },
    },
  },

  // Clinic (Updated V1)
  {
    stateID: "clinic",
    name: "Clinic",
    background: {
      name: "Clinic Background",
      height: 1024,
      wstateIDth: 1024,
      src: "",
    },
    npc: {
      doctor: {
        name: "Doctor",
        desc: "The doctor of the ship",
        wstateIDth: 493,
        height: 506,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684159430/virtual_games/rooms/clinic/doctor_gtqzu6.png",
      },
    },
  },

  // Dressing Room (Updated V1)
  {
    stateID: "dressing_room",
    name: "Dressing Room",
    background: {
      name: "Dressing Room Background",
      height: 1024,
      wstateIDth: 1024,
      src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684159872/virtual_games/rooms/dressing/background_h2vgb5.png",
    },
    clues: {
      lipstick: {
        name: "Lipstick",
        desc: "Lipstick",
        wstateIDth: 225,
        height: 225,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1684159870/virtual_games/rooms/dressing/lipstick_wx9myl.png",
      },
    },
  },

  // Control Room (Updated V1)
  {
    stateID: "control_room",
    name: "Control Room",
    background: {
      name: "Control Room Background",
      height: 1024,
      wstateIDth: 1024,
      src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754178/virtual_games/rooms/control/background_zze5kw.png",
    },
    dummy_objects: {
      computer: {
        name: "Space Computer",
        desc: "Space Computer",
        wstateIDth: 113,
        height: 78,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754177/virtual_games/rooms/control/security-computer_tbe11m.png",
      },
    },
  },

  // Kitchen (Updated V1)
  {
    stateID: "kitchen",
    name: "Kitchen",
    background: {
      name: "Kitchen Background",
      height: 1024,
      wstateIDth: 1024,
      src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754638/virtual_games/rooms/kitchen/background_xzed8m.png",
    },
    clues: {
      apron: {
        name: "Blood Stained Apron",
        desc: "Apron with bloody marks, I wonder what happened...?",
        wstateIDth: 390,
        height: 280,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754637/virtual_games/rooms/kitchen/blood-stained-apron_sxqgkx.png",
      },
      knife: {
        name: "Blood Stained Knife",
        desc: "What blood could this be.., maybe I'm just thinking too much...",
        wstateIDth: 612,
        height: 408,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754636/virtual_games/rooms/kitchen/blood-stained-knife_haxjwc.png",
      },
      meat: {
        name: "Blood Stained Meat",
        desc: "Poor cows...",
        wstateIDth: 246,
        height: 205,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754636/virtual_games/rooms/kitchen/blood-stained-meat_r3tsx2.png",
      },
    },
  },

  // Storage Room (Updated V1)
  {
    stateID: "storage_room",
    name: "Storage Room",
    background: {
      name: "Storage Room Background",
      height: 952,
      wstateIDth: 952,
      src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754969/virtual_games/rooms/storage/background_notct1.png",
    },
    clues: {
      tesseract: {
        name: "Tesseract",
        desc: "Woah! It's the Tesseract that Princess White has been looking for!",
        wstateIDth: 275,
        height: 183,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754968/virtual_games/rooms/storage/tesseract_offmfd.png",
      },
      doctorphone: {
        name: "Doctor Phone",
        desc: "This is the doctor's phone! Let's take a look.",
        wstateIDth: 666,
        height: 375,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754967/virtual_games/rooms/storage/doctor-phone_chdhui.png",
      },
      blood_clothpin: {
        name: "Blood Stained Clothpin",
        desc: "Wait... this is rather familiar..?",
        wstateIDth: 230,
        height: 219,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754967/virtual_games/rooms/storage/blood-stained-clothspin_p6wpjh.png",
      },
      cloth: {
        name: "Black Cloth",
        desc: "Just an ordinary cloth, or is it?",
        wstateIDth: 300,
        height: 249,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754967/virtual_games/rooms/storage/cloth_xwxxb4.png",
      },
    },
    dummy_objects: {
      screwdriver: {
        name: "Screwdriver",
        desc: "Could be useful, I wonder what its for",
        wstateIDth: 556,
        height: 448,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754968/virtual_games/rooms/storage/screwdriver_ay4app.png",
      },
      mopbucket: {
        name: "Mop and Bucket",
        desc: "Its a mop and bucket, what are you expecting.",
        wstateIDth: 360,
        height: 493,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754967/virtual_games/rooms/storage/mop-bucket_eolt4b.png",
      },
    },
    npc: {
      dead_doctor: {
        name: "Dead Doctor",
        desc: "Holy Crap, what happened to him!",
        wstateIDth: 474,
        height: 526,
        src: "https://res.cloudinary.com/dbkuv7xiw/image/upload/v1686754968/virtual_games/rooms/storage/dead-doctor_xhebpv.png",
      },
    },
  },
];

export const scenes = [
  // Group 1 (To Update)
  {
    stateID: "group1",
    name: "Group 1",
    // Start Scene
    start: {
      time: "10:00p.m.",
      context: {
        text: "",
      },
      narrations: [
        {
          stateID: "",
          text: "",
        },
        {
          stateID: "",
          text: "",
        },
      ],
    },
  },

  // Group 2 (To Update)
  {
    stateID: "group2",
    name: "Group 2",
    // Start Scene
    start: {
      time: "10:00p.m.",
      context: {
        text: "",
      },
      narrations: [
        {
          stateID: "",
          text: "",
        },
        {
          stateID: "",
          text: "",
        },
      ],
    },
  },

  // Knight's Death
  {
    stateID: "knight_death",
    name: "Knight's Death",
    // Start Scene
    start: {
      time: "8:00p.m.",
      context: {
        text: "The 7 heroes headed over to the Knight’s room to find out more from the knight.",
      },
      narrations: [
        {
          stateID: "brand",
          text: "There is 1 more person on this spaceship whom we have not interrogated, the Knight!",
        },
        {
          stateID: "mann",
          text: "Yes, he is an important person in the spaceship as he holds the master key to Princess White’s room as well.",
        },
      ],
      interactions: [
        {
          scream: {
            text: " ... ",
            src: "src",
          },
        },
      ],
    },
    // Knight Room Scene
    knight_room: {
      time: "8:15p.m.",
      context: {
        text: "Upon reaching the knight’s room, the heroes were shocked by the sight in front of them! Click on items in the room to collect hints.",
        hints: "You have collected all the hints from the knight’s room.",
        end_text:
          "The 4 heroes started looking up and down for the lost master key.",
      },
      narration: [
        {
          stateID: "seraphine",
          text: "I looked everywhere, but I can't seem to find knight’s master key.",
        },
        {
          stateID: "mann",
          text: "I couldn’t find it too, where can it be?",
        },
        {
          stateID: "cooper",
          text: "Let’s look for it around the spaceship.",
        },
      ],
    },
    // Carmen Room Scene
    carmen_room: {
      time: "9:00p.m.",
      context: {
        text: "NA",
      },
      narration: [
        {
          stateID: "seraphine",
          text: "We found the master key!",
        },
        {
          stateID: "cooper",
          text: "Well, Carmen, this seems suspicious….",
        },
        {
          stateID: "mann",
          text: "Hmm, whose hairpin is that?",
        },
      ],
    },
  },

  // Doctor's Death(To Update)
  {
    stateID: "doctor_death",
    name: "Doctor's Death",
    // Start Scene
    start: {
      time: "10:00p.m.",
      context: {
        text: "",
      },
      narrations: [
        {
          stateID: "",
          text: "",
        },
        {
          stateID: "",
          text: "",
        },
      ],
    },
  },
];

export const transitions = [
  // Prologue
  {
    stateID: "prologue",
    name: "Prologue",
    bg: "src.png",
    narrations: [
      {
        stateID: "",
        text: "",
      },
      {
        stateID: "",
        text: "",
      },
      {
        stateID: "",
        text: "",
      },
    ],
    animations: {
      shake: {
        src: "src",
        text: "...",
      },
    },
  },

  // Start
  {
    stateID: "starting",
    name: "Starting Scene",
    bg: "src.png",
    narrations: [
      {
        stateID: "",
        text: "",
      },
      {
        stateID: "",
        text: "",
      },
      {
        stateID: "",
        text: "",
      },
    ],
    animations: {
      shake: {
        src: "src",
        text: "...",
      },
    },
  },

  // Ending
  {
    stateID: "ending",
    name: "Ending Scene",
    bg: "src.png",
    narrations: [
      {
        stateID: "",
        text: "",
      },
      {
        stateID: "",
        text: "",
      },
      {
        stateID: "",
        text: "",
      },
    ],
    animations: {
      shake: {
        src: "src",
        text: "...",
      },
    },
  },
];

export const states = [
  {
    stateID: 1,
    name: "introduction",
    currentTime: new Date("2023-01-01T19:00:00Z"),
  },
  {
    stateID: 2,
    name: "investigation",
    currentTime: new Date("2023-01-01T19:30:00Z"),
  },
  {
    stateID: 3,
    name: "captain",
    currentTime: new Date("2023-01-01T20:00:00Z"),
  },
  {
    stateID: 4,
    name: "suspicions",
    currentTime: new Date("2023-01-01T21:00:00Z"),
  },
  {
    stateID: 5,
    name: "deaddoctor",
    currentTime: new Date("2023-01-01T22:00:00Z"),
  },
  {
    stateID: 6,
    name: "confrontation",
    currentTime: new Date("2023-01-01T22:30:00Z"),
  },
  {
    stateID: 7,
    name: "guess",
    currentTime: new Date("2023-01-01T23:00:00Z"),
  },
  {
    stateID: 8,
    name: "ending",
    currentTime: new Date("2023-01-02T00:00:00Z"),
  },
];
