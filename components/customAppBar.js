import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function CustomAppBar({ name, showButton, onButtonPress }) {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={{ backgroundColor: "#353535" }}>
      {navigation.canGoBack() && (
        <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />
      )}
      <Appbar.Content title={name} titleStyle={{ color: "white" }} />
      {showButton && (
        <Appbar.Action
          icon="plus"
          onPress={onButtonPress}
          color="white" // Button press handler
        />
      )}
    </Appbar.Header>
  );
}
