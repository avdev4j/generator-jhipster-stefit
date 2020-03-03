const constants = require('generator-jhipster/generators/generator-constants');

const MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;

const languagesFiles = {
    en: [
        {
            path: MAIN_SRC_DIR,
            templates: [{ file: 'i18n/en/home.json', method: 'copy', noEjs: true }]
        }
    ]
};

function writeFiles() {
    this.writeFilesToDisk(languagesFiles, this, false);
}

module.exports = {
    writeFiles
};
