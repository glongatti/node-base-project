import esCl from './escl';
import ptBr from './ptbr';

function getLanguage(language) {
  switch (language) {
    case 'es-cl': return esCl;
    default: return ptBr;
  }
}

export default {
  getLanguage,
};
