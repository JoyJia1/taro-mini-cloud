import React, { FC, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

const Number: FC = () => {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
    // wx.showLoading({
    //   title: '正在add'
    // })
    // cloud
    Taro.cloud
      .callFunction({
        name: 'add',
        data: {
          $url: 'createLog',
          data: {
            _id: 333,
            number,
            date: new Date(),
            openid: '222'
          }
        }
      })
      .then(res => {
        console.log('res', res);
      });
      // wx.hideLoading()
  };

  return (
    <View className="index">
      <Button onClick={add}>add +</Button>
      <Text>number: {number}</Text>
    </View>
  );
};

export default Number;
