jframes
=======

[![Build Status](https://img.shields.io/travis/techird/jframes/master.svg)](https://travis-ci.org/techird/jframes)
[![NPM version](https://img.shields.io/npm/v/jframes.svg)](http://badge.fury.io/js/jframes)

A light weight animation frame support. With the [frame object](#the-frame-object), you are convinent to do some calculation.

## The Frame Object

The frame object will pass in the `jframes.request()` callback. It providers:

* `frame.time` time in javascript (eg. `+new Date()`).
* `frame.index` index of the requested frame sequence base on zero.
* `frame.dur` the duration time from current frame to the last frame in ms.
* `frame.elapsed` the elapsed time from the first frame to current frame in ms.
* `frame.next()` tells jframes to execute the next frame, if this method are not called, the animation stops.

## Usage

If you want to request a frame, just call `jframes.request()`

```js
var req = jframes.request(function(frame) {
  console.log('avg frame rate: ' + frame.elapsed / (frame.index + 1));
  
  // render stuff
  
  frame.next(); // call the next frame
});

// jframes.release(req); // release resources
```

The function pass to `jframes.request()` will generate a frame sequence correspond to the function. The function will be the action of the frame sequence.

We keep track of frame informations for every frame sequence. You can use `jframes.request()` multi times without worry of calculation. For example:

```js
jframes.request(function(frame) {
  if (frame.index < 5) {
    console.log('frame seq 1: frame %d executed!', frame.index);
    frame.next();
  }
});

jframes.request(function(frame) {
  if (frame.index < 10) {
    console.log('frame seq 2: frame %d executed!', frame.index);
    frame.next();
  }
});
```
