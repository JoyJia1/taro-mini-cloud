import React, { FC, useState } from 'react';
import { cloud } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

const Login: FC = () => {
  const [context, setContext] = useState<{ [key: string]: any }>({});

  const getLogin = () => {
    cloud
      .callFunction({
        name: 'login',
        data: {}
      })
      .then(res => {
        setContext(res.result as { [key: string]: any });
      });
  };

  return (
    <View className="index">
      <Button onClick={getLogin}>获取登录云函数</Button>
      <Text>context：{JSON.stringify(context)}</Text>
    </View>
  );
};

export default Login;
