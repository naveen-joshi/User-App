import { Pipe, PipeTransform } from '@angular/core';
import { Member } from '../model/member.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(members: Member[], filterValue: string): Member[] {
    if (!members || !filterValue) {
      return members;
    }

    return members.filter((member) => {
      member.firstName
        .toLocaleLowerCase()
        .includes(filterValue.toLocaleLowerCase());
    });
  }
}
