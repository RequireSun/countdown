# countdown

[![Build Status](https://travis-ci.org/RequireSun/countdown.svg?branch=master)](https://travis-ci.org/RequireSun/countdown)
[![Coverage Status](https://coveralls.io/repos/github/RequireSun/countdown/badge.svg?branch=master)](https://coveralls.io/github/RequireSun/countdown?branch=master)

A simple countdown addon.

# How to use

```javascript
new Countdown({
    endTime   : Date.now() + 10000,
    onTick    : remain => console.log(remain),
    onComplete: () => console.log('complete'),
});
```

_output_

```shell
9000
8000
7000
6000
5000
4000
3000
2000
1000
complete
```