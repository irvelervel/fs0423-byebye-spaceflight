export interface Launch {
  launch_id: string
  provider: string
}

export interface Result {
  id: number
  title: string
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: string
  updated_at: string
  featured: boolean
  launches: Launch[]
  events: any[]
}

// il JSON della response a /articles
export interface SpaceNews {
  count: number
  next: string | null
  previous: string | null
  results: Result[]
}
