import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, View } from "react-native";

type RootStackParamList = {
    Notifications: undefined;
    Landing: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList,'Landing'>;
export default function LandingScreen({ navigation }:Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}