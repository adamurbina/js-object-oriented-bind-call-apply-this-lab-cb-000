function justInvoke(fn) {
  return fn.apply();
}

function setThisWithCall(fn, thisValue, arg) {
  fn.call(arg);
  this.thisValue = thisValue;
  
}
