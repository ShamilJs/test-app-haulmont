import React from 'react'

type TargetPropsType = {
	options: string[]
	name: string
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}


export const Select:React.FC<TargetPropsType> = ({ options, name, onChange }) => {
	return (
		<select
			defaultValue=''
			name={name}
			onChange={onChange}
		>
			<>
				<option value=''>not selected</option>
				{options.map((option: string, i: number) => (
					<option key={i} value={option}>{option}</option>
				))}
			</>
		</select>
	)
}