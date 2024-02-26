import { Button, View } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type RootStackParamList = {
    Notifications: undefined;
    Landing: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList,'Notifications'>;
export default function NotificationsScreen({ navigation }:Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}