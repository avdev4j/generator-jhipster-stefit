const constants = require('generator-jhipster/generators/generator-constants');

const MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;
const REACT_DIR = constants.REACT_DIR;

const clientFiles = {
    image: [
        {
            path: MAIN_SRC_DIR,
            templates: [{ file: 'content/images/logo-stefit.jpg', method: 'copy' }, { file: 'content/images/logo-stefit.png', method: 'copy' }]
        }
    ],
    reactMain: [
        {
            path: REACT_DIR,
            templates: [{ file: 'modules/home/home.tsx', method: 'processJsx' }]
        }
    ],
    reactShared: [
        {
            path: REACT_DIR,
            templates: [
                // layouts
                { file: 'shared/layout/header/header-components.tsx', method: 'processJsx' }
            ]
        }
    ]
};

function writeFiles() {
    this.writeFilesToDisk(clientFiles, this, false, 'react');
}

module.exports = {
    writeFiles
};
