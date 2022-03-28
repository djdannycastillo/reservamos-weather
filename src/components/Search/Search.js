import React, { useState } from 'react';
import { SafeAreaView, ActivityIndicator, StatusBar } from 'react-native';

import CityList from './CityList';
import SearchHeader from './SearchHeader';
import Weather from '../Weather/Weather';

const Search = () => {
	const [searchText, setSearchText] = useState('');
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentCity, setCurrentCty] = useState(null);

	const handleChangeSearchText = (text) => {
		setSearchText(text);
	}

	const handleClearSearchText = () => {
		setSearchText('');
		setCurrentCty(null);
	}

	const handleSubmit = async (cityName) => {
		setIsLoading(true);
        setCurrentCty(null);

		const resp = await fetch(`https://search.reservamos.mx/api/v2/places?q=${cityName}`);
		const cities_resp = await resp.json();
		const onlyCities = cities_resp.filter(item => item.result_type === 'city');
		
		setIsLoading(false);
		setCities(onlyCities);
	}

	const handleClickItem = (item) => {
		setCurrentCty(item);
	}

	return (
		<SafeAreaView>
			<StatusBar />
			<SearchHeader 
				searchText={searchText}
				onChangeSearchText={handleChangeSearchText}
				onClearSearchText={handleClearSearchText}
				onSubmit={handleSubmit} 
			/>

			{isLoading 
				? <ActivityIndicator style={{padding: 20}} />
				: (
					!currentCity 
						? <CityList cities={cities} onPress={handleClickItem} />
						: <Weather city={currentCity} />
				)
			}
		</SafeAreaView>
	);
};

export default Search;
