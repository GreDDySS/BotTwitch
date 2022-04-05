const pc = require("picocolors");
const utils = require("util");

global.feelsdank = {};

// Load Modules

feelsdank.config = require("./other/config");
//feelsdank.Utils = require("./utils");
feelsdank.Logger = require("./utils/winston");
//feelsdank.Modules = require("./modules");
feelsdank.Channel = require("./modules/channel");

// Load Client

feelsdank.Twitch = require("./client/twitch");



// Initializing
async function start() {
    try {
        feelsdank.Twitch;
    } catch (e) {
        feelsdank.Logger.error(`Error encountered during initialization: ${e}`);
    }
};

start();

process
.on('unhandledRejection', async (reason, promise) => {
    return feelsdank.Logger.error(`${pc.red('[UnhandledRejection]')} || ${utils.inspect(promise)} -> ${reason}`);
})
.on('uncaughtException', async (err) => {
    feelsdank.Logger.error(`${pc.red('[UncaughtException]')} || ${err.message}`);
    return process.exit(0);
});