//Remove all falsy values from an array.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter((x) => Boolean(x) != false);
}
