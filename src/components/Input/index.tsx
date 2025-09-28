import {forwardRef, type InputHTMLAttributes, type Ref} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, ...rest }, ref: Ref<HTMLInputElement>) => (
        <label>
            {label && <span>{label}</span>}
            <input ref={ref} {...rest} />
        </label>
    ),
);

Input.displayName = 'Input';

export default Input;