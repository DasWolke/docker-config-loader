# docker-config-loader #

A extremely basic module to load a different config based on the environment.

# Docs #
Base Usage:
```javascript
var loader = require('docker-config-loader');
var config;
try {
    config = loader({secretName:'prod_config.json',localPath:'./local_config.json'})
} catch(e) {
    //An Error occured, maybe the config was not found or could not be required.
}
```
If a environment var with the name set in `secretName` exists, the loader prefers it over the local path and tries to load it from `/run/secrets/secretName`
##Local Loading
The Path is relative to node_modules.
For Example:
if you got a project structure as follows:
```
- node_modules
- config.json
- src
    - index.js
```
The loader will use the root path of the project, 
so if you want to require the `config.json` you would have to set the following options:
```javascript
loader({secretName:'prod_config.json',localPath:'./config.json'})
```
I hope this module is a nice utility for very basic needs like mine.