import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Book = createParamDecorator(
  (data: string, excutionContext: ExecutionContext) => {
    const request = excutionContext.switchToHttp().getRequest();
    console.log(request);
    const bookBody = request.body;

    return bookBody ? bookBody?.[data] : bookBody;
  },
);
