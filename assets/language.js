(function () {
  var script = document.currentScript;
  var page = script && script.dataset ? (script.dataset.page || '') : '';
  var saved = localStorage.getItem('runmoa-language');
  var languages = saved ? [saved] : (navigator.languages || [navigator.language || 'en']);
  var selected = 'en';

  for (var index = 0; index < languages.length; index += 1) {
    var code = String(languages[index]).toLowerCase().split(/[-_]/)[0];
    if (code === 'ko' || code === 'en') {
      selected = code;
      break;
    }
  }

  var destination = '/runmoa/' + selected + '/' + page;
  if (window.location.pathname !== destination) {
    window.location.replace(destination);
  }
}());
