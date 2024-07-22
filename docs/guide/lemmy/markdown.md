---
layout: doc

head:
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:locale
      content: en_CA
  - - meta
    - property: og:title #  max 50-60 characters
      content: Guides | Lemmy Markdown
  - - meta
    - property: og:url
      content: https://fedecan.ca/guide/lemmy/markdown
  - - meta
    - property: og:description  # 150-160 characters
      content: Lemmy Markdown Guide
  - - meta
    - property: article:section
      content: Guides - Lemmy Markdown
---

# Lemmy Markdown

Lemmy uses markdown-it for rendering markdown. This means that you can use the same markdown syntax that you would use on Lemmy and it follows the [CommonMark spec](https://commonmark.org/). Here are some examples of markdown that you can use on Lemmy:

## Headers

```markdown
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```

Result:

<ThemedImage  lightImageUrl="/img/guides/markdown/headers_light.png" darkImageUrl="/img/guides/markdown/headers_dark.png" alt="Markdown Headers"/>


## Emphasis

```markdown
*italic*  
**bold**  
***bold italic***  
~~strikethrough~~
```

Result:

<ThemedImage  lightImageUrl="/img/guides/markdown/emphasis_light.png" darkImageUrl="/img/guides/markdown/emphasis_dark.png" alt="Markdown Emphasis"/>


## Lists

```markdown
- Unordered list item 1
- Unordered list item 2
  - Unordered list item 2.1
  - Unordered list item 2.2
- Unordered list item 3

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3
```

Result:

<ThemedImage  lightImageUrl="/img/guides/markdown/lists_light.png" darkImageUrl="/img/guides/markdown/lists_dark.png" alt="Markdown Emphasis"/>



## Links / Images

```markdown
[Link text](https://example.com)  
![Image Alt](https://example.com/image.jpg "Image title")  
![The fedecan Logo](https://fedecan.ca/img/icons/maple-leaf.svg "Maple Leaf")
```

Result:

<ThemedImage  lightImageUrl="/img/guides/markdown/links_images_light.png" darkImageUrl="/img/guides/markdown/links_images_dark.png" alt="Markdown Links/Images"/>


## Blockquotes

```markdown
> Block  
> -quote
```

Result:

<ThemedImage  lightImageUrl="/img/guides/markdown/blockquotes_light.png" darkImageUrl="/img/guides/markdown/blockquotes_dark.png" alt="Markdown Blockquotes"/>


## Code

````markdown
`inline code`  

```python
def hello():
    print("Hello, World!")
```
````

Result:

<ThemedImage  lightImageUrl="/img/guides/markdown/code_light.png" darkImageUrl="/img/guides/markdown/code_dark.png" alt="Markdown Inline/Blockcode"/>


## Tables

> Tables are not officially documented.

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |
```

Result:

<ThemedImage  lightImageUrl="/img/guides/markdown/tables_light.png" darkImageUrl="/img/guides/markdown/tables_dark.png" alt="Markdown Tables"/>

## Horizontal Rule

```markdown
---
```

Result:

<ThemedImage  lightImageUrl="/img/guides/markdown/horizontal_rule_light.png" darkImageUrl="/img/guides/markdown/horizontal_rule_dark.png" alt="Markdown Horizontal Rule"/>


## Spoilers

```markdown
::: spoiler Spoiler Name
Spoiler Content
:::
```

Result:

<ThemedImage  lightImageUrl="/img/guides/markdown/spoilers_light.png" darkImageUrl="/img/guides/markdown/spoilers_dark.png" alt="Markdown Spoilers"/>

> Note: In the example above, the spoiler is in the open state, by default it is in the closed state.

## Sub/Superscript

```markdown
H~2~O
H^2^O
```

Result:

<ThemedImage  lightImageUrl="/img/guides/markdown/sub_superscript_light.png" darkImageUrl="/img/guides/markdown/sub_superscript_dark.png" alt="Markdown Sub/Superscript"/>