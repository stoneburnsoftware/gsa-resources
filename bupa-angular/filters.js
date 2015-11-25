angular.module('bupafilters', [])
.filter('snippet', function() {
  return function(input) {
    return input.replace(/<br>/g, "");
  };
})
.filter('trustSrc', ['$sce', function($sce) {
  return function(input) {
    return $sce.trustAsResourceUrl(input);
  };
}])