import React, { useEffect, useState } from "react";



const Table = ({ contactData, sortData }) => {

	return (
		<table className='table'>
			<thead>
				<tr>
					<th onClick={() => { sortData('id') }}>id</th>
					<th onClick={() => { sortData('firstName') }}>firstName</th>
					<th onClick={() => { sortData('lastName') }}>lastName</th>
					<th onClick={() => { sortData('email') }}>email</th>
					<th onClick={() => { sortData('phone') }}>phone</th>
				</tr>
			</thead>
			<tbody>
				{contactData.map(
					(item => (
						<tr key={item.phone}>
							<td>{item.id}</td>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
						</tr>
					))
				)}
			</tbody>
		</table>
	)
}

export default Table;