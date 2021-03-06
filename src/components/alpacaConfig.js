const BACKGROUND_MAP = {
    default: "default",
    blue50: "blue50",
    blue60: "blue60",
    blue70: "blue70",
    darkBlue60: "darkBlue60",
    darkBlue70: "darkBlue70",
    green50: "green50",
    green60: "green60",
    grey40: "grey40",
    grey70: "grey70",
    grey80: "grey80",
    red50: "red50",
    red60: "red60",
    red70: "red70",
    yellow50: "yellow50",
    yellow60: "yellow60",
    yellow70: "yellow70"
};

const ACC_MAP = {
    earings: "earings",
    flower: "flower",
    glasses: "glasses",
    headphone: "headphone"
};

const EARS_MAP = {
    default: "default",
    backwards: "tilt-backward",
    forwards: "tilt-forward"
};

const EYES_MAP = {
    default: "default",
    angry: "angry",
    naughty: "naughty",
    panda: "panda",
    smart: "smart",
    star: "star",
}

const HAIR_MAP = {
    default: "default",
    bang: "bang",
    curls: "curls",
    elegant: "elegant",
    fancy: "fancy",
    quiff: "quiff",
    short: "short"
};

const LEG_MAP = {
    default: "default",
    cookie: "cookie",
    boba: "bubble-tea",
    game: "game-console",
    backwards: "tilt-backward",
    forwards: "tilt-forward"
};

const MOUTH_MAP = {
    default: "default",
    eating: "eating",
    laught: "laugh",
    tounge: "tounge",
    astonished: "astonished"
};

const NECK_MAP = {
    default: "default",
    thick: "thick",
    backwards: "bend-backward",
    forwards: "bend-forwards"
}

export const ATTR_KEY_MAP = {
    background: "backgrounds",
    neck: "neck",
    nose: "nose",
    mouth: "mouth",
    leg: "leg",
    ears: "ears",
    hair: "hair",
    eyes: "eyes",
    accessories: "accessories"
};

export const ATTR_MAP = {
    [ATTR_KEY_MAP.background]: {
        key: "backgrounds",
        text: "bacgrounds",
        values: Object.values(BACKGROUND_MAP)
    },

    [ATTR_KEY_MAP.neck]: {
        key: "neck",
        text: "neck",
        values: Object.values(NECK_MAP)
    },

    [ATTR_KEY_MAP.mouth]: {
        key: "mouth",
        text: "mouth",
        values: Object.values(MOUTH_MAP)
    },

    [ATTR_KEY_MAP.leg]: {
        key: "leg",
        text: "leg",
        values: Object.values(LEG_MAP)
    },

    [ATTR_KEY_MAP.ears]: {
        key: "ears",
        text: "ears",
        values: Object.values(EARS_MAP)
    },

    [ATTR_KEY_MAP.hair]: {
        key: "hair",
        text: "hair",
        value: Object.values(HAIR_MAP)
    },

    [ATTR_KEY_MAP.eyes]: {
        key: "eyes",
        text: "eyes",
        value: Object.values(EYES_MAP)
    },

    [ATTR_KEY_MAP.accessories]: {
        key: "accessories",
        text: "accessories",
        value: Object.value(ACC_MAP)
    }
};

export const ATTRIBUTES = [
    ATTR_KEY_MAP.background,
    ATTR_KEY_MAP.neck,
    ATTR_KEY_MAP.mouth,
    ATTR_KEY_MAP.leg,
    ATTR_KEY_MAP.ears,
    ATTR_KEY_MAP.hair,
    ATTR_KEY_MAP.eyes,
    ATTR_KEY_MAP.accessories
]