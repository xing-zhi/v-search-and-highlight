import escapeRegExp from './escape-regexp';

export default function highlightText(text, keyword, className) {
  const escapedKeyword = escapeRegExp(keyword);
  const re = new RegExp(escapedKeyword, 'gi');

  return text.replace(re, `<mark class="${className}">${keyword}</mark>`);
}
