import React from "react";
import {useStateContext} from "../../context/ContextProvider";
import GoogleMapReact from "google-map-react";
import {map_api_key} from "../../config";
import styles from "./MapContainer.module.scss";

const MapContainer = () => {
	const {locations, setModal} = useStateContext();

	const cordinates = {
		center: {
			lat: 6.5227,
			lng: 3.4218,
		},
		zoom: 10,
	};

	const renderMarkers = (map, maps, locations) => {
		locations.map((location) => {
			return new maps.Marker({
				position: {lat: location.lat, lng: location.lng},
				map,
				title: location.name,
			});
		});
	};

	return (
		<div className={styles.container} onClick={() => setModal(false)}>
			<GoogleMapReact
				bootstrapURLKeys={{key: map_api_key}}
				defaultCenter={cordinates.center}
				defaultZoom={cordinates.zoom}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({map, maps}) =>
					renderMarkers(map, maps, locations)
				}></GoogleMapReact>
		</div>
	);
};

export default MapContainer;
