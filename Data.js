import React, { useState , useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Switch, ListItem } from 'react-native';
import axios from 'axios'
import Task from './Task'

function Data() {
    const [todos, setTodos] = useState([])  ;

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
         console.log(res)
         setTodos(res.data)
        }).catch(err => {
           console.log(err)
         }) 
       }, [])


    return (
        <View>
                
        {todos.length > 0 ? (
          <Text>
            {todos.map( todo =>(
                <Task key = {todo.id} text = {todo.title} />
                
                ))}
          </Text>
        
      )  : (
        <View>
          <Text>
            Waiting...
          </Text>
        </View>
      )}
        </View>
    )
}

export default Data
