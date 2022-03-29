import { ChangeEvent, useState } from "react"

export const useForm = <T>( initialState: T ) => {
	
	const [formData, setFormData] =  useState( initialState );

	const reset = () => {
		setFormData( initialState );
	}

	const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {

    setFormData( prev => ({
      ...prev,
      [ event.target.name ]: event.target.value,
    }));

	}

	return { 
    ...formData,

    formData,
    onChange,
    reset
  }
  
	
}