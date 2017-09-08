const cheeses = require('../data/cheeses');

/**
 * @module Chesses
 */

module.exports = {
    /**
     * getAll
     * Returnerer et JSON objekt med alle oste
     * @param {string} varenr - varenummeret på en ost
     * @returns {Object}
     */
    'getAll': () => cheeses,

    'getOne': (varenr) => {
        let currentCheese = null;
        cheeses.forEach((cheese) => {
            if (cheese.varenr == varenr){
                currentCheese = JSON.stringify(cheese);
            }
        });
        if (currentCheese != null) {
            return currentCheese;
        } else {
           return {
               "code": "ResourceNotFound", 
               "message": varenr + 'does not exits'
         }; 
        }
    }
};