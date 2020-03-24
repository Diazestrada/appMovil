import React from 'react'
import styles from './styles'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import LinearGradient from 'react-native-linear-gradient'

import ProfeImg from 'assets/images/profe512.png'
import LogoImg from 'assets/images/logo.png'


const BtnMain = ({onPress, text}) => (
  <TouchableOpacity
    style={styles.btnMain}
    onPress={() => onPress()}>
    <Text style={styles.btnMainText}>{text}</Text>
  </TouchableOpacity>
)
const MainScreen = () => {

  return(

    <View>

      <LinearGradient colors={['#ed6e53', '#e95b40']} style={styles.linearContainer}>

        <Image source={LogoImg} style={styles.headerImg} />

        <View style={styles.content}>

          <View style={styles.containerBtn}>

            <BtnMain
              onPress={() => console.warn('online')}
              text={`Ya casicuenteo (Online)`} />

            <BtnMain
              onPress={() => console.warn('registro')}
              text={`Quiero Registrarme`} />

            <BtnMain
              onPress={() => console.warn('offline')}
              text={`Vengo de paso (Offline)`} />    
      
          </View>

          <View style={styles.imgContainer}>
            <Image source={ProfeImg} style={styles.profe} />
          </View>
        
        </View>

      </LinearGradient>      
    
    </View>

  )
}

export default MainScreen