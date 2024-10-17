import { Tabs } from "expo-router";
import { Ionicons} from "@expo/vector-icons";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions ={{
            tabBarActiveTintColor: "#ffd33d",
        }}
    >
      <Tabs.Screen 
      name="index" options={{
        headerTitle: "Louis",
        title: "Home",
        tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
      }} />
      <Tabs.Screen name="about" options={{
        headerTitle: "About",
        title: "About",
        headerTintColor: "black",
        tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={24} color={color} />,
      }} />
      <Tabs.Screen name="not-found" options={{}}/>
    </Tabs>
  );
}
