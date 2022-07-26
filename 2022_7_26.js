/* 1. Complete the function/method so that it returns the url with anything after the anchor (#) removed. */

function removeUrlAnchor(url) {
  return url.replace(/#([\s\S]*)/g, "");
}

