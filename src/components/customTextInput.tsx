import React from 'react'
import { Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField'

const required = (value: string) => (value ? undefined : 'error')

interface CustomTextInputProps {
  name: string
  label: string
  helperText: string
  autoFocus: boolean
}

const CustomTextInput: React.FC<CustomTextInputProps> = (props) => {
  const { name, label, helperText = 'Заполните поле', autoFocus = false } = {
    ...props,
  }

  return (
    <Field name={name} validate={required}>
      {({ input, meta }) => (
        <TextField
          margin="dense"
          required
          fullWidth
          id={name}
          style={{ paddingBottom: '1px', height: '60px' }}
          type="text"
          autoComplete={name}
          label={label}
          {...input}
          helperText={meta.error && meta.touched ? helperText : ''}
          InputProps={{
            autoFocus: autoFocus,
            error: meta.error && meta.touched,
          }}
          inputProps={{ error: meta.error && meta.touched }}
          InputLabelProps={{ error: meta.error && meta.touched }}
          FormHelperTextProps={{ error: meta.error && meta.touched }}
        />
      )}
    </Field>
  )
}

export default CustomTextInput
