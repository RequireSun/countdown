/**
 * Created by kelvinsun on 2016/9/24.
 */
'use strict';

const assert    = require('assert');
const Countdown = require('../index');

describe('countdown', function () {
    describe('normal', function () {
        this.timeout(10000);

        it('The registered function should be emitted after 5 seconds', function (done) {
            let count = 0;
            new Countdown({
                endTime: Date.now() + 5000,
                onTick: () => {
                    ++count;
                },
                onComplete: () => {
                    assert.equal(4, count);
                    done();
                }
            });
        });
    });
});