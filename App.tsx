import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useState} from 'react'

const App = (): JSX.Element => {
  const [bgColor, setBgColor] = useState("#ffffff")
  
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }

    setBgColor(color);
  }
  return (
    // <View>
    //   <Text>App</Text>
    // </View>
    <>
      <StatusBar backgroundColor={bgColor}></StatusBar>
      <View style={[styles.container, {
        backgroundColor:bgColor
      }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
          <View>
            <Text>{bgColor}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#fcba03",
    paddingHorizontal: 40,
    paddingVertical:10
  },
  actionBtnText: {
    fontSize: 24,
    color: "#ffffff",
    textTransform:"uppercase"
  }
})