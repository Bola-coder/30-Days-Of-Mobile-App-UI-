import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import ellipseImage from "../../assets/images/ellipse.png";
import ellipseImage2 from "../../assets/images/ellipse2.png";
import googleIcon from "../../assets/icons/google.png";
import appleIcon from "../../assets/icons/apple.png";
import facebookIcon from "../../assets/icons/facebook.png";

const Login = () => {
  return (
    <View className="flex-1 bg-white p-3">
      {/* image */}
      <View className="flex-[0.4] justify-center items-center">
        <Image source={ellipseImage} className="absolute top-0 right-[-50px]" />
        <Image
          source={ellipseImage2}
          className="absolute top-0 right-[-80px]"
        />
        <View className="flex-1 mt-[20%] items-center">
          <Text className="text-[30px] font-bold text-center text-[#1F41BB] tracking-wider leading-10 mt-[20px]">
            Login here
          </Text>
          <Text className="text-[20px] font-semibold text-center text-black mt-[20px]">
            Welcome back you’ve been missed!
          </Text>
        </View>
      </View>

      {/* Content */}
      <View className="flex-[1]">
        {/* Form */}
        <View className="mt-4">
          <TextInput
            className="border border-gray-300 rounded-lg p-5 mb-4 bg-[#F1F4FF]"
            placeholder="Email"
            placeholderTextColor={"#626262"}
            style={{ fontSize: 16 }}
          />
        </View>
        <View className="mt-4">
          <TextInput
            className="border border-gray-300 rounded-lg p-5 mb-4 bg-[#F1F4FF]"
            placeholder="Password"
            placeholderTextColor={"#626262"}
            style={{ fontSize: 16 }}
            secureTextEntry
          />
        </View>
        <TouchableOpacity className="mt-4 items-end">
          <Text className="text-[16px] font-semibold text-[#1F41BB]">
            Forgot password?
          </Text>
        </TouchableOpacity>
        {/* Buttons */}
        <View className="mt-8">
          <TouchableOpacity className=" bg-[#1F41BB] px-8 py-5 rounded-xl">
            <Text className="text-white font-semibold text-[20px] text-center">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="mt-10 items-center">
          <Text className="text-[16px] font-semibold text-center text-[#494949]">
            Don't have an account?{" "}
            <Text className="text-[#1F41BB] font-semibold">Register</Text>
          </Text>
        </TouchableOpacity>

        <View className="mt-8">
          <Text className="text-[16px] font-semibold text-center text-[#1F41BB]">
            Or continue with
          </Text>
          <View className="flex-row gap-4 justify-center mt-6">
            <TouchableOpacity className="bg-[#ECECEC] p-4 rounded-lg">
              <Image source={googleIcon} />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#ECECEC] p-4 rounded-lg">
              <Image source={appleIcon} />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#ECECEC] p-4 rounded-lg">
              <Image source={facebookIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
