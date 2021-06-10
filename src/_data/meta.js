const colors = require('nice-color-palettes');

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

// const color = colors[getRandomIntInclusive(0, colors.length)];
// const pick = color[getRandomIntInclusive(0, color.length)];

const getColorPick = () => {
    try {
        const color = colors[getRandomIntInclusive(0, colors.length)];
        const pick = color[getRandomIntInclusive(0, color.length)];
        return pick;
    } catch (e) {
        console.log(e);
        return '#121212';
    }
};

module.exports = {
    // NOTE: `process.env.URL` is provided by Netlify, and may need
    // adjusted pending your host
    url: process.env.URL || 'http://localhost:8080',
    language: 'sv',
    siteName: 'Webbutveckling 1',
    themeColor: getColorPick(), // replace with themeColor: pick, for a random color '#f3722c'
    siteDescription:
        'Kurssida för webbutveckling. HTML, CSS, javascript, tillgänglighet',
    author: {
        name: 'Jens Andreasson',
        email: 'jensandreasson77@gmail.com',
        url: 'https://jensa.xyz'
    }
};
