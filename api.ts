import axios from 'axios'

const TMDB_KEY = '76a0ede28c83e71702d7d1842c4cdd0f'

const makeRequest = (path: string, params: object) =>
  axios.get(`https://api.themoviedb.org/3/${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  })

export const movieApi = {
  nowPlaying: () => makeRequest(),
  popular: () => makeRequest(),
  upcoming: () => makeRequest(),
  search: (word: string) => makeRequest(),
  detail: (id: string | number) => makeRequest(),
  discover: () => makeRequest(),
}

export const tvApi = {
  today: () => makeRequest(),
  thisWeek: () => makeRequest(),
  topRated: () => makeRequest(),
  popular: () => makeRequest(),
  search: (word: string) => makeRequest(),
  detail: (id: string | number) => makeRequest(),
}
