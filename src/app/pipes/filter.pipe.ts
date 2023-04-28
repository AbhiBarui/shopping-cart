import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(value: any[], filterInput: string, prodDesc: string): any[] {
  const resultArray = [];
  if(value.length === 0 || filterInput === ''|| prodDesc === ''){
    return value;
  }
  
  for(const item of value){
    // if(item[prodDesc] === filterInput){
    if((item[prodDesc].toLowerCase()).includes(filterInput.toLowerCase())){
      resultArray.push(item)
    }
  } 
  return resultArray;
}
}
