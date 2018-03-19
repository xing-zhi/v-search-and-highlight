(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VSearchAndHighlight = factory());
}(this, (function () { 'use strict';

  // https://esdiscuss.org/topic/regexp-escape#content-7
  function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }

  function highlightText(text, keyword, className) {
    var escapedKeyword = escapeRegExp(keyword);
    var re = new RegExp(escapedKeyword, 'gi');

    return text.replace(re, '<mark class="' + className + '">' + keyword + '</mark>');
  }

  function searchAndHighlight(el, binding) {
    var _binding$value = binding.value,
        keyword = _binding$value.keyword,
        filter = _binding$value.filter;
    // Before search and highlight, the mark elements added before should be cleared.
    // In order to avoid remove the mark elements not added by this function, add a class to mark the element we added
    // The class name 'sah' is abbr of 'search and highlight'

    var flagClassName = 'sah';

    // Clear the mark element added before
    [].forEach.call(el.querySelectorAll('mark.' + flagClassName), function (el) {
      el.parentNode.replaceChild(el.firstChild, el);
    });

    // Seach and highlight resursively
    function highlight(keyword, el) {
      if (!el) {
        return;
      }

      if (el.hasChildNodes()) {
        for (var i = el.childNodes.length - 1; i > -1; i--) {
          var currentNode = el.childNodes[i];
          if (typeof filter === 'function') {
            if (filter(currentNode)) {
              highlight(keyword, currentNode);
            }
          } else {
            highlight(keyword, currentNode);
          }
        }
      }

      if (el.nodeType === 3) {
        // For browsers support vue, the textContent property is all we need
        var nodeText = el.textContent || '';

        if (!nodeText.trim()) {
          return;
        }

        var highlightedText = highlightText(nodeText, keyword, flagClassName);
        var tmpDiv = document.createElement('div');

        tmpDiv.innerHTML = highlightedText;

        var parentNode = el.parentNode;
        var childNodes = tmpDiv.childNodes;

        while (childNodes.length) {
          parentNode.insertBefore(childNodes[0], el);
        }
        parentNode.removeChild(el);
        tmpDiv = null;
      }
    }

    highlight(keyword, el);
  }

  var searchAndHighlightDirective = {
    inserted: searchAndHighlight,
    componentUpdated: searchAndHighlight
  };

  // the plugin includes a directive named v-search-and-highlight
  var SearchAndHighlight = {
    install: function install(Vue, options) {
      Vue.directive('search-and-highlight', searchAndHighlightDirective);
    }
  };

  return SearchAndHighlight;

})));
