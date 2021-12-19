import type { MetaInfo, MetaPropertyCharset, MetaPropertyEquiv, MetaPropertyName, MetaPropertyMicrodata, MetaPropertyProperty } from 'vue-meta'
import type { ApiResponse, ApiPaginateResponse, ApiFormated, ApiMeta, Pagination, Query } from './api'
import type { Book } from './entities/book'
import type { Serie } from './entities/serie'
import type { Author } from './entities/author'
import type { Entity, Tag } from './entities/index'
import type { Content } from './nuxt/content'
import type { Application, HomePage, AppInit } from './cms'
import type { Route, ObjectLiteral } from './nuxt'
import type { HeadMeta, HeadElement } from './nuxt/head'
import type { SelectedEntities } from './nuxt/components'
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
  MetaPropertyCharset,
  MetaPropertyEquiv,
  MetaPropertyName,
  MetaPropertyMicrodata,
  MetaPropertyProperty,
  ObjectLiteral,
  HeadMeta,
  HeadElement,
  SelectedEntities,
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
