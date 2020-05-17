/**
 *author       Rukshan Ranabahu
 *type         Page
 *created      14-05-2020
 *modified     14-05-2020
 *copyright    Zincat Technologies, Sri Lanka
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

// Sample API response for Card Buttons
const Data = [
    {
        url: require('../../../imeges/taxi.png'),
        title: 'Taxi',
    },
    {
        url: require('../../../imeges/food.png'),
        title: 'Food',
    },

    {
        url: require('../../../imeges/grocery.png'),
        title: 'Grocery',
    },
    {
        url: require('../../../imeges/taxi.png'),
        title: 'Taxi',
    },
    {
        url: require('../../../imeges/food.png'),
        title: 'Food',
    },
    {
        url: require('../../../imeges/grocery.png'),
        title: 'Grocery',
    }
];

export class CardButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderElemenItemViewItem = ({ item }) => (<ElemenItemViewItem title={item.title} url={item.url} />)

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <FlatList
                    data={Data}
                    renderItem={this.renderElemenItemViewItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>

        );
    }
}
const ElemenItemViewItem = ({ title, url }) => (
    // card button section UI
    <TouchableOpacity style={styles.container}>
        <Image style={styles.cardIcon} source={url} />
        <Text>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    container: {
        // borderWidth: 0.5,
        height: 100,
        width: 100,
        padding: 20,
        margin: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardIcon: {
        width: 50,
        height: 50
    }
});

export default CardButtons;
