import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
	return <Stack />;
}

export const unstable_settings = {
	initialRouteName: "index",
};
