import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function CityListItem({ city, onPress }) {
    const { id, city_name, country } = city;

    return (
        <View style={styles.listContain}>
            <Icon name="search" size={18} color="#9E9E9E" style={styles.inputIcon} />

            <TouchableOpacity onPress={() => onPress(city)} style={styles.wrapper}>
                <View>
                    <Text style={styles.title}>{city_name}</Text>
                    <Text style={styles.subtitle}>{country}</Text>
                </View>

                <Icon name="chevron-right" size={12} color="#9E9E9E" style={styles.inputIcon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
	listContain: {
		flexDirection: 'row',
		height: 60,
		paddingVertical: 5,
		paddingHorizontal: 10,
		alignItems: 'center',
	},
    wrapper: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputIcon: {
        width: 50,
        textAlign: 'center'
    },
    title: {
        fontWeight: '600'
    },
    subtitle: {
        color: '#929296'
    }
});

export default CityListItem;