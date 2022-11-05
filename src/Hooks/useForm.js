import { useState } from "react";

export function useForm (initialState = {}, validations = [], onSubmit = () => {}) {
    const {isValid: initialIsValid, errors: initialErrors} = validate(validations, initialState)
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialErrors)
    const [isValid, setValid] = useState(initialIsValid)
    const [touched, setTouched] = useState({})
    const changeHandler = ({target: {value, name}}) => {
        const newValues = {...values, [name]: value}
        const {isValid, errors} = validate(validations, newValues)
        setValues(newValues)
        setValid(isValid)
        setErrors(errors)
        setTouched({...touched, [name]: true})
    }
    const submitHandler = event => {
        event.preventDefault()
        onSubmit(values)
    }
    return{values, isValid, errors, touched, changeHandler, submitHandler}
}

export function isRequired(value) {
    return value != null && value.trim().length > 0
}

export function validate(validations, values) {
    const errors = validations
      .map(validation => validation(values))
      .filter(validation => typeof validation === 'object')
    return {isValid: errors.length === 0, errors: errors.reduce((errors, error) => ({...errors, ...error}), {})}
}