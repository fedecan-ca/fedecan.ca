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
      content: https://fedecan.ca/en/guide/lemmy/markdown
  - - meta
    - property: og:description # 150-160 characters
      content: Lemmy Markdown Guide
  - - meta
    - property: article:section
      content: Guides - Lemmy Markdown
---

# How to format posts on Lemmy using Markdown

Lemmy uses markdown-it for rendering markdown. This means that you can use the same markdown syntax that you would use on Lemmy and it follows the [CommonMark spec](https://commonmark.org/). Here are some examples of markdown that you can use on Lemmy:

## Headers

If you enter the following text:

```markdown
# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6
```

Lemmy will render it as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-headers-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-headers-dark.png',
      description: 'Markdown Headers'
    }"
    enableZoom
  />

## Emphasis

If you enter the following text:

```markdown
_italic_  
**bold**  
**_bold italic_**  
~~strikethrough~~
```

Lemmy will render it as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-emphasis-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-emphasis-dark.png',
      description: 'Markdown Emphasis'
    }"
    enableZoom
  />

## Lists

If you enter the following text:

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

Lemmy will render it as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-lists-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-lists-dark.png',
      description: 'Markdown Lists'
    }"
    enableZoom
  />

## Links / Images

If you enter the following text:

```markdown
[Link text](https://example.com)  
![Image Alt](https://example.com/image.jpg 'Image title')  
![The fedecan Logo](https://fedecan.ca/img/icons/maple-leaf.svg 'Maple Leaf')
```

Lemmy will render it as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-links-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-links-dark.png',
      description: 'Markdown Links/Images'
    }"
    enableZoom
  />

## Blockquotes

If you enter the following text:

```markdown
> Block  
> -quote
```

Lemmy will render it as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-blockquote-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-blockquote-dark.png',
      description: 'Markdown Blockquotes'
    }"
    enableZoom
  />

## Code

If you enter the following text:

````markdown
`inline code`

```python
def hello():
    print("Hello, World!")
```
````

Lemmy will render it as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-code-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-code-dark.png',
      description: 'Markdown Inline/Blockcode'
    }"
    enableZoom
  />

## Tables

If you enter the following text:

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |
```

Lemmy will render it as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-table-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-table-dark.png',
      description: 'Markdown Tables'
    }"
    enableZoom
  />

::: info Note

Tables are not officially documented by Lemmy, but they are supported by the frontend.

:::

## Horizontal Rule

If you enter the following text:

```markdown
Some text.

---

Some more text.
```

Lemmy will render it as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-horizontal-rule-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-horizontal-rule-dark.png',
      description: 'Markdown Horizontal Rule'
    }"
    enableZoom
  />

## Spoilers

If you enter the following text:

```markdown
::: spoiler Spoiler Name
Spoiler Content
:::
```

Lemmy will render it as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-spoiler-closed-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-spoiler-closed-dark.png',
      description: 'Markdown Spoilers (closed)'
    }"
    enableZoom
  />

The user can then toggle the spoiler to show the content:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-spoiler-open-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-spoiler-open-dark.png',
      description: 'Markdown Spoilers (open)'
    }"
    enableZoom
  />

::: warning This is not supported by all apps

Some apps may not support this spoiler notation. In that case, the spoiler will be rendered as a regular blockquote.

:::

## Sub/Superscript

If you enter the following text:

```markdown
H~2~O

H^2^O
```

Lemmy will render it as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-sub_super-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-sub_super-dark.png',
      description: 'Markdown Spoilers (open)'
    }"
    enableZoom
  />
