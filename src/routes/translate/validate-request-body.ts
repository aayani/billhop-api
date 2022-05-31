import Ajv, { JSONSchemaType } from 'ajv'
import { Request as ExpressRequest, Response, NextFunction } from 'express'

const ajv = new Ajv()

const Schema: JSONSchemaType<{ text: string }> = {
  type: 'object',
  properties: { text: { type: 'string' } },
  required: ['text'],
  additionalProperties: false,
}

const validate = ajv.compile<{ text: string }>(Schema)

export const validateRequestBody = (
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
) => {
  const value = validate(req.body)

  if (!value) {
    res.status(400).json({ message: 'Bad or no text provided' })
    return
  }

  next()
}
