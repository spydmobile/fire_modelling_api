'use strict';


/**
 * provides a list of resources
 *
 * returns Resources
 **/
exports.resourcesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "latitude" : 61.123,
  "name" : "Ignition",
  "id" : 4,
  "startDate" : "{}",
  "longitude" : -111.123
}, {
  "latitude" : 61.123,
  "name" : "Ignition",
  "id" : 4,
  "startDate" : "{}",
  "longitude" : -111.123
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

