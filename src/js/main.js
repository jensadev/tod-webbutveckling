import data from '../json/tod.json';
import { consent as consentPopup } from './consent';
import { feedback } from './feedback';
import { installSW } from './install';
import { menu } from './menu';
import { siteSearch } from './search';
import { setup } from './setup';

window.addEventListener('load', () => {
    siteSearch();
    const consent = localStorage.getItem('consent');
    if (!consent && consent !== 'false') {
        consentPopup(
            `Den här webbplatsen använder Google Analytics för att spara information om ditt besök. 
            Dina uppgifter och anteckningar sparas lokalt i din webbläsare.`,
            `Ok`
        );
    }
    feedback();
    installSW();
    menu();
    setup(data, consent);
});
