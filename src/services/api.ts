import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type GNews = {
  articles: News[]
}

type News = {
  title: string
  image: string
  description: string
  publishedAt: Date
  url: string
}
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gnews.io/api/v4/search' }),
  endpoints: (b) => ({
    getNewsAPI: b.query<GNews, void>({
      query: () =>
        '?q=metalurgica&lang=pt&token=f097f511c45a58afe72e90aad0d390b7'
    }),
    getNewsFab: b.query<GNews, void>({
      query: () => ''
    })
  })
})

export const { useGetNewsAPIQuery } = newsApi
