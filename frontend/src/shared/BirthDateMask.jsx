import { IMaskInput } from 'react-imask';
import { forwardRef } from 'react';

const BirthDateMask = forwardRef(function TextMaskCustom(props, ref) {
	const { onChange, ...other } = props;
	return (
		<IMaskInput
			{...other}
			mask='00-00-0000'
			definitions={{
				'#': /[1-9]/,
			}}
			inputRef={ref}
			onAccept={(value) =>
				onChange({ target: { name: props.name, value } })
			}
			overwrite
		/>
	);
});

export default BirthDateMask;
