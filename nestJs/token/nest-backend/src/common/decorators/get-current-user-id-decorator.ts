import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const GetCurrentUserId = createParamDecorator((data: any, context: ExecutionContext): number => {
  const request = context.switchToHttp().getRequest()
  return request.user['sub']
})