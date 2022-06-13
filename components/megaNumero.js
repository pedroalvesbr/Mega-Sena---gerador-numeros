import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

import Estilo from '../estilos.js'


export default ({ num }) => { //esse componente espera receber uma propriedade que chamei de 'num'
    return(
        <View style={Estilo.ContainerBolinha}>
        <Text style={[Estilo.txtGrande, Estilo.corNumero]}>
            {num}
        </Text>
        </View>
    )
}