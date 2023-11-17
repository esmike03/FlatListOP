import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  View
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/Entypo';
import DATA from './src/users';
export default function App() {
  const [selectedId, setSelectedId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const show = (item) =>{
    setModalVisible(true);
    setSelectedUser(item);
  };

  const Item = ({item, onPress, backgroundColor, textColor}) => (
  
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}> 
      <UserAvatar size={50} name={item.name} />
      <Text style={[styles.title, {color: textColor}]}>{item.name}{'\n'}<Text style={{fontWeight:200}}>{item.place}</Text></Text>
      <Icon style={{ marginRight: 10, position: 'absolute', marginLeft: 350}} name="dots-three-horizontal" size={30} color="#000" />;
    </TouchableOpacity>
  
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#ffff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => show(item) }
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    
    <SafeAreaView style={styles.container}>
      
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {selectedUser && (
                  <Text style={{fontSize: 18, fontWeight: '500'}}>HELLO! {selectedUser.name}.
                  </Text>
                )}
                {selectedUser && (
                  <Text style={{fontWeight: '100'}}>{selectedUser.place}</Text>
                )}

                <TouchableOpacity onPress={()=> setModalVisible(false)}>
                  <Text style={{marginTop: 25, fontSize: 15, color: '#776B5D'}}>Hide</Text>
                </TouchableOpacity>
                  
                   
               
            </View>
          </View>
        </Modal>

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
    marginLeft: 0
    
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
   
  },
});
