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
            const targetTime = Date.now() + 5000;
            new Countdown({
                endTime: targetTime,
                onComplete: () => {
                    assert.equal((Math.round((Date.now() - targetTime) / 1000)), 0);
                    done();
                }
            });
        });

        it('The registered function should be emitted 4 times', function (done) {
            let count = 0;
            const targetTime = Date.now() + 5000;
            new Countdown({
                endTime: targetTime,
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

    describe('abort', function () {
        this.timeout(10000);

        it('Callback should be stoped at the third time', function (done) {
            let   count      = 0;
            const targetTime = Date.now() + 5000;
            const cd = new Countdown({
                endTime: targetTime,
                onTick : () => {
                    if (1 < count) {
                        cd.abort();
                    }
                    ++count;
                },
            });

            setTimeout(() => {
                assert.equal(count, 3);
                done();
            }, 5000);
        });
    });

    describe('getRemaining', function () {
        this.timeout(10000);

        it('Remaining should the left time', function (done) {
            const originTime = Date.now();
            const targetTime = originTime + 5000;
            let count = 5;

            const cd = new Countdown({
                endTime: targetTime,
                onTick: () => {
                    assert.equal(--count, Math.round(cd.getRemaining() / 1000));
                },
                onComplete: () => {
                    assert.equal(0, Math.round(cd.getRemaining() / 1000));
                    done();
                }
            });
        });
    });
});