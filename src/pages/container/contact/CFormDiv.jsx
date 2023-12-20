import CusBtn from 'components/CusBtn/CusBtn';
import CusInput from 'components/input/CusInput';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CFormDiv = ({ fn }) => {
  const { t } = useTranslation('form', 'common');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const checkEmail = (email) => {
    return [
      'gmail.com',
      'yahoo.com.tw',
      'outlook.com',
      'yahoo.ca',
      'msn.com',
      'msn.com.tw',
      'yahoo.com',
      'aol.com',
      'protonmail.com',
    ].some((domain) => email.endsWith(domain));
  };
  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (!name) {
      errors['name'] = t('form:required');
      formIsValid = false;
    }

    if (!company) {
      errors['company'] = t('form:required');
      formIsValid = false;
    }

    var regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      errors['email'] = t('form:required');
      formIsValid = false;
    } else if (!regexMail.test(email)) {
      errors['email'] = t('form:checkMailformat');
      formIsValid = false;
    } else if (checkEmail(email)) {
      errors['email'] = t('form:checkMailCompany');
      formIsValid = false;
    }
    setErrors(errors);
    return formIsValid;
  };

  const hadleChange = (tag, fn, value) => {
    errors[tag] && setErrors({ ...errors, [tag]: null });
    fn(value);
  };

  const onSubmit = () => {
    if (validateForm()) {
      fn(true);
    }
  };

  const isSendable = name && company && email;

  return (
    <div className="inputDiv">
      <CusInput
        label={t('form:name')}
        value={name}
        change={(value) => hadleChange('name', setName, value)}
        required={true}
        error={errors?.name || null}
      />
      <CusInput
        label={t('form:company')}
        value={company}
        change={(value) => hadleChange('company', setCompany, value)}
        required={true}
        error={errors?.company || null}
      />
      <CusInput
        type="email"
        label={t('form:mail')}
        value={email}
        change={(value) => hadleChange('email', setEmail, value)}
        required={true}
        error={errors?.email || null}
      />
      <CusInput
        type="textarea"
        value={message}
        change={setMessage}
        subPleace={t('form:remark')}
        h={100}
      />
      <CusBtn
        props={{
          btnStr: t('common:submit'),
          click: onSubmit,
          isDisabled: !isSendable,
          w: '100%',
        }}
      />
    </div>
  );
};

export default CFormDiv;
