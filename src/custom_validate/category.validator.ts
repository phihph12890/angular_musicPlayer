import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { CategoryService } from "../app/service/category.service";
import { map } from 'rxjs/operators';

export function uniqueCategoryName(cateService: CategoryService): AsyncValidatorFn{
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return cateService.searchByName(c.value).pipe(
      map(cates => {
        return cates && cates.length > 0 ? {uniqueCate: true} : null;
      })
    )
  }
}