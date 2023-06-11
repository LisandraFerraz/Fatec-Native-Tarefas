import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Tela1 } from "./src/pages/Tela1";
import { Tela2 } from "./src/pages/Tela2";
import { Tela3 } from "./src/pages/Tela3";
import { Tela4 } from "./src/pages/Tela4";
import { Tela5 } from "./src/pages/Tela5";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Tela1">
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabelStyle: { display: "none" },
            tabBarIcon: ({ focused }) => (
              <>
                <Icon
                  size={18}
                  color={focused ? "red" : "grey"}
                  name="heart"
                ></Icon>
              </>
            ),
          }}
          name="Tela1"
          component={Tela1}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabelStyle: { display: "none" },
            tabBarIcon: ({ focused }) => (
              <>
                <Icon
                  size={18}
                  color={focused ? "red" : "grey"}
                  name="heart"
                ></Icon>
              </>
            ),
          }}
          name="Tela2"
          component={Tela2}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabelStyle: { display: "none" },
            tabBarIcon: ({ focused }) => (
              <>
                <Icon
                  size={18}
                  color={focused ? "red" : "grey"}
                  name="heart"
                ></Icon>
              </>
            ),
          }}
          name="Tela3"
          component={Tela3}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabelStyle: { display: "none" },
            tabBarIcon: ({ focused }) => (
              <>
                <Icon
                  size={18}
                  color={focused ? "red" : "grey"}
                  name="heart"
                ></Icon>
              </>
            ),
          }}
          name="Tela4"
          component={Tela4}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabelStyle: { display: "none" },
            tabBarIcon: ({ focused }) => (
              <>
                <Icon
                  size={18}
                  color={focused ? "red" : "grey"}
                  name="heart"
                ></Icon>
              </>
            ),
          }}
          name="Tela5"
          component={Tela5}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
