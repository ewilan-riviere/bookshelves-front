import { useApplicationStore } from '~~/store/application'

export const useEntityMethods = () => {
  /**
   * Get a `string` from `Author[]`
   * @typeParam `Author[]`
   * @returns `string`
   *
   * ```html
   * <div>
   *  {{ formatAuthors(book.authors) }}
   * </div>
   * ```
   */
  const formatAuthors = (authors: Author[] | undefined): string => {
    if (!authors)
      return 'unknown'

    const list = authors?.map(author => author.name?.trim()) as string[]
    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })

    return formatter.format(list)
  }

  /**
 * Get Language from slug
 * @typeParam `slug` of Language.
 * @returns `string`
 */
  const formatLanguage = (slug?: string) => {
    const { languages } = useApplicationStore()

    let lang = slug
    if (languages && languages.length) {
      const language = languages.find(lang => lang.meta?.slug === slug)
      lang = language ? (language.name as string) : slug
    }

    return lang
  }

  /**
 * Get a `string` from `Tag[]`
 * @typeParam `Tag[]`
 * @returns `string`
 */
  const formatTags = (tags?: Tag[]) => {
    if (!tags)
      return 'unknown'

    const list = tags?.map(tag => tag.name?.trim()) as string[]
    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })

    return formatter.format(list)
  }

  /**
 * Get BookType from slug
 * @typeParam `slug` of BookType.
 * @returns `string`
 */
  const formatType = (slug?: string) => {
    const { enums } = useApplicationStore()

    let type = slug
    if (enums.bookTypes !== null && slug) {
      const bookType = enums.bookTypes[slug]
      type = bookType
    }

    return type
  }

  const instanceBook = (entity: EntityList): entity is Book => {
    return entity.meta.entity === 'book'
  }

  const instanceSerie = (entity: EntityList): entity is Serie => {
    return entity.meta.entity === 'serie'
  }

  const instanceAuthor = (entity: EntityList): entity is Author => {
    return entity.meta.entity === 'author'
  }

  const getDynamicRoute = (entity: Entity | Favoritable | Review) => {
    const route: TypedRoute = {
      name: 'authors-slug',
    }

    const meta = entity.meta

    if (meta.entity === 'book')
      route.name = 'books-author-slug'
    if (meta.entity === 'serie')
      route.name = 'series-author-slug'

    route.params = {
      author: meta.author,
      slug: meta.slug,
    }

    return route
  }

  return {
    formatAuthors,
    formatLanguage,
    formatTags,
    formatType,
    instanceBook,
    instanceSerie,
    instanceAuthor,
    getDynamicRoute,
  }
}
