import searchAndHighlight from './search-and-highlight';

const searchAndHighlightDirective = {
  inserted: searchAndHighlight,
  componentUpdated: searchAndHighlight
};

export default searchAndHighlightDirective;
