angular.module('bupafilters', [])
.filter('snippet', function() {
  return function(input) {
    return input.replace(/<br>/g, "");
  };
});