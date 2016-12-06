/**
 * Created by kelvinsun on 2016/9/24.
 */
'use strict';

class Countdown {
    constructor ({ endTime, onTick, onComplete }) {
        this.endTime  = endTime;
        this.interval = 0;

        const tick = () => {
            if (Date.now() >= this.endTime) {
                clearInterval(this.interval);
                this.interval = 0;
                ('function' === typeof onComplete) && onComplete();
            } else {
                ('function' === typeof onTick) && onTick(endTime - Date.now());
            }
        };

        if (Date.now() < endTime) {
            this.interval = setInterval(tick, 1000);
        }
    }

    abort () {
        if (!!this.interval) {
            clearInterval(this.interval);
            this.interval = 0;
        }
    }

    getRemaining () {
        return this.endTime && this.endTime > Date.now() ? this.endTime - Date.now() : 0;
    }
}

module.exports = Countdown;