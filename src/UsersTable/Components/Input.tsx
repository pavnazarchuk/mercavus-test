import * as React from 'react';

const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({
  onChange,
  ...props
}) => {
  const [state, setState] = React.useState<string | number | readonly string[]>(
    '',
  );
  React.useEffect(() => {
    const value = props.value ?? '';
    setState(value);
  }, [props.value]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(e);
    }
  };

  return <input {...props} onChange={onChangeHandler} value={state} />;
};

export default Input;
