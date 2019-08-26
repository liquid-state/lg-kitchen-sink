const fs = require('fs');
const i18next = require('i18next-conv');

fs.readdir('./locales/', (_, files) => {
    files
        .filter(f => f.indexOf('.po') !== -1)
        .forEach(f => {
            let langName = f.split('.')[0];
            let fullFile = `./locales/${f}`;
            i18next.gettextToI18next(langName, fs.readFileSync(fullFile))
                .then(result => {
                    fs.writeFileSync(`./src/locales/${langName}.json`, result);
                });
        });
});