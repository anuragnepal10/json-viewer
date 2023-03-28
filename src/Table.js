import React from 'react'

const Table = ({ items }) => {
	return (
		<table>
			<thead>
				<tr>
					{Object.keys(items[0][0]).map((key, index) => (
						<th key={index.toString()}>{key}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{items[0].map((item, itemIndex) => (
					<tr key={itemIndex.toString()}>
						{Object.values(item).map((val, valIndex) => (
							<td key={valIndex.toString()}>{JSON.stringify(val)}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
