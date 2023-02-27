interface Validatable {
  value: string | number;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
}

export function validate(validatableInput: Validatable): boolean {
  if (validatableInput.required && !validatableInput.value.toString().trim()) {
    return false;
  }


  if (typeof validatableInput.value === 'string') {
    if (
      validatableInput.maxLength &&
      validatableInput.value.trim().length > validatableInput.maxLength
    ) {
      return false;
    }

    if (
      validatableInput.minLength &&
      validatableInput.value.trim().length < validatableInput.minLength
    ) {
      return false;
    }
  }

  if (typeof validatableInput.value === 'number') {
    if (validatableInput.max && validatableInput.value > validatableInput.max) {
      return false;
    }

    if (validatableInput.min && validatableInput.value < validatableInput.min) {
      return false;
    }
  }

  return true;
}
