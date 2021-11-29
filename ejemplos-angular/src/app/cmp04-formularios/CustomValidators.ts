import { AbstractControl, ControlContainer, ValidationErrors, ValidatorFn } from "@angular/forms"

type ErrorForm = null | ValidationErrors

export const esEmail = (control: AbstractControl): ErrorForm => {
  const datosError: any = {}
  if (!control.value.includes('@')) {
    datosError['@'] = true
  }
  if (!control.value.includes('.es') && !control.value.includes('.com')) {
    datosError['extension'] = true
  }
  return Object.keys(datosError).length > 0 ? {email: datosError} : null
}

export const esPassword = (masSegura: boolean = false): ValidatorFn => {
  return (control: AbstractControl) => {
    const datosError: any = {}

    if (control.value.length < 8) {
      datosError.length = {
        actualLength: control.value.length,
        requiredLength: 8
      }
    }

    if (masSegura) {
      if (control.value.toLowerCase() === control.value) {
        datosError.mayusculas = true
      }
    }

    return Object.keys(datosError).length > 0 ? {password: datosError} : null
  }
}


export default {
  esEmail,
  esPassword
}