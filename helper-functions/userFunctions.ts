
import { readFileSync } from 'fs';

exports.UserFunctions = class UserFunctions {
    static generateUUIDV4() {
        return require('uuid').v4()
    }
    static getCurrentDateTime(formatString) {
        const moment = require('moment');
        return moment().format(formatString);
      }
    static getCurrentTimeStamp()
    {
        return Date.now();
    }
    static readFile(filePath, options = {}) {
        const file = readFileSync(filePath, 'utf-8');
        return file.toString()
    }
    static writeFile(filePath, dataToWrite, options = {}) {
        return new Promise((resolve, reject) => {
            require('fs').writeFile(filePath, dataToWrite, options, (err) => {
                if (err) {
                    reject(err) 
                } else {
                    resolve(dataToWrite) 
                }
            })
        })
    }
    static deleteFile(filePath) {
        return new Promise((resolve, reject) => {
            require('fs').unlink(filePath, (err) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(filePath)
                }
            });
        })
    }
}