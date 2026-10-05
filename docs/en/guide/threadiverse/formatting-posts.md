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

# How to format posts using Markdown

Both Lemmy and PieFed use markdown to format the content of posts (and comments). This means that you can use the same markdown syntax that is used on many different software platforms and broadly conforms to the [CommonMark spec](https://commonmark.org/). Here are some examples of markdown that you can use on Lemmy/PieFed:

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

It will render as:

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

It will render as:

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

It will render as:

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

It will render as:

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

It will render as:

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

It will render as:

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

It will render as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-table-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-table-dark.png',
      description: 'Markdown Tables'
    }"
    enableZoom
  />

## Horizontal Rule

If you enter the following text:

```markdown
Some text.

---

Some more text.
```

It will render as:

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

It will render as:

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

Some apps may not support this spoiler notation. In that case, the spoiler will be rendered as a regular block of text.

:::

### Inline Spoilers (PieFed Only)

In addition to the spoiler block above, PieFed also allows for inline spoilers without being set apart in a new block of text. This hides a piece of text until the mouse hovers over it (or is tapped on a mobile device).

If you enter the following text:

```markdown
The treasure is || in the closet ||.

The key is >! in the desk !<.
```

It will render as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/piefed-inline-spoiler-hidden-light.png',
      image_dark: '/guide/threadiverse/markdown/piefed-inline-spoiler-hidden-dark.png',
      description: 'Inline Spoilers (hidden)'
    }"
    enableZoom
  />

If the mouse hovers over an inline spoiler, then it is displayed:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/piefed-inline-spoiler-shown-light.png',
      image_dark: '/guide/threadiverse/markdown/piefed-inline-spoiler-shown-dark.png',
      description: 'Displaying an inline spoiler by hovering over it'
    }"
    enableZoom
  />

::: warning This is not supported by all apps

Like spoiler blocks, inline spoilers are not supported by all apps. Most significantly, inline spoilers are not supported by the default web interface of Lemmy. So, inline spoilers will just display as normal text to most users on Lemmy instances.

:::

## Sub/Superscript

If you enter the following text:

```markdown
H~2~O

H^2^O
```

It will render as:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/markdown/lemmy-sub_super-light.png',
      image_dark: '/guide/threadiverse/markdown/lemmy-sub_super-dark.png',
      description: 'Markdown Spoilers (open)'
    }"
    enableZoom
  />
