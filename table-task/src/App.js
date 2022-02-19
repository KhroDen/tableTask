import React, { useEffect, useState } from 'react';
import Table from './table/table';
import Loader from './loader/loader';
import axios from 'axios';



const App = () => {

	const baseUrl = 'http://www.filltext.com/?rows=32&id={...|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

	const [contactData, setContactData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [directionSort, setDirectionSort] = useState(true);

	const sortData = (field) => {
		console.log(field)
		const copyData = contactData.concat();

		let sortData

		if (directionSort) {
			sortData = copyData.sort(
				(a, b) => { return a[field] > b[field] ? 1 : -1 }
			)
		} else
			sortData = copyData.reverse(
				(a, b) => { return a[field] > b[field] ? 1 : -1 }
			)
		setContactData(sortData)
		setDirectionSort(!directionSort)
		console.log(directionSort)
	}



	useEffect(() => {
		axios(baseUrl).then((Response) => {
			//console.log(Response);
			setContactData(Response.data);
			setIsLoading(false);
		});
	}, [])


	return (
		<div className="container">
			{isLoading ? <Loader /> : <Table contactData={contactData} sortData={sortData} directionSort={directionSort} />}
		</div>
	);
}


export default App;