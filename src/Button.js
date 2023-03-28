import React from 'react'

const Button = ({ reqType, setReqType, btnName }) => {
	return (
		<button
			className={reqType === btnName ? 'btn selected' : 'btn'}
			onClick={() => setReqType(btnName)}
		>
			{btnName}
		</button>
	)
}

export default Button
