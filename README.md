# Vue search and highlight plugin
A Vue plugin for searching the content of an element and highlighting the keyword with the mark element.

The plugin includes a vue directive. It searches the children of the element recursively and replaces the keyword with a mark element.

# Install
## npm
```bash
$ npm i -S v-search-and-highlight
```

## CDN
未压缩版本
```html
<script src="https://cdn.jsdelivr.net/npm/v-search-and-highlight@1.1.0/dist/v-search-and-highlight.js"></script>
```

压缩版本
```html
<script src="https://cdn.jsdelivr.net/npm/v-search-and-highlight@1.1.0/dist/v-search-and-highlight.min.js"></script>
```

# Usage
The directive requires the `keyword` argument and surpports an optional filter function to filter out elements.

## Parameters

|Name|Required|Type|Description|
|:---- | :--- | :--- | :---- |
|keyword|true|String|The keyword to search|
|filter|false|Function/String|If it is a function, it's the function to filter the elements, take the DOM node as parameter and return `true` for handling the element; If it is a string, it's the class name of for elements to filter out.|

## Examples
There are examples in [the examples folder](https://github.com/xing-zhi/v-search-and-highlight/tree/master/examples), and you can view them [here](https://ranwu.me/v-search-and-highlight/).

# Caveats
For data binding, we have to use `v-text` directive other than the mustache syntax.

Because the mustache syntax generates a text node, but this directive replaces text with a html node, which cann't be in a text node.

# License
[MIT](https://opensource.org/licenses/MIT)
