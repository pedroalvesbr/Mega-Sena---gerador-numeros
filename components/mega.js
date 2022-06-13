import React, {Component} from 'react'
import { Text, SafeAreaView, TextInput, Button, View , StyleSheet} from 'react-native'


import MegaNumero from './megaNumero.js'
import Estilo from '../estilos.js'


export default class Mega extends React.Component {

    state ={
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }


    alterarQtdeNumeros = (qtde) =>{
        this.setState({qtdeNumeros: Number(qtde)})

    }

    gerarNumeroNaoContido = nums =>{
        const novo = parseInt(Math.random() * 60 ) +1 
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo

    }

    //paradigma Procedural
    proceduralGenerateNumbers = () =>{
        const {qtdeNumeros} = this.state
        const numeros = []
        for(let i=0; i<qtdeNumeros; i++){
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }
        numeros.sort((a,b) => a-b)
        this.setState({numeros})
    }
    //é a mesma função que proceduralGenerateNumbers, porem no paradigma Funcional
        
    /* gerarNumeros = () =>{
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a,b) => a-b)
        this.setState({numeros})
    }
    */

    exibirNumeros = () =>{
        const nums = this.state.numeros
        return nums.map(i => {        //o 'i' é cada um dos elementos do array numeros-state o map vai transformalos em div do jsx
            return <SafeAreaView><MegaNumero key={nums} num={i}></MegaNumero></SafeAreaView>      //num = nome da propriedade do componente megaNumero
        })
    }



    render(){
        return(
        <>
            <Text style={Estilo.txtGrande}>
                Gerador Mega-Sena
            
            </Text>
            <TextInput
                keyboardType={'numeric'}
                style={{borderBottomWidth: 2}}
                placeholder='quantidade de numeros'
                value={this.state.qtdeNumeros}
                onChangeText={this.alterarQtdeNumeros}
                >

            </TextInput>
            <Button
                title='gerar'
                onPress={this.proceduralGenerateNumbers}>

            </Button>
            
            <SafeAreaView style={Estilo.exibicaoNumeros}>
                {this.exibirNumeros()}
            </SafeAreaView>
            
        
        </>
        )
    }
}
