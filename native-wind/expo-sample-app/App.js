import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-amber-200" >
            <Image
                blurRadius={70}
                source={require('./assets/bg.png')}
                className="absolute h-full w-full"/>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />


        </View>
    );
}

