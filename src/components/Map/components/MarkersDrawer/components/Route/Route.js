import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Polyline } from '@react-google-maps/api';
import { getRouteDirections } from '../../../../utils';
import Markers from '../Markers';

const Route = ({
	readOnly,
	setMarker,
	routeData,
	callbackOnSuccessDirections,
	callbackOnErrorDirections,
	googleMapsApiKey
}) => {
	const [polylines, setPolylines] = useState([]);

	const fetchPolylines = async () => {
		setPolylines(
			await getRouteDirections({
				routeData,
				callbackOnSuccessDirections,
				callbackOnErrorDirections,
				googleMapsApiKey
			})
		);
	};

	useEffect(() => {
		fetchPolylines();
	}, [routeData]);

	return (
		<>
			<Markers readOnly={readOnly} setMarker={setMarker} markers={routeData.points} />
			<Polyline path={polylines} options={routeData.polylineOptions} />
		</>
	);
};

Route.propTypes = {
	routeData: PropTypes.shape({
		drawRoute: PropTypes.bool,
		points: PropTypes.arrayOf(
			PropTypes.shape({
				position: PropTypes.shape({ lat: PropTypes.number, lng: PropTypes.number })
			})
		),
		polylineOptions: PropTypes.shape({
			strokeColor: PropTypes.string,
			strokeOpacity: PropTypes.number,
			strokeWeight: PropTypes.number
		})
	}),
	readOnly: PropTypes.bool,
	setMarker: PropTypes.func,
	callbackOnSuccessDirections: PropTypes.func,
	callbackOnErrorDirections: PropTypes.func,
	googleMapsApiKey: PropTypes.string
};

export default Route;
