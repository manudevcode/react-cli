"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
exports.getCurrentDirectoryBase = () => {
    return path.basename(process.cwd());
};
exports.directoryExists = (filePath) => {
    return fs.existsSync(filePath);
};
exports.createDir = (dirname) => {
    fs.mkdirSync(dirname, { recursive: true });
};
//# sourceMappingURL=index.js.map