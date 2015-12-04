angular.module('bupafilters', [])
.filter('html', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}])
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
.filter('resultTitle', [function() {
  return function(input) {
    return input
    .replace(/\| Bupa UK/g, "")
    .replace(/\| Bupa U .../g, "")
    .replace(/\| Bupa  .../g, "")
    .replace(/\| Bupa .../g, "")
    .replace(/\| Bup .../g, "")
    .replace(/\| Bu .../g, "")
    .replace(/\| B .../g, "")
    .replace(/\|  .../g, "")
    .replace(/\| .../g, "")
  };
}])
.filter('youtubeEmbed', [function() {
  return function(input) {
    return input.replace(/www\.youtube\.com\/watch\?v=/g, "www.youtube.com/embed/");
  };
}])

