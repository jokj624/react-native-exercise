import React, {useMemo} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from 'react-native-paper';
import { createRandomPerson } from './createRandomPerson';
import showPerson from './showPerson';
export default function Item() {
    const people = useMemo(() => {
        return new Array(3).fill(null).map(createRandomPerson);
    }, []);
    return (<View style={styles.view}>
        <Text style={styles.text}>News feed</Text>
        <ScrollView horizontal={false}>
            {showPerson(people[0])}
            {showPerson(people[1])}
            {showPerson(people[2])}
        </ScrollView>
    </View>);
}
const styles = StyleSheet.create({
    view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
    text: { fontSize: 20, color: Colors.white },
    flatList: { width: '100%' },
    itemSeparator: { borderWidth: 1, borderColor: Colors.grey500 }
});