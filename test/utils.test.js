const { expect } = require('chai');
const { saveData } = require('../app');


  describe('save function', () => {
    it('should return success to save data locally', () => {
      const result = saveData();
      expect(result).to.equal();
    });
  
  });
