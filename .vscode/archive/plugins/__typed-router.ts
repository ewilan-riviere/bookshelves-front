/**
 * ---------------------
 * 🚗🚦 Generated by nuxt-typed-router. Do not modify !
 * ---------------------
 * */

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const router = useRouter()
  const routesList = {
    slug: 'slug',
    authorsSlug: 'authors-slug',
    authors: 'authors',
    booksAuthorSlug: 'books-author-slug',
    booksAuthor: 'books-author',
    books: 'books',
    contact: 'contact',
    guidesSlug: 'guides-slug',
    guides: 'guides',
    index: 'index',
    languages: 'languages',
    profile: 'profile',
    profileSettings: 'profile-settings',
    publishersSlug: 'publishers-slug',
    publishers: 'publishers',
    relatedAuthorSlug: 'related-author-slug',
    relatedAuthor: 'related-author',
    related: 'related',
    seriesAuthorSlug: 'series-author-slug',
    seriesAuthor: 'series-author',
    series: 'series',
    signInForgotPassword: 'sign-in-forgot-password',
    signIn: 'sign-in',
    signInResetPassword: 'sign-in-reset-password',
    signUp: 'sign-up',
    tagsSlug: 'tags-slug',
    tags: 'tags',
    usersSlug: 'users-slug',
    users: 'users',
  }

  return {
    provide: {
      typedRouter: router as TypedRouter,
      routesList,
    },
  }
})