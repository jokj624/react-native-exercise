import React, {useCallback, useState} from 'react';
import { View, Text, Image, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iPerson } from './person';
const avatarSize = 50;

const showPerson = (person : iPerson) => {
    const [commentCount, setCommentCount] = useState<number>(person.counts.comment);
    const [retweetCount, setRetweetCount] = useState<number>(person.counts.retweet);
    const [heartCount, setHeartCount] = useState<number>(person.counts.heart);
    const avatarPressed = useCallback(() => {
        Alert.alert('Avatar Pressed!');
    }, []);
    const deletePressed = useCallback(()=> {
        Alert.alert('Delete Pressed!');
    }, []);
    const increaseComment = useCallback(() => {
        setCommentCount(commentCount+1);
    }, [commentCount]);
    const increaseRetweet = useCallback(() => {
        setRetweetCount(retweetCount+1);
    }, [retweetCount]);
    const increaseHeart = useCallback(() => {
        setHeartCount(heartCount+1);
    }, [heartCount]);
    return (
        <View style= { styles.view } >
            <View style={ styles.leftView }>
                <TouchableOpacity onPress={ avatarPressed }>
                    <Image style={ styles.avatar } source = {{ uri: person.avatar }} />
                </TouchableOpacity>
            </View>
            <View style = { styles.rightView } >
                <Text style={ styles.name }> { person.name } </Text>
                <Text style = { styles.email } > { person.email } </Text>
                <View style = { styles.dateView } >
                    <Text style={ styles.text }> { person.createdDate.toDateString() } </Text>
                    <TouchableOpacity onPress={ deletePressed }>
                        <Icon name="trash-can-outline" size = {26} color = { Colors.lightBlue500 } />
                    </TouchableOpacity>
                </View>
                <Text style = { [styles.text, styles.comments]} numberOfLines = {3}> { person.comments } </Text>
                <Image style = { styles.image } source = {{ uri: person.image }}/>
                <View style={styles.countView}>
                    <View style={{flexDirection:'row'}} >
                        <TouchableOpacity>
                            <Icon name="comment" onPress={increaseComment} size = {26} color = {Colors.lightBlue600} />
                        </TouchableOpacity>
                        <Text style={styles.text}>{commentCount}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity>
                            <Icon name="twitter-retweet" onPress={increaseRetweet} size={26} color={Colors.lightBlue600} />
                        </TouchableOpacity>
                        <Text style={styles.text}>{retweetCount}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity>
                            <Icon name="heart" onPress = {increaseHeart} size={26} color={Colors.red400} />
                        </TouchableOpacity>
                        <Text style={styles.text}>{heartCount}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row', backgroundColor: Colors.lime100, padding: 5,
        borderWidth: 2, borderColor: Colors.lime900,
    },
    leftView: { padding: 5 },
    rightView: { flex: 1, padding: 5, marginRight: 10 },
    avatar: {
        borderColor: Colors.blue500, borderWidth: 2, width: avatarSize,
        height: avatarSize, borderRadius: avatarSize / 2,
    },
    name: { marginRight: 5, fontSize: 22, fontWeight: '500' },
    email: {
        textDecorationLine: 'underline', color: Colors.blue500,
        textDecorationColor: Colors.blue500,
    },
    dateView: {
        flexDirection: 'row', justifyContent: 'space-between', padding: 3, marginTop: 5,
    },
    text: { fontSize: 16 },
    comments: { marginTop: 10, fontSize: 16 },
    image: { height: 150, marginTop: 15 },
    countView: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 3
    },
});

export default showPerson;