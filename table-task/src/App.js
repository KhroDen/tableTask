import React, { useEffect, useState } from 'react';
import Table from './table/table';
import Loader from './loader/loader';
import axios from 'axios';



const App = () => {

	const baseUrl = 'http://www.filltext.com/?rows=32&id={...|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

	const [smallData, setSmallData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios(baseUrl).then((Response) => {
			//console.log(Response);
			setSmallData(Response.data);
			setIsLoading(false);
		});
	}, [])


	return (
		<div className="container">
			{isLoading ? <Loader /> : <Table smallData={smallData} />}
		</div>
	);
}

export default App;