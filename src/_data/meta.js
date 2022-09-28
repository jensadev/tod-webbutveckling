/* Låt bli */
const colors = require('nice-color-palettes');

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

const getColorPick = () => {
    try {
        const color = colors[getRandomIntInclusive(0, colors.length - 1)];
        const pick = color[getRandomIntInclusive(0, color.length - 1)];
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
    siteName: 'Webbutveckling',
    themeColor: getColorPick(), // replace with themeColor: pick, for a random color '#f3722c'
    siteDescription:
        'Kurssida för webbutveckling. Tekniker, tillgänglighet och projektarbete.',
    courseIntro:
        'På den här sidan hittar du information och övningar kopplade till ämnet webbutveckling. Här hittar du tekniker du behöver för att kunna skapa webbplatser och webbapplikationer. Här finns även material för att lära dig om rådande praxis.',
    author: {
        name: 'Jens Andreasson',
        email: 'jens.andreasson@ntig.se',
        url: 'https://jensa.xyz',
    },
};
