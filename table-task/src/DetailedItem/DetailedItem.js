import React from "react";

const DetailedItem = ({ detailItemData }) => {

	let addressCity = detailItemData.address?.city;
	let addressState = detailItemData.address?.state;
	let addressStreetAddress = detailItemData.address?.streetAddress;
	let addressZip = detailItemData.address?.zip;


	return (
		<div>
			<div><b>id:</b> {detailItemData.id}</div>
			<div><b>First Name:</b> {detailItemData.firstName}</div>
			<div><b>Last Name:</b> {detailItemData.lastName}</div>
			<div><b>email:</b> {detailItemData.email}</div>
			<div><b>phone:</b> {detailItemData.phone}</div>
			<div><b>address:</b>
				<div style={{ marginLeft: '15px' }}>
					<div><b>city:</b> {addressCity}</div>
					<div><b>state:</b> {addressState}</div>
					<div><b>streetAddress:</b> {addressStreetAddress}</div>
					<div><b>zip:</b> {addressZip}</div>
				</div>
				<div><b>description:</b> <p>{detailItemData.description}</p></div>
			</div>
		</div >
	)
}

export default DetailedItem;