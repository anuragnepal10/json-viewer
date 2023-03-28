import React from 'react'

const List = ({ items }) => {
	return (
		<ul className="items">
			{items[0].map((item, index) => (
				<li key={index} className="item">
					{JSON.stringify(item)}
				</li>
			))}
		</ul>
	)
}

export default List
