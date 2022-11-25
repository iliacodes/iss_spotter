const { nextISSTimesForMyLocations } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};




nextISSTimesForMyLocations()
  .then((passTimes) => {
    printPassTimes(passTimes)
  })