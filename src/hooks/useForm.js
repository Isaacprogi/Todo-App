import { useState } from 'react'

const useForm = (initialValues) => {
    const [values,setValues] = useState(initialValues)
    const handleChange = (e) => {
      console.log('askansklasnasknasd')
         setValues( {
             ...values,
            [ e.target.name]: e.target.value
         }
         )
    }

  return {values,setValues,handleChange}
}

export default useForm
