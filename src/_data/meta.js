const curated = [
    { primary: '#484172', secondary: '#c4c4d5' },
    { primary: '#0f7870', secondary: '#09ada2' },
    { primary: '#597a87', secondary: '#e1e2c0' },
    { primary: '#323130', secondary: '#ff9500' },
    { primary: '#e36396', secondary: '#e1d3b9' },
    { primary: '#635151', secondary: '#ac8f87' },
    { primary: '#421a2a', secondary: '#b48598' },
    { primary: '#ce0700', secondary: '#ff6b4e' },
    { primary: '#44273b', secondary: '#fdf3e8' },
    { primary: '#633370', secondary: '#b88690' },
    { primary: '#ff0000', secondary: '#fcc' },
    { primary: '#9a5a7b', secondary: '#d7b2a5' },
    { primary: '#5483a1', secondary: '#524f59' },
    { primary: '#7f122f', secondary: '#2a0003' },
    { primary: '#374e4f', secondary: '#fed3a5' },
    { primary: '#2f392e', secondary: '#e2d1b3' },
    { primary: '#192929', secondary: '#f0f1f3' },
    { primary: '#b52c2d', secondary: '#f5f0f6' },
    { primary: '#a34993', secondary: '#ba5190' },
    { primary: '#0d5160', secondary: '#6dceaa' },
    { primary: '#edb244', secondary: '#fcf6e9' },
    { primary: '#695353', secondary: '#f1efef' },
    { primary: '#cce28e', secondary: '#7ead48' },
    { primary: '#ff3535', secondary: '#30b6ff' },
    { primary: '#5fdc81', secondary: '#f1b8e5' },
    { primary: '#166b55', secondary: '#0ba845' },
    { primary: '#1e7ea8', secondary: '#1d9dc4' },
    { primary: '#4e867b', secondary: '' },
    { primary: '#534899', secondary: '' },
    { primary: '#344363', secondary: '' },
    { primary: '#087b9d', secondary: '#88659d' },
    { primary: '#0fc4c3', secondary: '#6775a8' },
];

module.exports = {
    // NOTE: `process.env.URL` is provided by Netlify, and may need
    // adjusted pending your host
    url: process.env.URL || 'http://localhost:8080',
    language: 'sv',
    siteName: 'Webbutveckling',
    pwaName: 'webbutveckling.jensa.dev',
    primaryColor: curated[30].primary,
    secondaryColor: curated[30].secondary,
    siteDescription:
        'Kurssida för webbutveckling. Tekniker, tillgänglighet och projektarbete.',
    courseIntro:
        'På den här sidan hittar du information och övningar kopplade till ämnet webbutveckling. Här hittar du tekniker du behöver för att kunna skapa webbplatser och webbapplikationer. Här finns även material för att lära dig om rådande praxis.',
    author: {
        name: 'Jens Andreasson',
        email: 'jens.andreasson@ntig.se',
        url: 'https://jensa.dev',
    },
    gtag: 'G-VHBH8777XD'
};
