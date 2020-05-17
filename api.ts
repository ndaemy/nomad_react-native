import axios from 'axios'

const TMDB_KEY = '76a0ede28c83e71702d7d1842c4cdd0f'

const makeRequest = (path: string, params?: object) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  })

async function getAnything(path: string, params?: object) {
  try {
    const {
      data,
      data: { results },
    } = await makeRequest(path, params)
    return [results || data, null]
  } catch (e) {
    return [null, e]
  }
}

export const movieApi = {
  nowPlaying: () => getAnything('/movie/now_playing'),
  popular: () => getAnything('/movie/popular'),
  upcoming: () => getAnything('/movie/upcoming', { region: 'kr' }),
  search: (query: string) => getAnything('/search/movie', { query }),
  detail: (id: string | number) => getAnything(`/movie/${id}`),
  discover: () => getAnything('/discover/movie'),
}

export const tvApi = {
  today: () => getAnything('/tv/airing_today'),
  thisWeek: () => getAnything('/tv/on_the_air'),
  topRated: () => getAnything('/tv/top_rated'),
  popular: () => getAnything('/tv/popular'),
  search: (query: string) => getAnything('/search/tv', { query }),
  detail: (id: string | number) => getAnything(`/tv/${id}`),
}
