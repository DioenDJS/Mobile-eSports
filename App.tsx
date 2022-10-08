import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App eSports</Text>

      <Button title="send"/>
      <StatusBar style="auto" backgroundColor="#c6c6c6"/>
    </View>
  );
}

interface ButtonProps{
  title: string
}

function Button(props: ButtonProps){
  return (
    <TouchableOpacity>
      <Text style={styles.titlButton}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    color:"#c6c6c6",
    fontSize:26
  },
  titlButton:{
    color:"#c6c6c6",
    fontSize:26,
    borderStyle: 'solid',
    borderColor: "#c6c6c6",
    
    // borderStyle: 1 solid #c6c6c6
  }
});
