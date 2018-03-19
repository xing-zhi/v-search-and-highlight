import highlightText from './highlight-text';

export default function searchAndHighlight(rootNode, binding) {
  const { keyword, filter } = binding.value;
  // Before search and highlight, the mark elements added before should be cleared.
  // In order to avoid remove the mark elements not added by this function, add a class to mark the element we added
  // The class name 'sah' is abbr of 'search and highlight'
  const flagClassName = 'sah';
  const textNodeType = 3;

  // Clear the mark element added before
  [].forEach.call(rootNode.querySelectorAll(`mark.${flagClassName}`), el => {
    el.parentNode.replaceChild(el.firstChild, el);
  });

  // Seach and highlight resursively
  /* eslint-disable-next-line no-shadow */
  function highlight(keyword, el) {
    if (!el) {
      return;
    }

    if (el.hasChildNodes()) {
      [].forEach.call(el.childNodes, currentNode => {
        if (typeof filter === 'function') {
          if (filter(currentNode)) {
            highlight(keyword, currentNode);
          }
        } else {
          highlight(keyword, currentNode);
        }
      });
    }

    if (el.nodeType === textNodeType) {
      // For browsers support vue, the textContent property is all we need
      const nodeText = el.textContent || '';

      if (!nodeText.trim()) {
        return;
      }

      const highlightedText = highlightText(nodeText, keyword, flagClassName);
      let tmpDiv = document.createElement('div');

      tmpDiv.innerHTML = highlightedText;

      const { parentNode } = el;
      const { childNodes } = tmpDiv;

      while (childNodes.length) {
        /* eslint-disable-next-line no-magic-numbers */
        parentNode.insertBefore(childNodes[0], el);
      }
      parentNode.removeChild(el);
      tmpDiv = null;
    }
  }

  highlight(keyword, rootNode);
}
