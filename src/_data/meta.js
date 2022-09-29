/* Låt bli */
const colors = require('nice-color-palettes');

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

const getColorPick = () => {
    try {
        const color = colors[getRandomIntInclusive(0, colors.length - 1)];
        const primary = color.splice(
            getRandomIntInclusive(0, color.length - 1),
            1
        ); // color[getRandomIntInclusive(0, color.length - 1)];
        const secondary = color.splice(
            getRandomIntInclusive(0, color.length - 1),
            1
        );
        return {
            primary: primary[0],
            secondary: secondary[0],
        };
    } catch (e) {
        console.log(e);
        return '#121212';
    }
};

const colorPicks = getColorPick();

module.exports = {
    // NOTE: `process.env.URL` is provided by Netlify, and may need
    // adjusted pending your host
    url: process.env.URL || 'http://localhost:8080',
    language: 'sv',
    siteName: 'Webbutveckling',
    primaryColor: colorPicks.primary, // pick or color string '#ff4e50'
    secondaryColor: colorPicks.secondary, // pick or color string '#ff4e50'
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
