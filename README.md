jframes
=======

A light weight animation frame support. With the [frame object](#the_frame_object), you are convinent to do some calculation.

## The Frame Object

The frame object will pass in the `requestFrame()` callback. It providers:

* `frame.time` time in javascript (eg. `+new Date()`).
* `frame.index` index of the requested frame sequence base on zero.
* `frame.dur` the duration time from current frame to the last frame in ms.
* `frame.elapsed` the elapsed time from the first frame to current frame in ms.
* `frame.next()` tells jframes to execute the next frame, if this method are not called, the animation stops.

## Usage

If you want to request a frame, just call `requestFrame()`

```js
requestFrame(function(frame) {
  console.log('avg frame rate: ' + frame.elapsed / (frame.index + 1));
  
  // render stuff
  
  frame.next(); // call the next frame
});
```

The function pass to `requestFrame()` will generate a frame sequence correspond to the function. The function will be the action of the frame sequence.

We keep track of frame informations for every frame sequence. You can use `requestFrame()` multi times without worry of calculation. For example:

```js
requestFrame(function(frame) {
  if (frame.index < 5) {
    console.log('frame seq 1: frame %d executed!', frame.index);
    frame.next();
  }
});

requestFrame(function(frame) {
  if (frame.index < 10) {
    console.log('frame seq 2: frame %d executed!', frame.index);
    frame.next();
  }
});
```
