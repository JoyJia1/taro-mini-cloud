import { getSystemInfoSync } from '@tarojs/taro';
import { DeviceInfoState } from '../actions/deviceInfo';
import reducerCreater, { Matution } from './reducerCreater';

function getServiceInfo() {
  try {
    const info = getSystemInfoSync();
    const isIOS = /iOS/i.test(info.system);
    return {
      statusBarHeight: info.statusBarHeight,
      isIOS,
      navH: isIOS ? 48 : 44
    };
  } catch (err) {
    return { statusBarHeight: 20, isIOS: true, navH: 48 };
  }
}

const INITIAL_STATE: DeviceInfoState = getServiceInfo();

const matutions: { [key: string]: Matution<DeviceInfoState> } = {};

const deviceInfo = reducerCreater<DeviceInfoState>(INITIAL_STATE, matutions);

export default deviceInfo;
