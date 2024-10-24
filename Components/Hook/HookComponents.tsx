import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Estudiante } from '../../Modelos/Estudiantes'



export default function HookComponents() {
    const [students, setStudents] = useState<Estudiante[]>(() => [
        { id: 1, name: 'Juan' },
        { id: 2, name: 'María' },
        { id: 3, name: 'Carlos' },
        { id: 4, name: 'Ana' },
        { id: 5, name: 'Luis' },
        { id: 6, name: 'Pedro' },
        { id: 7, name: 'Sofía' },
        { id: 8, name: 'Javier' },
        { id: 9, name: 'Laura' },
        { id: 10, name: 'Diego' },
    ]);

    const [contador,setContador]= useState (0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStudents((students) => {
                setContador( contador + 1); // Incrementar el contador
                return students.map((student) => ({
                    ...student,
                    // solo actualizamos el contador
                }));
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);


  return (
      <View>
          <Text style={style.text}>Lista de Estudiantes</Text>
          <Text style={style.text}>Actualizaciones: {contador}</Text>
          <View style={style.table}>

              <View style={style.header}>
                  <Text style={style.headerText}>ID</Text>
                  <Text style={style.headerText}>Nombre</Text>
              </View>

              {students.map((student) => (
                  <View key={student.id} style={style.row}>
                      <Text style={style.cell}>{student.id}</Text>
                      <Text style={style.cell}>{student.name}</Text>
                  </View>
              ))}


          </View>

      </View>
    
  )
}

const style = StyleSheet.create({
    text:{
        color: 'white'
    },
    table: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      },
    header: {
        flexDirection: 'row',
        padding: 10,
        
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
        
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },

      cell: {
        color:'white',
        flex: 1,
        textAlign: 'center',
      },
    
})