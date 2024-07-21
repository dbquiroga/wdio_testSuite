const recluitmentPage = require('../pages/recruitment');
const loginPage = require('../pages/login');
const path = require('path');
const fs = require('fs');

describe('Download File', () => {

    it(login , async ()=> {
        browser.url('https://opensource-demo.orangehrmlive.com/')
        loginPage.login('Admin', 'admin123')
        browser.pause(80000)
        browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
        browser.pause(90000)
    })

    it('should download a file ',async () => {
        recluitmentPage.recruitment.downloadButton.click()
        browser.pause(8000)

        // // se define el directorio de descargas y el nombre del archivo esperado
        // const downloadDir = global.downloadDir
        // const expectedFileName = 'resume.pdf'
        // const filePath = path.join(downloadDir, expectedFileName);
        // console.log('file path---',filePath)

        // // browser.call(function (){
        // //     // call our custom function that checks for the file to exist
        // //     return waitForFileExists(filePath, 60000)
        // //   });

        // const fileContents = fs.readFileSync(filePath, 'utf-8')
        // assert.ok(fileContents.includes('JO DENTON'))
    })
});