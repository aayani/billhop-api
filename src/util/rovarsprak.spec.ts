import * as rovarsprak from './rovarsprak'

describe('util', () => {
  describe('rovarsprak', () => {
    describe('translate(...)', () => {
      let result: string

      beforeAll(() => {
        result = rovarsprak.translate("Hello I'm a pirate")
      })

      it('returns the right result', () => {
        expect(result).toBe("HoHelollolo I'mom a popiroratote")
      })
    })

    describe('reverse(...)', () => {
      let result: string

      beforeAll(() => {
        result = rovarsprak.reverse("HoHelollolo I'mom a popiroratote")
      })

      it('returns the right result', () => {
        expect(result).toBe("Hello I'm a pirate")
      })
    })
  })
})
