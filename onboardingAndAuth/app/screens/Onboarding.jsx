import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import onboardingImage from "../../assets/images/onboarding.png";
import ellipseImage from "../../assets/images/ellipse.png";
import ellipseImage2 from "../../assets/images/ellipse2.png";

const Onboarding = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };
  return (
    <View className="flex-1 bg-white p-3">
      {/* image */}
      <View className="flex-[1.2] justify-center items-center">
        <Image source={ellipseImage} className="absolute top-0 right-[-50px]" />
        <Image
          source={ellipseImage2}
          className="absolute top-0 right-[-80px]"
        />
        <Image source={onboardingImage} style={{ width: 300, height: 300 }} />
      </View>
      {/* Content */}
      <View className="flex-[1] justify-between">
        {/* Texts */}
        <View className="flex-1">
          <Text className="text-[35px] font-semibold text-center text-[#1F41BB] tracking-wider leading-10 mt-[20px]">
            Discover Your {"\n"} Dream Job here
          </Text>
          <Text className="text-[14px] font-normal text-center text-black mt-[20px]">
            Explore all the existing job roles based on your interest and study
            major
          </Text>
        </View>

        {/* Buttons */}
        <View className="flex-1 flex-row gap-2 justify-between items-center mt-8">
          <TouchableOpacity
            className="flex-1 bg-[#1F41BB] px-8 py-5 rounded-xl"
            onPress={handleLoginPress}
          >
            <Text className="text-white font-semibold text-[20px] text-center">
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 bg-white px-8 py-5 rounded-xl"
            onPress={handleRegisterPress}
          >
            <Text className="text-black font-semibold text-[20px] text-center">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
