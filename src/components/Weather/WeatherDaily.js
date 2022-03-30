import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { dateFormat, tempFormat } from '../../utils';

const { width } = Dimensions.get('screen');

function WeatherDaily({ weather }) {
    const daily = [...weather.daily];
    const filteredTempAsc = daily?.sort((a, b) => b.humidity - a.humidity);

    return (
        <View style={styles.dailyContainer}>
            <Text style={styles.title}>Temperatura</Text>
            <Text style={styles.subtitle}>Próximos días</Text>
            <View style={styles.daily}>
                {weather.daily?.map((item, index) => (
                    <View key={index} style={styles.dailyItem}>
                        <View style={styles.dailyTemp}>
                            <Text>{dateFormat(item.dt, 'ddd')}</Text>
                            <Image source={{
                                uri: `https://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`,
                            }} resizeMode='contain' style={styles.weatherImage} />
                            <Text style={styles.littleText}>{tempFormat(item.temp.day)}</Text>
                        </View>

                        <View style={styles.dailyHumidity}>
                            <Icon name="droplet" size={12} color="#9E9E9E" />
                            <Text style={[styles.littleText, filteredTempAsc[0].humidity === item.humidity ? styles.colorRed : styles.colorGray ]}>{item.humidity}%</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 16
    },
    subtitle: {
        color: '#929296',
    },
    dailyContainer: {
        marginTop: 20
    },
    daily: {
        flexDirection: 'row',
    },
    dailyItem: {
        padding: 5,
        width: Number(width - 30) / 8,
    },
    dailyTemp: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dailyHumidity: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    littleText: {
        fontSize: 12
    },
    weatherImage: {
        flex: 1,
        width: 25,
        height: 25,
        justifyContent: 'flex-end'
    },
    colorRed: {
        color: 'red',
        fontWeight: '600'
    },
    colorGray: {
        color: 'gray'
    }
});

export default WeatherDaily;