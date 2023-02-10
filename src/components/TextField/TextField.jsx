import { useCallback, useState } from 'react';

import { useToggle } from '../../hooks/useToggle';

import { SvgIcon } from '../SvgIcon';
import { Button } from '../Button';

import styles from './TextField.module.scss';

function TextField({ type = 'text', name, label, value, required, register, error, errorMessage }) {
	const [showPassword, toggleShowPassword] = useToggle(false);
	const [isFocus, setIsFocus] = useState(!!value?.toString().length);

	const inputRegister = register(name);
	const fullLabel = label + (required ? '*' : '');

	const getHiddenButtonClasses = () => {
		return showPassword ? styles.textFieldHiddenButton_show : styles.textFieldHiddenButton;
	};

	const handleFocus = useCallback(() => {
		setIsFocus(true);
	}, []);

	const handleBlur = useCallback((event) => {
		inputRegister.onBlur(event);
		if (!event.target.value.length) {
			setIsFocus(false);
		}

	}, [inputRegister]);

	return (
		<div className={`${styles.inputField} ${isFocus ? styles.focused : ''} ${error ? styles.error : ''}`}>
			<div className={styles.inputFieldContainer}>
				<label>
					<span>{fullLabel}</span>
					<input
						type={showPassword ? 'text' : type}
						defaultValue={value}
						{...inputRegister}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>

					{type === 'password' && (
						<Button
							className={getHiddenButtonClasses()}
							type="none"
							buttonType="button"
							onClick={toggleShowPassword}
						>
							<SvgIcon
								svgClass="text-field__password"
								name="password"
								width="20"
								height="20"
							/>
						</Button>
					)}
				</label>
				<fieldset>
					<legend><span>{fullLabel}</span></legend>
				</fieldset>
			</div>
			<div className={styles.inputFieldError}>{errorMessage}</div>
		</div>
	);

}

export { TextField };