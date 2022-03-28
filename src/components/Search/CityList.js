import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CityListItem from './CityListItem';

function CityList({ cities, onPress }) {
    return (
        <>
            {cities.length > 0
                ? <FlatList
                        data={cities}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => 
                            <CityListItem city={item} onPress={onPress} />}
                    />
                : <View style={styles.emptyPlaceholder}>
                    <Icon name="cloud" size={18} color="#9E9E9E" style={styles.icon} />
                    <Text style={styles.title}>Bienvenido al clima</Text>
                    <Text style={styles.subtitle}>Ingresa tu ciudad en el buscador para conocer cómo está el clima</Text>
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    emptyPlaceholder: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },
    icon: {
        fontSize: 80
    },
    title: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    subtitle: {
        color: '#929296',
        textAlign: 'center',
        fontSize: 13,
        marginTop: 5
    },
});

export default CityList;