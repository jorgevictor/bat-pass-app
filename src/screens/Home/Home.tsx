import React from "react";
import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./Styles";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContainer}
    >
      <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
          <BatLogo />
        </View>

        <View style={styles.inputContainer}>
          <BatButton />
        </View>
        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
}
