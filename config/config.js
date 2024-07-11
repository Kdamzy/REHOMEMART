const path = require('path');
const fs = require('fs');

const env = process.env.NODE_ENV || 'development';
const configPath = path.resolve(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

module.exports = config[env];
