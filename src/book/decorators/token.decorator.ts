import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Token = createParamDecorator(
  (data: string, excutionContext: ExecutionContext) => {
    const request = excutionContext.switchToHttp().getRequest();
    console.log(request);

    const auth = request.headers['authorization'] || '';
    // console.log('Authorization : ',auth);
    const authArray = auth.split(' ');
    const token = authArray[1];
    console.log('Get token :', token);
    return token ? token : null;
  },
);
