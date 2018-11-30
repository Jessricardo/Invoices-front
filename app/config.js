import configDev from './config.development';
import configStaging from './config.production';
import configProd from './config.production';

let config; //eslint-disable-line
switch (process.env.NODE_ENV) {
  case 'development':
    config = configDev;
    break;
  case 'staging':
    config = configStaging;
    break;
  case 'production':
    config = configProd;
    break;
  default:
    config = configDev;
    break;
}

export default config; // eslint-disable-line
