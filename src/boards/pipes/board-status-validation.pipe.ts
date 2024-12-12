import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';

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
