## hello-nest js

### nestjs cli 설치

```
npm i -g @nestjs/cli
```


### 프로젝트 생성

```
nest new hello-nestjs
```

### 모듈 생성하기

src/ 내에 `module name` directory 가 생성됨

```
nest g module `module name`
```


### Controller 생성하기

`module name` 에 해당하는 module 에 controller 를 생성함

`--no-spec` 옵션은 spec 파일을 생성하지 않음

```
nest g controller `module name` --no-spec
```


### Service 생성하기

`module name` 에 해당하는 module 에 service 를 생성함

```
nest g service boards --no-spec
```


### DTO

데이터 유효성 검증

더 안정적인 코드를 만들어 줌


### Pipes levels

Handler level

parameter level

global level


### Custom Pipe

`import { PipeTransform } from '@nestjs/common';`

PipeTransform 을 구현한 class 를 만든다.


`transform` method 를 구현한다.

```typescript

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  transform(value: any) {
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status option`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const option = this.StatusOptions.find((option) => option === status);
    return option !== undefined;
  }
}

```

### typeorm

설치

```
npm install pg typeorm @nestjs/typeorm --save
```

document

https://docs.nestjs.com/techniques/database

#### remove() vs delete()

remove 는 삭제할 대상이 없는 경우 404 오류

delete 삭제 대상이 있는지 확인하지 않음
