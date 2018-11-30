import { injectGlobal } from 'styled-components';
import Avenir from '../docs/font-awesome/webfonts/AvenirLTStd-Roman.otf';
import AvenirMedium from '../docs/font-awesome/webfonts/AvenirLTStd-Medium.otf';
import AvenirHeavy from '../docs/font-awesome/webfonts/AvenirLTStd-Heavy.otf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
@font-face {
  font-family: 'Avenir';
  font-style: normal;
  font-weight: normal;
  src:
    url('${Avenir}') format('opentype');
}
@font-face {
  font-family: 'Avenir-Medium';
  font-style: normal;
  font-weight: normal;
  src:
  url('${AvenirMedium}') format('opentype');
}
@font-face {
  font-family: 'Avenir-Heavy';
  font-style: normal;
  font-weight: normal;
  src:
  url('${AvenirHeavy}') format('opentype');
}
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  span, button, div {
    font-family: Avenir;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Avenir, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
