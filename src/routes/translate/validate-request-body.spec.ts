import { validateRequestBody } from './validate-request-body'

const mockNext = jest.fn()
const mockRes = {
  json: jest.fn().mockReturnThis(),
  status: jest.fn().mockReturnThis(),
}

describe('routes', () => {
  describe('translate', () => {
    describe('validate-request-body', () => {
      describe('for valid body', () => {
        beforeAll(() => {
          validateRequestBody(
            { body: { text: 'Hello, world!' } } as any,
            mockRes as any,
            mockNext,
          )
        })

        it('calls the next(...) function', () => {
          expect(mockNext).toHaveBeenCalledTimes(1)
        })
      })

      describe('for invalid body', () => {
        beforeAll(() => {
          validateRequestBody({} as any, mockRes as any, mockNext)
        })

        it('calls the next(...) function', () => {
          expect(mockRes.status).toHaveBeenCalledTimes(1)
        })
      })
    })
  })
})
