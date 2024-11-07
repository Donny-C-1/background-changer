const dns = require("dns");

// ! dns = require("dns").promises

function checkConnection(resolve, reject) {
  dns.lookup("google.com", (err, address, ipType) => {
    if (err) {
      reject(err);
      return;
    }
    resolve({ address, ipType });
  });
}

function isConnected() {
  return new Promise(checkConnection);
}

module.exports = isConnected;
