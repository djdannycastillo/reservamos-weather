import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { tempFormat } from '../../utils';

function WeatherHeader({ cityName, weather }) {
    return (
        <View style={styles.container}>
            <View style={styles.leftContent}>
                <Text style={styles.title}>{cityName}</Text>
                <Text style={styles.mainTemp}>{tempFormat(weather.current?.temp)}</Text>
                <Text>{weather.current?.weather[0]?.main} | Se siente de {tempFormat(weather.current?.feels_like)}</Text>
            </View>

            <Image source={{
                uri: `https://openweathermap.org/img/wn/${weather.current?.weather[0]?.icon}@2x.png`,
            }} resizeMode='contain' style={styles.weatherImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    leftContent: {
        width: '70%'
    },
    title: {
        color: 'black',
        fontSize: 16
    },
    mainTemp: {
        color: 'black',
        fontSize: 36,
        marginBottom: 10
    },
    weatherImage: {
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'flex-end',
    }
});

export default WeatherHeader;