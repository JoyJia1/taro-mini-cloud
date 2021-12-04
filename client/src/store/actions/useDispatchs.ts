import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// import { Payload } from '../reducers/reducerCreater';

type FunMap = { [key: string]: (arg: any) => any };
type Dispatcher<T extends FunMap> = {
  [P in keyof T]: (...config: Parameters<T[P]>) => ReturnType<T[P]>;
};
const useDispatchs = <T extends FunMap>(maps: T) => {
  const dispatch = useDispatch();
  const fun = useCallback(() => {
    return Object.entries(maps).reduce((prev, [key, value]) => {
      return {
        ...prev,
        [key]: payload => dispatch((value as Function)(payload))
      };
    }, {}) as Dispatcher<T>;
  }, [dispatch, maps]);
  return fun();
};

export default useDispatchs;
