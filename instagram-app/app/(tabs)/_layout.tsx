import React from "react";
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#111",
      tabBarInactiveTintColor: "#777",
      tabBarStyle: { height: 62, paddingTop: 8, paddingBottom: 8, borderTopColor: "#e8e8e8", backgroundColor: "#fff" }
    }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) => <Text style={{fontSize:26,color}}>⌂</Text> }} />
      <Tabs.Screen name="search" options={{ title: "Search", tabBarIcon: ({ color }) => <Text style={{fontSize:27,color}}>⌕</Text> }} />
      <Tabs.Screen name="create" options={{ title: "Create", tabBarIcon: ({ color }) => <Text style={{fontSize:27,color}}>＋</Text> }} />
      <Tabs.Screen name="reels" options={{ title: "Reels", tabBarIcon: ({ color }) => <Text style={{fontSize:24,color}}>▣</Text> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color }) => <Text style={{fontSize:23,color}}>●</Text> }} />
    </Tabs>
  );
}
