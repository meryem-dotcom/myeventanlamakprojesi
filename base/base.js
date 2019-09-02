const EventEmitter = require('events');
const os = require('os');
const fs = require('fs');
const path = require('path');



class BaseClass extends EventEmitter {
    constructor() {
        super();
        console.log('constructor çalıştı');
        this.on('mincir', this.calistiLogla);
    }

    calistiLogla(par) {
        const elAn = new Date();
        const yil = elAn.getFullYear();
        const ay = elAn.getMonth() + 1;
        const gun = elAn.getDay();
        let saat = elAn.getHours();
        const dakika = elAn.getMinutes();
        const saniye = elAn.getSeconds();
        const milisaniye = elAn.getMilliseconds();
        const toplamTarih = this.sifirekle(gun) + '.' + this.sifirekle(ay) + '.' + yil + ' ' +this.sifirekle(saat) + ':' + this.sifirekle(dakika) + ':' + this.sifirekle(saniye) + ':' + milisaniye;
        const pathjoin = path.join(__dirname, 'messages.txt');
        console.log(pathjoin);
        console.log('---' + process.cwd());

        const filePathString = path.join(process.cwd(), 'logs/messages.txt');

        console.log('çalıştı ogla çalıştı');
        const message = par + toplamTarih + os.EOL;

        fs.appendFile(filePathString, message, (err) => {
            console.log(err);
        });


        ///home/ati/Belgeler..../eventemmirranlamak/base/message.txt
        //fs.appendFile('message.txt', 'data to append', 'utf8', callback);
    }
    sifirekle(saat) {
    	        if (saat < 10) {
    	            return "0" + saat.toString();
    	        } else {
    	            return saat.toString();
    	        }
    	    }
}
const baseClass = new BaseClass();
module.exports = baseClass;
