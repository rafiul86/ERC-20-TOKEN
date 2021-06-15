const SampleToken = artifacts.require("sampleToken");

module.exports = function(deployer) {
  deployer.deploy(SampleToken , "Serenety Token" , "RHC", 18, 1000000);
};