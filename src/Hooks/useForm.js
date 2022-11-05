import { useState } from "react";

export function useForm {
    const [values, setValues] = useState({})
    return{values}
}