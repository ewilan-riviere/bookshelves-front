/* eslint-disable no-unused-vars */
import Vue from 'vue'

const capitalize = (string = '') =>
  [...string]
    .map(
      // Convert to array with each item is a char of
      // string by using spread operator (...)
      (char, index) => (index ? char : char.toUpperCase()) // Index true means not equal 0, so (!index) is
      // the first character which is capitalized by
      // the `toUpperCase()` method
    )
    .join('') // Return back to string

Vue.prototype.$capitalize = capitalize

const getDate = (date) => {
  // the param is raw DateTime from API like 2020-10-16T08:18:49.000000Z
  // convert date to JS Date
  // example here date param is '2020-10-16T08:18:49.000000Z'
  date = new Date(date)

  // define options
  let userLang = 'en'
  // for Nuxt
  if (process.client) {
    userLang = navigator.language || navigator.userLanguage
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const dateOptions = {
    year: 'numeric',
    // weekday: 'long',
    month: 'long',
    day: 'numeric',
  }
  const hoursOptions = {
    // timeZone: 'UTC',
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  const dateToStringLocale = date.toLocaleString(userLang, dateOptions)

  return dateToStringLocale
}

Vue.prototype.$getDate = getDate

const shuffle = (a) => {
  let j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

Vue.prototype.$shuffle = shuffle

const overflow = (text, maxLength = 25) => {
  if (text) {
    let overflow = text
    if (text.length > maxLength) {
      overflow = text.substring(0, maxLength)
      overflow = `${overflow}...`
    }
    return overflow
  }
  return ''
}

Vue.prototype.$overflow = overflow

const slugify = (text) => {
  if (text !== null && text !== undefined) {
    return text
      .toString()
      .toLowerCase()
      .replace(/["']/i, '-')
      .replace(/\s+/g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036F]/g, '')
  }
}

Vue.prototype.$slugify = slugify

const randomstring = (L) => {
  let s = ''
  const randomchar = function () {
    const n = Math.floor(Math.random() * 62)
    if (n < 10) return n // 1-10
    if (n < 36) return String.fromCharCode(n + 55) // A-Z
    return String.fromCharCode(n + 61) // a-z
  }
  while (s.length < L) s += randomchar()
  return s
}

Vue.prototype.$randomString = randomstring

const getLanguage = (slug) => {
  const available = [
    {
      slug: 'fr',
      label: 'French',
    },
    {
      slug: 'en',
      label: 'English',
    },
  ]

  const language = available.find((lang) => lang.slug === slug)
  if (language) {
    return language.label
  }
}

Vue.prototype.$getLanguage = getLanguage

const getLanguageFlag = (slug) => {
  const available = [
    {
      slug: 'fr',
      id: 'fr',
      label: 'French',
    },
    {
      slug: 'en',
      id: 'gb',
      label: 'English',
    },
  ]

  const language = available.find((lang) => lang.slug === slug)
  if (language) {
    const lang = language.id
    return `https://www.countryflags.io/${lang}/flat/32.png`
  }
}

Vue.prototype.$getLanguageFlag = getLanguageFlag

const getAuthors = (authors) => {
  let authorsToString = ''
  authors.forEach((author, authorId) => {
    authorsToString += `${author.name}`
    if (authors.length > 1 && authorId !== authors.length - 1) {
      authorsToString += ' & '
    }
  })
  return authorsToString
}

Vue.prototype.$getAuthors = getAuthors