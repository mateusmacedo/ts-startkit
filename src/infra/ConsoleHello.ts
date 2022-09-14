import { HelloService } from '@/application/HelloService'

export class ConsoleHello extends HelloService {
  hello(message: string): string {
    console.log(message)
    return message
  }
}
