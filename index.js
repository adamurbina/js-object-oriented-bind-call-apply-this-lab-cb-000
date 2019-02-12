function justInvoke(fn) {
  return fn.apply();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}
