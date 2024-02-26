import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type RootStackParamList = {
  Home: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList>;
export default function SignIn({navigation}:Props) {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.main}>
            <Text style={{color:"black"}}>Sign in screen</Text>
            <Button
              title="Go to Home page"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  

const styles = StyleSheet.create({
  main:{
    flex: 1, 
    height:100, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})