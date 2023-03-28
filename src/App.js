import Header from './Header'
import { useState, useEffect } from 'react'
import List from './List'

function App() {
	const API_URL = 'https://jsonplaceholder.typicode.com/'
	const [reqType, setReqType] = useState('users')
	const [items, setItems] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function fetchData(reqType) {
			try {
				const res = await fetch(API_URL + reqType)
				const data = await res.json()
				if (!res.ok) throw Error('Unable to fetch')
				setItems([data])
				setError(null)
			} catch (err) {
				setError(err.message)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData(reqType)
	}, [reqType])

	return (
		<div className="App">
			<Header reqType={reqType} setReqType={setReqType} />
			<main>
				{isLoading ? (
					<p className="error-message">Loading...</p>
				) : !error ? (
					<List items={items} />
				) : (
					<p className="error-message">Error Loading the Items</p>
				)}
			</main>
		</div>
	)
}

export default App
