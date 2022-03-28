import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function SearchHeader({ 
	searchText,
	onChangeSearchText, 
	onClearSearchText, 
	onSubmit 
}) {
    return (
        <View style={styles.header}>
            <View style={styles.inputBox}>
                <Icon name="search" size={18} color="#9E9E9E" style={styles.inputIcon} />

                <View style={styles.inputSearch}>
                    <TextInput
                        onChangeText={onChangeSearchText}
                        value={searchText}
                        style={styles.inputText}
                        returnKeyType="search"
                        placeholder="Escribe tu ciudad"
                        onSubmitEditing={() => onSubmit(searchText)}
                    />
                    {searchText?.length > 0 && 
                        <Pressable onPress={onClearSearchText}>
                            <Icon name="times" size={18} color="#9E9E9E" style={styles.inputIcon} />
                        </Pressable>
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		height: 60,
		paddingVertical: 5,
		paddingHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputBox: {
		flexDirection: 'row',
		width: '100%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#EDF2F6',
		borderRadius: 12,
		paddingHorizontal: 10,
	},
	inputSearch: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '100%',
	},
	inputText: {
		//backgroundColor: 'red',
		width: '75%'
	},
	inputIcon: {
		width: 45,
		textAlign: 'center',
		borderRadius: 6
		//backgroundColor: 'blue'
	}
});

export default SearchHeader;