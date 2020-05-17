/**
 *author       Rukshan Ranabahu
 *type         Page
 *created      14-05-2020
 *modified     14-05-2020
 *copyright    Zincat Technologies, Sri Lanka
 */

import React from 'react';
import {
    StyleSheet,
    Image,
    FlatList,
    ImageBackground,
    View,
    Text,
} from 'react-native';

// Sample API response for Deals
const Deals = [
    {
        url: require('../../../imeges/offer1.jpg'),
        place: 'Burger king - Mt. lavinia',
        description: 'Western, cuisine, Fast Food Burger',
        distance: '254m',
        time: '6-10min',
    },
    {
        url: require('../../../imeges/offer2.jpg'),
        place: 'Burger king - Mt. lavinia',
        description: 'Western, cuisine, Fast Food Burger',
        distance: '254m',
        time: '6-10min',
    },
    {
        url: require('../../../imeges/offer3.jpg'),
        place: 'Burger king - Mt. lavinia',
        description: 'Western, cuisine, Fast Food Burger',
        distance: '254m',
        time: '6-10min',
    },
    {
        url: require('../../../imeges/offer4.jpg'),
        place: 'Burger king - Mt. lavinia',
        description: 'Western, cuisine, Fast Food Burger',
        distance: '254m',
        time: '6-10min',
    }
];

export class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderElemenItemViewItem = ({ item }) => (<ElemenItemViewItem place={item.place} url={item.url} description={item.description} distance={item.distance} time={item.time} />)
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <FlatList
                    data={Deals}
                    renderItem={this.renderElemenItemViewItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>

        );
    }
}
//   Deal Item Card View UI
const ElemenItemViewItem = ({ place, url, description, distance, time }) => (
    <View style={styles.container}>
        <ImageBackground source={url} style={styles.image}>
        </ImageBackground>
        <View>
            <Text style={styles.itemPlaceText}>{place}</Text>
            <Text style={styles.itemDescText}>{description}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.itemCardBottoBar}>
            <ElemenRatingView />
            <View style={styles.starBar}>
                <View style={styles.bottomTextBox}><Text style={styles.bottomText}>{distance}</Text></View>
                <View style={styles.bottomTextBox}><Text style={styles.bottomText}>{time}</Text></View>
            </View>
        </View>
    </View>
);

const ElemenRatingView = ({ }) => (
    <View style={styles.starBar}>
        <Image style={styles.star} source={require('../../../imeges/star.png')} />
        <Image style={styles.star} source={require('../../../imeges/star.png')} />
        <Image style={styles.star} source={require('../../../imeges/star.png')} />
        <Image style={styles.star} source={require('../../../imeges/star.png')} />
        <Image style={styles.star} source={require('../../../imeges/starb.png')} />
        <Text style={styles.itemDescText}>4.0</Text>
    </View>
);
const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 300,
        margin: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 7,
    },
    image: {
        height: 160,
        width: 300,
        margin: 0,
        padding: 0
    },
    itemPlaceText: {
        margin: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
    itemDescText: {
        color: '#808080',
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 15,
    },
    line: {
        borderTopWidth: 0.5,
        margin: 10
    },
    starBar: {
        flexDirection: 'row',
        margin: 10
    },
    star: {
        height: 15,
        width: 15,
        margin: 2
    },
    itemCardBottoBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    bottomTextBox: {
        backgroundColor: '#bdbdbd',
        margin: 1,
        padding: 7,
        justifyContent: "center",
        alignItems: "center",
        height: 23,
        borderRadius: 5
    },
    bottomText: {
        color: "#fff"
    }
});

export default ItemCard;
