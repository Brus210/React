import { useState } from "react";


export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({target}) => {
        const {name,value} = target;

        //cambiamos el estado del formulario
        setFormState({
            //destructuramos el estado actual
            ...formState,
            
            [name]: value
        });
    }
  
    const onResetForm = () => {
        setFormState(initialForm);
    }
  
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
