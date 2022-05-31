import { Router } from 'express'

import { rovarsprak } from '../../util'
import { jokesService } from '../../services'
import { validateRequestBody } from './validate-request-body'

const router = Router()

router.post<any, any, { result: string }, { text: string }>(
  '/normal',
  validateRequestBody,
  (req, res) => {
    const { text } = req.body

    const result = rovarsprak.translate(text)

    res.json({ result })
  },
)

router.post<any, any, { result: string }, { text: string }>(
  '/rovarsprak',
  validateRequestBody,
  (req, res) => {
    const { text } = req.body

    const result = rovarsprak.reverse(text)

    res.json({ result })
  },
)

router.get<any, any, { result: string }>('/joke', async (req, res) => {
  const joke = await jokesService.getAJoke()
  const result = rovarsprak.translate(joke)

  res.json({ result })
})

export default router
