import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { _EmpCard, _Header } from '../components'
import { Searchbar } from 'react-native-paper';
import filter from 'lodash.filter';
const EmpList = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const data = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

    const [filteredData, setFilteredData] = React.useState(data);

    const handleSearch = (query) => {
        const filtered = filter(data, (item) => {
            return item.toLowerCase().includes(query.toLowerCase());
        });
        setSearchQuery(query);
        setFilteredData(filtered);
    };
    return (
        <SafeAreaView>
            <_Header title="Feedback" />
            <View style={{ margin: 10 }}>
                <Searchbar
                    mode='view'
                    placeholder="Search"
                    onChangeText={handleSearch}
                    value={searchQuery}
                    elevation={0}
                    style={{
                        borderRadius: 10,


                    }}
                />
                <FlatList
                    data={filteredData}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={(item) => item.id}
                />
                <_EmpCard onPress={() => {
                    navigation.navigate("FeedbackScreen");

                }} />
                <_EmpCard onPress={() => {
                    navigation.navigate("FeedbackScreen");

                }} />


            </View>
        </SafeAreaView>
    )
}

export default EmpList

const styles = StyleSheet.create({})