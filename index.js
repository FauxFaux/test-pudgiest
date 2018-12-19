require('@snyk/nodejs-runtime-agent')({
    projectId: '8a2be5c4-797f-44d6-afac-4e7394f6aa1b',
    beaconIntervalMs: 2000,
});

const cryptiles = require('cryptiles');

for (var i = 0; i < 10; ++i) {
    setTimeout(() => {
        console.log(cryptiles.randomDigits(5));
    }, i * 1000);
}

