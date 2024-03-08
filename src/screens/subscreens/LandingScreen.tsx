import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

type RootStackParamList = {
    Notifications: undefined;
    Landing: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList,'Landing'>;
export default function LandingScreen({ navigation }:Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the landing page</Text>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}