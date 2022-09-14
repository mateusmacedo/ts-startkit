import { ConsoleHello } from '@/infra/ConsoleHello'

describe('ConsoleHello', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should say hello on console', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    const consoleHello = new ConsoleHello()
    const message = 'Hello World'
    const result = consoleHello.hello(message)
    expect(consoleSpy).toHaveBeenCalledWith(message)
    expect(result).toEqual(message)
  })
})
