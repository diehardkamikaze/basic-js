const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730; // период полураспада = 5730 лет

module.exports = function dateSample(sampleActivity) {
  //sampleAcitivity - активность изотопа в образце 
  //modern activity - активность изотопа современная, т.е ещё до всех этих полураспадов?
  //half-life period - период полураспада
  //каждый распад активность падает в 2 раза
  if (typeof sampleActivity != "string")
    return false;
  var sA = parseFloat(sampleActivity);
  if (!sA || 0 > sA || sA > 15)
    return (false);
  var t = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / t);
};
