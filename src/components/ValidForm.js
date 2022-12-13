const emailValidation = (value, name) => {
    if (value.trim() === '') {
      return 'Email is required';
    }
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value,))
    {
      return null;
    }
      return 'Please enter a valid email';
    }

  const otherValidation = (value, name) => {
    if (value.trim() === '') {
        return name.charAt(0).toUpperCase()+name.slice(1)+' is required';
      }
      return null;
    }

  const validate = {
      email: emailValidation,
      name: otherValidation,
      subject: otherValidation,
      message: otherValidation,
    }

export default validate;