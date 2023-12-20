import FloatLabel from 'components/input/FloatLabel';
import { memo, useMemo } from 'react';

const CusInput = memo(
  ({
    type = 'text',
    label = '',
    value = '',
    change,
    required = false,
    error = null,
    w = '100%',
    h = 50,
    subPleace = null,
  }) => {
    const floatProps = useMemo(() => {
      return {
        value: value,
        label: label,
        required: required,
        error: error,
        w: w,
        h: h,
      };
    }, [error, h, label, required, value, w]);

    return (
      <FloatLabel props={floatProps}>
        {type === 'textarea' ? (
          <textarea
            placeholder={subPleace}
            onChange={(e) => change(e.target.value)}
            value={value}
          />
        ) : (
          <input
            type={type}
            value={value}
            placeholder={subPleace}
            onChange={(e) => change(e.target.value)}
          />
        )}
      </FloatLabel>
    );
  }
);

export default CusInput;
