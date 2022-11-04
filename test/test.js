const config=require("../config");
var assert = require('assert');

describe('Configuration', function () {
  describe('#Validating test configuration', function () {
    it('Since this is a test the configuration should be set to test mode', function () {
        
        CONFIG=config.init();
        CONFIG.cluster;
        if (process.env.NODE_ENV=="test"){
          assert.strictEqual(CONFIG.cluster,false);
          assert.strictEqual(CONFIG.port,8000);
        }
        
    });
  });
});
