import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

export function forbiddenNameValidator(control: AbstractControl): { dob: boolean } | null {
  console.log(control)
  //let date: number = fg.get("dob")!.value.getFullYear();
  let now: number = Date.prototype.getFullYear()

  //console.log(date)
  console.log(now)


    if((now) > 18){
      return {dob: true}
    }

    else{
      return null;
    }


}
