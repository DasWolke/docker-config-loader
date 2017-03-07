/**
 * Created by Julian on 07.03.2017.
 */
let path = require("path");
/**
 * @param {object} options - The options object
 * @param {string} options.secretName - The name of the docker secret
 * @param {string} options.localPath - The local path of the config
 * @throws Will throw an Error if the require fails or no options were passed.
 */
function loadConfig(options) {
    if (!options) {
        throw new Error('You can not start this module without providing options!')
    }
    let config;
    if (process.env[options.secretName]) {
        config = require(`/run/secrets/${process.env[options.secretName]}`);
    } else {
        config = require(`../../${path.normalize(options.localPath)}`);
    }
    return config;
}
module.exports = loadConfig;