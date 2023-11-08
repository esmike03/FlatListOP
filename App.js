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
import Icon from 'react-native-vector-icons/Entypo';
import DATA from './src/users';


const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <UserAvatar size={50} name={item.name} />
    <Text style={[styles.title, {color: textColor}]}>{item.name}{'\n'}<Text style={{fontWeight:200}}>{item.place}</Text></Text>
    <Icon style={{ marginRight: 10, position: 'absolute', marginLeft: 350}}name="dots-three-horizontal" size={30} color="#000" />;
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
    marginTop: 20,
    marginLeft: 15
    
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
   
  },
  place: {

  }
});

export default App;