import React from 'react';
interface CheckboxChange extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    checked: boolean;
    disabled: boolean;
}
interface CheckboxGroupProps {
    defaultChecked?: boolean;
    defaultDisabled?: boolean;
    onChange?: (checkboxes: CheckboxChange[]) => void;
}
declare const _default: React.NamedExoticComponent<CheckboxGroupProps>;
export default _default;
