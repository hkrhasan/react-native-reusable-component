import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';

import Router from './src/navigation/Root';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Router />
    </>
  );
}
