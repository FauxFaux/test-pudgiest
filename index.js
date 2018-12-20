require('@snyk/nodejs-runtime-agent')({
    projectId: '8a2be5c4-797f-44d6-afac-4e7394f6aa1b',
    beaconIntervalMs: 2000,
    snapshotUrl: 'http://no/'
});

const cryptiles = require('cryptiles');
const st = require('st');

for (var i = 0; i < 10; ++i) {
    setTimeout(() => {
        try {
            st.Mount.prototype.getPath();
        } catch (err) {
            console.log(err);
        }
        console.log(cryptiles.randomDigits(5));
    }, i * 1000);
}

