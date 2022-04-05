const {readFileSync} = require("fs");

const file = JSON.parse(readFileSync("./other/channel.json", {encoding: "utf-8"}));

module.exports.getByName = async () => {
    const channel = file.name;

    if (!channel) {
        return undefined;
    }
    return channel
};

module.exports.getById = async () => {
    const channels = file.userID;

    if (!channels) {
        return undefined;
    }
    return channels
};
