import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorPrice } from "./validatorPrice.service";

export function priceValidator(): ValidatorFn {
    return (
        // створюємо контрол
        control: AbstractControl
    ): { [key:string]:boolean} | null => {
        //оголошення нового валідатора
        let validator = new ValidatorPrice;
        let valid = validator.validate_price(control.value)
        return valid ? null : {number:true}
    }
}