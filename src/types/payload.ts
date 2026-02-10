export type SupportCategory = {
  id: string
  title: string
  slug: string
  order?: number
}

export type SupportPage = {
  id: string
  title: string
  slug: string
  body?: string
  category?: string | SupportCategory
  order?: number
}

export type PaginatedResponse<T> = {
  docs?: T[]
}
