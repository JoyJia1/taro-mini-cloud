import { Reducer } from 'redux';

export type Payload = {
  [key: string]: any;
};
export type Matution<T> = (state: T, payload?: Payload) => T;
export type Matutions<T> = {
  [key: string]: Matution<T>;
};
export default function reducerCreater<T>(
  initialState: T,
  mutations: Matutions<T>
): Reducer<T, { type: string } & Payload> {
  return (state = initialState, { type, ...payload }) =>
    mutations[type] ? mutations[type](state, payload) : state;
}
