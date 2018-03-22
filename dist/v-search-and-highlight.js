(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VSearchAndHighlight = factory());
}(this, (function () { 'use strict';

  // https://esdiscuss.org/topic/regexp-escape#content-7
  function escapeRegExp(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
  }

  function highlightText(text, keyword, className) {
    var escapedKeyword = escapeRegExp(keyword);
    var re = new RegExp(escapedKeyword, 'gi');

    return text.replace(re, '<mark class="' + className + '">' + keyword + '</mark>');
  }

  var isFunction = function isFunction(fn) {
    return typeof fn === 'function';
  };
  var isString = function isString(str) {
    return typeof str === 'string';
  };
  var hasClass = function hasClass(el, klass) {
    return el.className && el.className.split(' ').includes(klass);
  };

  function searchAndHighlight(rootNode, binding) {
    var _binding$value = binding.value,
        keyword = _binding$value.keyword,
        filter = _binding$value.filter;
    // Before search and highlight, the mark elements added before should be cleared.
    // In order to avoid remove the mark elements not added by this function, add a class to mark the element we added
    // The class name 'sah' is abbr of 'search and highlight'

    var flagClassName = 'sah';

    // Clear the mark element added before
    [].forEach.call(rootNode.querySelectorAll('mark.' + flagClassName), function (el) {
      el.parentNode.replaceChild(el.firstChild, el);
    });

    // Walk the DOM tree
    function walk(el) {
      var textNodeType = 3;
      if (!el) {
        return;
      }

      if (el.hasChildNodes()) {
        [].forEach.call(el.childNodes, function (currentNode) {
          if (isFunction(filter) && !filter(currentNode)) {
            return;
          }
          if (isString(filter) && hasClass(currentNode, filter)) {
            return;
          }

          walk(currentNode);
        });
      }

      if (el.nodeType === textNodeType) {
        // For browsers support vue, the textContent property is all we need
        var nodeText = el.textContent || '';

        if (!nodeText.trim()) {
          return;
        }

        var highlightedText = highlightText(nodeText, keyword, flagClassName);
        var tmpDiv = document.createElement('div');

        tmpDiv.innerHTML = highlightedText;

        var parentNode = el.parentNode;
        var _tmpDiv = tmpDiv,
            childNodes = _tmpDiv.childNodes;


        while (childNodes.length) {
          /* eslint-disable-next-line no-magic-numbers */
          parentNode.insertBefore(childNodes[0], el);
        }
        parentNode.removeChild(el);
        tmpDiv = null;
      }
    }

    walk(rootNode);
  }

  var searchAndHighlightDirective = {
    inserted: searchAndHighlight,
    componentUpdated: searchAndHighlight
  };

  // the plugin includes a directive named v-search-and-highlight
  var SearchAndHighlight = {
    install: function install(Vue) {
      Vue.directive('search-and-highlight', searchAndHighlightDirective);
    }
  };

  return SearchAndHighlight;

})));
