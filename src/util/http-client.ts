import * as needle from 'needle'

export class HttpClient {
  constructor(private readonly baseUrl: string) {}

  public get(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      needle.get(`${this.baseUrl}/${path}`, (err, res) => {
        if (err) {
          reject(err)
        }

        resolve(res.body)
      })
    })
  }

  public post(path: string, data?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      needle.post(`${this.baseUrl}/${path}`, data, (err, res) => {
        if (err) {
          reject(err)
        }

        resolve(res.body)
      })
    })
  }
}
