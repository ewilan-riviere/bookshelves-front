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
    let result = 'unknown'
    const list = authors?.map(author => author.name?.trim()) as string[]
    result = [list.slice(0, -1).join(', '), list.slice(-1)[0]].join(
      list.length < 2 ? '' : ' & '
    )

    return result
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
    if (tags) {
      let entitiesToString = ''
      tags.forEach((tag, tagId) => {
        entitiesToString += `${tag.name}`
        if (tags.length > 1 && tagId !== tags.length - 1) {
          entitiesToString += ' & '
        }
      })
      return entitiesToString
    }

    return 'unknown'
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

  return {
    formatAuthors,
    formatLanguage,
    formatTags,
    formatType,
    instanceBook,
    instanceSerie,
    instanceAuthor
  }
}