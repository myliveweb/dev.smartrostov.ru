import React from 'react'
import { Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const required = (value: string) => (value ? undefined : 'error')

interface CustomTextInputProps {
  name: string
  label: string
  helperText: string
  autoFocus: boolean
}

const CustomPasswordInput: React.FC<CustomTextInputProps> = (props) => {
  const { name, label, helperText = 'Заполните поле', autoFocus = false } = {
    ...props,
  }

  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
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
          type={showPassword ? 'text' : 'password'}
          autoComplete={name}
          label={label}
          {...input}
          helperText={meta.error && meta.touched ? helperText : ''}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ position: 'relative', top: '-4px' }}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
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

export default CustomPasswordInput
