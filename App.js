import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';

const DATA = [
  {
    id: 1,
    name: "FELISILDA, ARNOLD JAMES",
    place: "Singapore, Valencia"
},
{
    id: 2,
    name: "PAGUICAN, NICOLE JAMES",
    place: "Canada, Jagna"
},
{
    id: 3,
    name: "GARCIA, RODEL",
    place: "Japan, Hanopol"
},
{
    id: 3,
    name: "TAHIL, ADRIAN JANE",
    place: "Japan, Hanopol"
},
{
    id: 3,
    name: "JAGUNOS, JOANA",
    place: "Japan, Hanopol"
},
{
    id: 3,
    name: "MIRABITE, MIC ROLAND",
    place: "Japan, Hanopol"
},
{
    id: 3,
    name: "CARBONILLA, MARLON",
    place: "Japan, Hanopol"
},
{
    id: 3,
    name: "TABANYAG, JOHN",
    place: "Japan, Hanopol"
},
{
  id: 3,
  name: "TADLAS, KENNETH",
  place: "Japan, Hanopol"
},
{
  id: 3,
  name: "ESCUADRO, NELBREY",
  place: "Japan, Hanopol"
},
{
  id: 3,
  name: "BUCIA, WARREN",
  place: "Japan, Hanopol"
},
{
  id: 3,
  name: "DONDOYANO, SHERLINE",
  place: "Japan, Hanopol"
},
{
  id: 3,
  name: "BONGCARAS, AIREEN MAE",
  place: "Japan, Hanopol"
},
{
  id: 3,
  name: "SARABIA, EARL MIKE",
  place: "Japan, Hanopol"
},
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <UserAvatar size={50} name="Avishay Bar" />
    <Text style={[styles.title, {color: textColor}]}>{item.name}{'\n'}<Text style={{fontWeight:200}}>{item.place}</Text></Text>


    
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#fffff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    alignItems: 'center'
  },
  item: {
    padding: 10,
    flexDirection: 'row'

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  place: {

  }
});

export default App;