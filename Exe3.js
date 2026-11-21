import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity, Alert, Image, Button} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';

const datasource = [
  {
    data: [
      {name: 'Pikachu', card:'25'},
      {name: 'Voltorb', card:'100'},
    ],
    title: "Electric",
    bgcolor: 'yellow',
    icon: 'bolt',
    iconColor: 'black',
  },
  {
    data: [
      {name: 'Charmander', card:'4'},
      {name: 'Growlithe', card:'58'},
    ],
    title: "Fire",
    bgcolor: 'orange',
    icon: 'fire',
    iconColor: 'red'
  }
];

const renderItem = ({item, index, section}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}
                        onPress={() => {Alert.alert("pokemon card " + item.card + ", " + item.name) } }
      >
        <Text style={styles.textStyle}> {item.name}</Text>
        <Image source={{uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.card + '-2x.png'}} style={{width:200, height:300}} />
        {/*<Text style={styles.textStyle}>{index + 1}. {section.title} {item.key}</Text>*/}
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>L10 Pokemon List</Text>
        {/*<FlatList data={datasource}*/}
        {/*          renderItem={renderItem}/>*/}
        <Button
            title="Add Pokemon"
            onPress={() =>
                Alert.alert("Add Pokemon","Not learnt yet, will learn in next lesson"
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
    fontSize: 15,
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