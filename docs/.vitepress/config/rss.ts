import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const hostname = 'https://fedecan.ca'
const MAX_POSTS = 50

type AuthorMap = Record<string, { name: string; url?: string; avatar?: string }>

export async function generateFeed(config: SiteConfig): Promise<void> {
  await generateEnFeed(config)
  // await generateFrFeed(config)
}

// ---------------------------------------------------------------------------
// English Feed
// ---------------------------------------------------------------------------
async function generateEnFeed(config: SiteConfig): Promise<void> {
  const enAuthors: AuthorMap = (await import('../theme/data/authors_en.js'))
    .default

  const feed = new Feed({
    title: 'Fedecan Announcements',
    description:
      'Fedecan news and announcements, for the non-profit and our platforms.',
    id: `${hostname}/en/announcements/`,
    link: `${hostname}/en/announcements/`,
    language: 'en-CA',
    image: `${hostname}/img/social-share.png`,
    favicon: `${hostname}/favicon-bg.svg`,
    copyright: 'Copyright Fedecan.ca contributors',
    feedLinks: {
      atom: `${hostname}/feed-en.xml`,
    },
  })

  const posts = await createContentLoader('en/announcements/**/*.md', {
    excerpt: false,
    render: false,
  }).load()

  const published = posts
    .filter((p) => p.frontmatter.status === 'published')
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date as string).getTime() -
        new Date(a.frontmatter.date as string).getTime()
    )
    .slice(0, MAX_POSTS)

  for (const { url, frontmatter } of published) {
    const authorKey = frontmatter.author as string | undefined
    const authorData = authorKey ? enAuthors[authorKey] : undefined

    const image = frontmatter.featured_image as
      | { image?: string; alt?: string }
      | undefined

    feed.addItem({
      title: frontmatter.title as string,
      id: `${hostname}${url}`,
      link: `${hostname}${url}`,
      description: frontmatter.summary as string,
      author: authorData
        ? [{ name: authorData.name, link: authorData.url }]
        : [],
      date: new Date(frontmatter.date as string),
      image: image?.image ? `${hostname}${image.image}` : undefined,
      category: frontmatter.tags
        ? (frontmatter.tags as string[]).map((t) => ({ name: t }))
        : [],
    })
  }

  writeFileSync(path.join(config.outDir, 'feed-en.xml'), feed.atom1())
}

// ---------------------------------------------------------------------------
// French Feed (disabled until translations are caught up)
// ---------------------------------------------------------------------------
// async function generateFrFeed(config: SiteConfig): Promise<void> {
//   const frAuthors: AuthorMap = (await import('../theme/data/authors_fr.js')).default
//
//   const feed = new Feed({
//     title: 'Annonces Fedecan',
//     description: 'Nouvelles et annonces de Fedecan, pour l'organisme sans but lucratif et nos plateformes.',
//     id: `${hostname}/fr/announcements/`,
//     link: `${hostname}/fr/announcements/`,
//     language: 'fr-CA',
//     image: `${hostname}/img/social-share.png`,
//     favicon: `${hostname}/favicon-bg.svg`,
//     copyright: 'Copyright contributeurs Fedecan.ca',
//     feedLinks: {
//       atom: `${hostname}/feed-fr.xml`,
//     },
//   })
//
//   const posts = await createContentLoader('fr/announcements/**/*.md', {
//     excerpt: false,
//     render: false,
//   }).load()
//
//   const published = posts
//     .filter((p) => p.frontmatter.status === 'published')
//     .sort(
//       (a, b) =>
//         new Date(b.frontmatter.date as string).getTime() -
//         new Date(a.frontmatter.date as string).getTime()
//     )
//     .slice(0, MAX_POSTS)
//
//   for (const { url, frontmatter } of published) {
//     const authorKey = frontmatter.author as string | undefined
//     const authorData = authorKey ? frAuthors[authorKey] : undefined
//
//     const image = frontmatter.featured_image as
//       | { image?: string; alt?: string }
//       | undefined
//
//     feed.addItem({
//       title: frontmatter.title as string,
//       id: `${hostname}${url}`,
//       link: `${hostname}${url}`,
//       description: frontmatter.summary as string,
//       author: authorData
//         ? [{ name: authorData.name, link: authorData.url }]
//         : [],
//       date: new Date(frontmatter.date as string),
//       image: image?.image ? `${hostname}${image.image}` : undefined,
//       category: frontmatter.tags
//         ? (frontmatter.tags as string[]).map((t) => ({ name: t }))
//         : [],
//     })
//   }
//
//   writeFileSync(path.join(config.outDir, 'feed-fr.xml'), feed.atom1())
// }
