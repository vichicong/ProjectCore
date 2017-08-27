import { FormGroup, FormControl } from '@angular/forms'
import { Validators } from '@angular/forms'

export const emailValidator = Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]')

export const requireDigit = (control: FormControl) => {
  return /\d+/.test(control.value) ? null : {
    requireDigit: true
  }
}

export const requireNonAlphanumeric = (control: FormControl) => {
  return /[^a-zA-Z\d]/.test(control.value) ? null : {
    requireNonAlphanumeric: true
  }
}

export const requireLowercase = (control: FormControl) => {
  return /[a-z]/.test(control.value) ? null : {
    requireLowercase: true
  }
}

export const requireUppercase = (control: FormControl) => {
  return /[A-Z]/.test(control.value) ? null : {
    requireUppercase: true
  }
}

export const matchTo = (firstControlName: string, secondControlName: string) => {
  return (group: FormGroup) => {
    const firstValue = group.value[firstControlName]
    const secondValue = group.value[secondControlName]
    if (firstValue !== secondValue) {
      group.get(secondControlName).setErrors({missMatch: true})
      return {
        missMatch: true,
      }
    } else {
      const errors = group.get(secondControlName).errors
      if (errors && errors.missMatch) {
        delete errors.missMatch
        group.get(secondControlName).setErrors(errors)
      }
    }
  }
}
