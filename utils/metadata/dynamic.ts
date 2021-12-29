import { NuxtConfig } from '@nuxt/types'
import metadata from '.'
import { HeadElement, HeadMeta } from '~/types'

const metadataDynamic = (meta?: HeadMeta, config?: NuxtConfig): HeadElement[] => {
  return [
    ...basic(meta),
    ...openGraph(meta, config),
    ...twitterCard(meta, config)
  ]
}

const basic = (meta?: HeadMeta): HeadElement[] => {
  const metaLocal = meta || {}
  let metaDesc = metaLocal.description
    ? metaLocal.description
    : metadata.website.description
  const limit = 155
  if (metaDesc.length > limit) {
    metaDesc = metaDesc.substring(0, limit - 3) + '...'
  }
  return [
    {
      hid: 'description',
      name: 'description',
      content: metaDesc
    }
  ]
}
const openGraph = (meta?: HeadMeta, config?: NuxtConfig): HeadElement[] => {
  const metaLocal = meta || {}
  return [
    {
      hid: 'og:type',
      property: 'og:type',
      content: metaLocal.type ? metaLocal.type : metadata.og.type
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: metaLocal.route ? `${config?.baseURL}${metaLocal.route}` : `${config?.baseURL}/`
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: metaLocal.title ? metaLocal.title : metadata.website.title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: metaLocal.description
        ? metaLocal.description
        : metadata.website.description
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: metaLocal.image ? metaLocal.image : `${config?.baseURL}/default.jpg`
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: metaLocal.title ? metaLocal.title : metadata.website.title
    },
    // additionalOpenGraph(
    //   metaLocal.articlePublishedTime,
    //   'article:published_time'
    // ),
    // additionalOpenGraph(metaLocal.articleAuthor, 'article:author'),
    // additionalOpenGraph(metaLocal.articleSection, 'article:section'),
    // additionalOpenGraph(metaLocal.bookISBN, 'book:isbn'),
    // additionalOpenGraph(metaLocal.bookAuthor, 'book:author'),
    // additionalOpenGraph(metaLocal.bookReleaseDate, 'book:release_date'),
    // additionalOpenGraph(metaLocal.bookTag, 'book:tag'),
    // additionalOpenGraph(metaLocal.profileFirstName, 'profile:first_name'),
    // additionalOpenGraph(metaLocal.profileLastName, 'profile:last_name')
  ]
}

const twitterCard = (meta?: HeadMeta, config?: NuxtConfig): HeadElement[] => {
  const metaLocal = meta || {}
  return [
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: metaLocal.title ? metaLocal.title : metadata.website.title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: metaLocal.description
        ? metaLocal.description
        : metadata.website.description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: metaLocal.image ? metaLocal.image : `${config?.baseURL}/default.jpg`
    }
  ]
}

const additionalOpenGraph = (customMeta?: string, hid?: string): HeadElement | null => {
  return customMeta ? { hid, property: hid, content: customMeta } : null
}

export default metadataDynamic