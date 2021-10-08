const os = require("os");

console.log("OS CPU architecture: "+ os.arch());
console.log("Total memory of the system: "+ os.totalmem() / (1024 * 1024 *1024));
console.log("Free memory of the system: "+ os.freemem() / (1024 * 1024 * 1024));
console.log("OS Platform: "+ os.platform());
console.log("Information about the current user: "+os.userInfo().username);