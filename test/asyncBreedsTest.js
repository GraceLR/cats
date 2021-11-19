

const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {

    it('returns breed details for the Bombay breed', (done) => {
        const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
        breedDetailsFromFile('Bombay', (input) => {
            assert.equal(expectedDesc, input);
            done();
        });
      });

      it('provides, via callback, undefined for a breed that does not exist', (done) => {
        breedDetailsFromFile('Saphire', (input) => {
          assert.equal(undefined, input); 
          done();
        });      
      });

});