import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform{
    transform(residents: any[], value: any) {
        return residents.filter((resident) => {
            if(value === ''){
                return true;
            }
            return resident.gender === value;
        });
    }
}