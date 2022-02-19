import React, { useEffect, useState } from "react";
import ArrowUp from "../svg/arrowUp";
import ArrowDown from "../svg/arrowDown";



const Table = ({ contactData, sortData, directionSort, detailRow }) => {

	const [fieldData, setFieldData] = useState('')

	const Arrow = () => {
		return (
			directionSort ? <ArrowUp /> : <ArrowDown />
		)
	}

	const fieldSortData = (field) => {
		sortData(field)
		setFieldData(field)
	}

	return (
		<table className='table'>
			<thead>
				<tr>
					<th onClick={() => { fieldSortData('id') }}>
						id {fieldData === 'id' ? <Arrow /> : null}
					</th>
					<th onClick={() => { fieldSortData('firstName') }}>
						firstName {fieldData === 'firstName' ? <Arrow /> : null}
					</th>
					<th onClick={() => { fieldSortData('lastName') }}>
						lastName {fieldData === 'lastName' ? <Arrow /> : null}
					</th>
					<th onClick={() => { fieldSortData('email') }}>
						email {fieldData === 'email' ? <Arrow /> : null}
					</th>
					<th onClick={() => { fieldSortData('phone') }}>
						phone {fieldData === 'phone' ? <Arrow /> : null}
					</th>
				</tr>
			</thead>
			<tbody>
				{contactData.map(
					(item => (
						<tr key={item.phone} onClick={() => detailRow(item)}>
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