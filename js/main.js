const pageColors = [
    { fg: "navy", bg: "bg-washed-green" },
    { fg: "light-purple", bg: "bg-light-yellow" },
    { fg: "purple", bg: "bg-light-red" },
    { fg: "dark-blue", bg: "bg-light-green" },
    { fg: "dark-blue", bg: "bg-washed-red" },
    { fg: "light-pink", bg: "bg-navy" }
];
const titleEmojis = ["👋 ", "👨‍💻 ", "🙌 ", "🚀 ", "🎆 ", "🐦 "];
const linkElems = document.querySelectorAll("a");
const pageTitle = document.title;
// save current color object and title emoji for random version
let currentColor = null;
let currentTitleEmoji = null;

// get random Element from Array, used for colors and emojis
const getRandomArraylElement = array => {
    return array[Math.floor(Math.random() * array.length)];
};

const getRandomColor = colors => {
    // if we have a color object set filter that to never have the same color twice
    const filteredColors = colors.filter(color => !Object.is(color, currentColor));
    return getRandomArraylElement(filteredColors)
};

const getRandomEmoji = emojis => {
    // if we have a emoji set filter that to never have the same emoji twice
    const filteredEmojis = emojis.filter(emoji => emoji !== currentTitleEmoji);
    return getRandomArraylElement(filteredEmojis);
}

// select random color classes for body and link elements
const selectTheme = () => {
    currentColor = getRandomColor(pageColors);
    currentTitleEmoji = getRandomEmoji(titleEmojis);
    setTheme();
};

const setTheme = () => {
    document.body.classList.add(currentColor.fg, currentColor.bg);
    for (let element of linkElems) {
        element.classList.add(currentColor.fg);
    }
    document.title = `${currentTitleEmoji} ${pageTitle}`;
}

// reset theme by deleting classes on body and deleting fg color on all links
const resetTheme = () => {
    document.body.className = '';
    for (let element of linkElems) {
        element.classList.remove(currentColor.fg);
    }
}

// get new random styling
const changeColorButton = document.querySelector('button');

changeColorButton.addEventListener('click', () => {
    resetTheme();
    selectTheme();
});

// set random pageColors on pageload
selectTheme();