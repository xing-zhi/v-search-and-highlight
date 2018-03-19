// https://esdiscuss.org/topic/regexp-escape#content-7
export default function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
