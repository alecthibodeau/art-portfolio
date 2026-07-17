/* Config */
import config from '../config.json';

/* Helpers */
import formatText from '../helpers/format-text';

const navigationLinks: { [key: string]: string } = {
  urlBaisleyPond: 'https://www.google.com/maps/place/Baisley+Pond/@40.677953,-73.7869538,17z/data=!3m1!4b1!4m5!3m4!1s0x89c266d07157d2a5:0x8aa3e097629e2bfb!8m2!3d40.6760745!4d-73.7853252',
  urlEpochTravelers: formatText.formatDashCase(config.textEpochTravelers),
  urlHuetown: 'https://huetown.com',
  urlLefFoundation: 'https://lef-foundation.org',
  urlLikeNoUdder: 'https://like-no-udder.com',
  urlPercentForArt: 'https://www1.nyc.gov/site/dclapercentforart/projects/projects-detail.page?recordID=241',
  urlPs360Q: 'https://www.google.com/maps/place/P.S.+360Q/@40.7019531,-73.7578773,18z/data=!4m13!1m7!3m6!1s0x89c26145f6828d65:0x16ff1276a0fbebb4!2sSt.+Albans,+Queens,+NY!3b1!8m2!3d40.6894086!4d-73.7654367!3m4!1s0x0:0xba787b86bdebd9f9!8m2!3d40.7023517!4d-73.7563833',
};

export default navigationLinks;
