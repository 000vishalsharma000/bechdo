import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage'; 



function AppFormField({name,width, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched, setFieldValue, values} = useFormikContext();
    return (
        <>
            <AppTextInput
                // icon="email"
                // autoCapitalize="none"
                // autoCorrect={false}
                // keyboardType="email-address"
                // placeholder="Email"
                // textContentType="emailAddress"
                onChangeText={text=>setFieldValue(name, text)}
                onBlur={() => setFieldTouched(name)}
                value={values[name]}
                {...otherProps}
                width={width}
                
            />
            <ErrorMessage error={ errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;