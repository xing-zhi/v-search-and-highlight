# Vue search and highlight plugin
A Vue plugin for searching the content of an element and highlighting the keyword with the mark element.

The plugin includes a vue directive. It searches the children of the element recursively and replaces the keyword with a mark element.

# Usage
The directive requires the `keyword` argument and surpports an optional filter function to filter out elements.

## parameters

|Name|Required|Type|Description|
|:---- | :--- | :--- | :---- |
|keyword|true|String|The keyword to search|
|filter|false|Function|The filter function to filter out elements|

# Caveats
For data binding, we have to use `v-text` directive other than the mustache syntax.

Because the mustache syntax generates a text node, but this directive replaces text with a html node, which cann't be in a text node.

# License
[MIT](https://opensource.org/licenses/MIT)

