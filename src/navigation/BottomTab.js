import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import MainStack from "./MainStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SaveScreen from "../screens/SaveScreen/SaveScreen";

const Tab = createMaterialBottomTabNavigator();

const ExploreScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Explore Screen</Text>
    </View>
  );
};

const FavouritesScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Favourites Screen</Text>
    </View>
  );
};

const PantryScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Pantry Screen</Text>
    </View>
  );
};

function BottomTab({ newTheme }) {
  const theme = useTheme();
  return (
    <NavigationContainer theme={newTheme}>
      <Tab.Navigator
        activeColor={newTheme.colors.primary}
        initialRouteName="Voyage"
        labeled={false}
        barStyle={{
          backgroundColor: theme.colors.background,
          height: 55,
          elevation: 0,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="compass" color={color} size={25} />
            ),
          }}
          name="Voyage"
          component={MainStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={25} />
            ),
          }}
          name="Explore"
          component={ExploreScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={25} />
            ),
          }}
          name="Favourites"
          component={SaveScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={25} />
            ),
          }}
          name="Pantry"
          component={PantryScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTab;
