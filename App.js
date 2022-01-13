import React from 'react'
import {Text} from 'react-native';
import codePush from 'react-native-code-push';



const App = () => {
  return (
    <>
       <Text>Шинэчлэлт</Text>
       <Text>шууд шинэчлэлт орж байна уу.</Text>
    </>
  );
};

export default codePush(App);