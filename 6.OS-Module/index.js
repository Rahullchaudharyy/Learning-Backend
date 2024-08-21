import os from 'os';  // Importing the 'os' module to interact with the operating system

// Get information about the CPUs in the system
console.log(os.cpus());
// This returns an array of objects containing information about each CPU/core installed on the system, including model, speed (in MHz), and times (user, nice, sys, idle, irq).

// Get the hostname of the operating system
console.log(os.hostname());
// This returns the hostname of the operating system as a string. The hostname is the name of the computer or server.


// Get the home directory of the current user
console.log(os.homedir());
// This returns the path to the home directory of the current user. It's typically where the user's personal files are stored.

// Get the network interfaces and their details
console.log(os.networkInterfaces());
// This returns an object containing network interfaces that have been assigned a network address. Each interface has an array of objects with details such as the address, family (IPv4/IPv6), and internal status.

// Get the amount of free system memory in bytes
console.log(os.freemem());
// This returns the amount of free system memory in bytes. It's useful for monitoring the system's available resources.

// Get the total amount of system memory in bytes
console.log(os.totalmem());
// This returns the total amount of system memory in bytes. It shows the maximum amount of RAM available to the operating system.
