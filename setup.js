import moment from 'moment-timezone';
import config from './config/config';

moment.tz.setDefault(config.timezone);
moment.locale(config.language);
