import searchAndHighlightDirective from './search-and-highlight-directive';

// the plugin includes a directive named v-search-and-highlight
const SearchAndHighlight = {
  install(Vue) {
    Vue.directive('search-and-highlight', searchAndHighlightDirective);
  }
};
export default SearchAndHighlight;
