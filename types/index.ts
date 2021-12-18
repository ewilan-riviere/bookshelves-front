import type { MetaInfo } from 'vue-meta'
import type { ApiResponse, ApiPaginateResponse, ApiFormated, ApiMeta, Pagination, Query } from './api'
import type { Book } from './entities/book'
import type { Serie } from './entities/serie'
import type { Author } from './entities/author'
import type { Entity, Tag } from './entities/index'
import type { Content } from './nuxt/content'
import type { Application, HomePage, AppInit } from './cms'
import type { Route, ObjectLiteral } from './nuxt'
import { Toast, ToastAuto, ToastType } from './nuxt/toast'
import type { SwiperElement } from './nuxt/swiper'
import { ApiEndpoint } from './api/endpoints'
import { FormatLanguageType } from './nuxt/methods'

export {
  // api
  ApiResponse,
  ApiPaginateResponse,
  ApiFormated,
  ApiMeta,
  Pagination,
  Query,
  // entities
  Book,
  Author,
  Serie,
  Entity,
  Tag,
  // content
  Content,
  // cms
  Application,
  HomePage,
  AppInit,
  // nuxt
  Route,
  MetaInfo,
  ObjectLiteral,
  // toast
  Toast,
  ToastAuto,
  ToastType,
  // modules
  SwiperElement,
  // endpoints
  ApiEndpoint,
  FormatLanguageType
}
