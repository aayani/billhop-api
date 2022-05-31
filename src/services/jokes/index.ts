import { HttpClient } from '../../util'

const client = new HttpClient('https://v2.jokeapi.dev')

export const getAJoke = async (): Promise<string> => {
  const res = await client.get('joke/any?type=single')

  return res.joke
}
