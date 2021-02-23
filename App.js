import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [validCode, setValidCode] = useState('')  /*為輸入框宣告一個變數*/
  const inputJudge = () => {
    if (validCode.length < 10) {
      return <Text>請完整輸入您的手機號碼</Text>
    } else {
      if (validCode === '0935888888') {
        return <Text style={styles.inputRight}>號碼輸入正確</Text>
      } else {
        return <Text style={styles.inputErr}>您忘了自己的電話嗎?請重新輸入一次!</Text>
      }
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        <Text style={styles.mainText}>請輸入您的手機號碼</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.TextInputStyle}
          placeholder="請輸入您的手機號碼"  /*輸入前的提示字*/
          maxLength={10} /*可輸入字數*/
          onChangeText={(text) => setValidCode(text)}
          value={validCode}
          keyboardType={'numeric'} /*鍵盤類型*/
          secureTextEntry={false} /*密碼*/
          editable={true}  /*限制不可輸入true,false*/
          autoFocus={true}  /*自動焦點*/
        />
        <Text>您輸入的手機號碼為:{validCode}</Text>
        <Text>{inputJudge()}</Text>
      </View >
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#8fc56d',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  mainText: {
    fontSize: 16,
    lineHeight: 20,
    textShadowColor: '#000',
    color: '#ea0b0b',
    borderBottomColor: '#ea0b0b',
    borderTopColor: '#ea0b0b',
  },
  TextInputStyle: {
    height: 30,
    width: 300,
    color: 'blue',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputErr: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputRight: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
}
);