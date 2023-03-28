import React from 'react'
import Button from './Button'

const Header = ({ reqType, setReqType }) => {
	return (
		<header>
			<Button btnName="users" reqType={reqType} setReqType={setReqType} />
			<Button btnName="posts" reqType={reqType} setReqType={setReqType} />
			<Button btnName="comments" reqType={reqType} setReqType={setReqType} />
		</header>
	)
}

export default Header
