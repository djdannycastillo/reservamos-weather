import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import WeatherDaily from './WeatherDaily';
import WeatherHeader from './WeatherHeader';

const API_KEY = 'a5a47c18197737e8eeca634cd6acb581';

function CityWeather({ city }) {
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState(null);

    const { city_name, long, lat } = city;

    useEffect(() => {
        getWeatherInfo();
    }, []);

    const getWeatherInfo = async () => {
        setIsLoading(true);

        try {
            const resp = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=es&units=metric&appid=${API_KEY}`);
            const weather_resp = await resp.json();

            setWeather(weather_resp);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const WeatherContent = () => {
        if (weather) {
            return (<>
                <WeatherHeader cityName={city_name} weather={weather} />
                <WeatherDaily weather={weather} />
            </>)
        }
        
        return null
    }

    return (
        <ScrollView style={styles.container}>
            {isLoading 
                ? <ActivityIndicator style={{padding: 20}} />
                : <WeatherContent />
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    }
});

export default React.memo(CityWeather);