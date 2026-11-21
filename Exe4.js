import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity, Alert, Image, Button} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';

const datasource = [
  {
    data: [
      {
        name: 'Predator',
        sizeno: '44',
        image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/0b49391b667b41e6931a09c0fb8226a6_9366/Predator_Elite_Firm_Ground_Football_Boots_Black_IE1804_22_model.jpg'
      },
      {
        name: 'Copa',
        sizeno: '42',
        image: 'https://tse1.mm.bing.net/th/id/OIP.-nTpnKsed-OSupVkJaPTsgHaHa?r=0&pid=Api&h=220&P=0'
      },
    ],
    title: "Adidas",
    bgcolor: 'lightblue',
    icon: 'futbol',
    iconColor: 'grey',
  },
  {
    data: [
      {
        name: 'Mercurial',
        sizeno: '40',
        image: 'https://tse2.mm.bing.net/th/id/OIP.Nc3wFS5lZjinlN0YYrCAhQHaHa?r=0&pid=Api&h=220&P=0'
      },
      {
        name: 'Tiempo',
        sizeno: '38',
        image: 'https://tse4.mm.bing.net/th/id/OIP.D-NVlyTn0Yxo3VhEZR0RdAHaHa?r=0&pid=Api&h=220&P=0'
      },
    ],
    title: "Nike",
    bgcolor: 'lightblue',
    icon: 'shoe-prints',
    iconColor: 'black'
  }
];

const renderItem = ({item, index, section}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}
                        onPress={() => {
                          Alert.alert("Size " + item.sizeno + ", " + item.name)
                        }}
      >
        <Text style={styles.textStyle}> {item.name} (Size {item.sizeno})</Text>
        <Image source={{uri: item.image}} style={{width: 200, height: 200}}/>
        {/*<Text style={styles.textStyle}>{index + 1}. {section.title} {item.key}</Text>*/}
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>L10 Football Boots List</Text>
        {/*<FlatList data={datasource}*/}
        {/*          renderItem={renderItem}/>*/}
        <Button
            title="Add Football Boots"
            onPress={() =>
                Alert.alert("Add Football Boots", "Not learnt yet, will learn in next lesson"
                )}
        />

        <SectionList sections={datasource}
                     contentContainerStyle={{padding: 10}}
                     renderItem={renderItem}
                     renderSectionHeader={({section: {title, bgcolor, icon, iconColor}}) => (
                         <View style={[styles.headerView, {backgroundColor: bgcolor}]}>
                           <Icon name={icon} size={24} color={iconColor}/>
                           <Text style={styles.headerText}>{title}</Text>
                         </View>
                     )}/>


        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'left',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});