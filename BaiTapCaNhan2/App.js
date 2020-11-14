/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    StyleSheet,  
    TouchableHighlight, 
    View,
    Image, Text
} from 'react-native';
import myStack from './stack';

const undoStack = new myStack();
const redoStack = new myStack();
undoStack.push_back('white')

const App: () => React$Node = () => {
    
    const [colorState,setColor] = useState('#FFFFFF');
    const [isUndoDisabled,setUndo] = useState(true);
    const [isRedoDisabled,setRedo] = useState(true);
    const colorButtonPress = (color)=>
    {
        if(undoStack.top()!=color)
        {
            setColor(color);
            undoStack.push_back(color)
            setUndo(false);
        }
    }
    
    const undoButtonPress = () =>{
        redoStack.push_back(undoStack.top())
        undoStack.pop();
        setColor(undoStack.top());
        setUndo(undoStack.n === 0)
        setRedo(false)
    }

    const redoButtonPress = () =>{
        undoStack.push_back(redoStack.top())
        setColor(redoStack.top());
        redoStack.pop();
        setRedo(redoStack.n === 0)
        setUndo(false)
    }

    const styles = StyleSheet.create({
        square:{
            borderColor:'black',
            borderWidth: 2,
            margin: 10,
            width: 120,
            height: 120,
            backgroundColor: colorState,
            alignSelf: 'center',
    
        },
        buttonContainer:{
            flexDirection: 'row',
            width:'100%',
            height:'50%',
        },
        container:{
            width:'100%',
            height:'100%',
            justifyContent:'flex-start',
            flexDirection: 'column',
        },
        redButton:{
            borderColor:'black',
            borderWidth: 2,
            backgroundColor: 'red',
            width: 40,
            height: 40,
            margin: 10
        },
        blueButton:{
            borderColor:'black',
            borderWidth: 2,
            backgroundColor: 'blue',
            width: 40,
            height: 40,
            margin: 10
        },
        greenButton:{
            borderColor:'black',
            borderWidth: 2,
            backgroundColor: 'green',
            width: 40,
            height: 40,
            margin: 10
        },
        undoButton:{
            borderColor:'black',
            borderWidth: 2,
            width: 40,
            height: 40,
            margin: 10
        },
        image:{
            width:36,
            height:36
        }
    });

    
    return (
    <>  
        <View style={styles.container}>  
            <View style={styles.buttonContainer}>
                <TouchableHighlight style={styles.redButton} onPress={()=>{colorButtonPress('red')}}>
                    <View/>
                </TouchableHighlight>

                <TouchableHighlight style={styles.blueButton} onPress={()=>{colorButtonPress('blue')}}>
                    <View/>
                </TouchableHighlight>

                <TouchableHighlight style={styles.greenButton} onPress={()=>{colorButtonPress('green')}}>
                    <View/>
                </TouchableHighlight>

                <TouchableHighlight style={styles.undoButton} disabled={isUndoDisabled} onPress={undoButtonPress}>
                    <View>
                        <Image source={require('./icon/icons8-undo.png')} style={styles.image}/>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.undoButton} disabled={isRedoDisabled} onPress={redoButtonPress}>
                    <View>
                        <Image source={require('./icon/icons8-redo.png')} style={styles.image}/>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.square}/>
        </View>
        </>
  );
};



export default App;
