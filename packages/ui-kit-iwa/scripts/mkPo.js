const fs = require('fs');
const i18next = require('i18next-conv');

fs.readdir('./src/locales/', (_, files) => {
    files
        .filter(f => f.indexOf('.json') !== -1)
        .forEach(f => {
            let langName = f.split('.')[0];
            let fullFile = `./src/locales/${f}`;
            i18next.i18nextToPo(langName, fs.readFileSync(fullFile))
                .then(result => {
                    fs.writeFileSync(`./locales/${langName}.po`, result);
                });
        });
});