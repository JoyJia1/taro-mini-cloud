import React, { FC, useState, useEffect } from "react";
import { View } from "@tarojs/components";
import "./index.scss";

import Login from "../../components/login";
import Number from "../../components/Number";

const Index: FC = () => {
  return (
    <View className="index">
      <Login />
      <Number />
    </View>
  );
};

export default Index;
