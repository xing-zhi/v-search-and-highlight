import highlightText from './highlight-text';

export default function searchAndHighlight(el, binding) {
  const { keyword, filter } = binding.value;
  // Before search and highlight, the mark elements added before should be cleared.
  // In order to avoid remove the mark elements not added by this function, add a class to mark the element we added
  // The class name 'sah' is abbr of 'search and highlight'
  const flagClassName = 'sah';

  // Clear the mark element added before
  [].forEach.call(el.querySelectorAll(`mark.${flagClassName}`), function(el) {
    el.parentNode.replaceChild(el.firstChild, el);
  });

  // Seach and highlight resursively
  function highlight(keyword, el) {
    if (!el) {
      return;
    }

    if (el.hasChildNodes()) {
      for (let i = el.childNodes.length - 1; i > -1; i--) {
        const currentNode = el.childNodes[i];
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
      const nodeText = el.textContent || '';

      if (!nodeText.trim()) {
        return;
      }

      const highlightedText = highlightText(nodeText, keyword, flagClassName);
      let tmpDiv = document.createElement('div');

      tmpDiv.innerHTML = highlightedText;

      const parentNode = el.parentNode;
      const childNodes = tmpDiv.childNodes;

      while (childNodes.length) {
        parentNode.insertBefore(childNodes[0], el);
      }
      parentNode.removeChild(el);
      tmpDiv = null;
    }
  }

  highlight(keyword, el);
}
