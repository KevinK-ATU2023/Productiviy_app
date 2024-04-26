import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react'

const on_submit = (name, time, freq) => {
    // add name, time and frequency of task to a database where it can be saved 
    console.log(name)
    console.log(time) 
    console.log(freq) 
}

const Add = () => {
    const [task_name, setTaskName] = useState('')
    const [task_time, setTime] = useState(new Date())
    const [task_frequency, setTaskFrequency] = useState('')

    const frequency_options = [
        {key: 1, value:"Every Monday"},
        {key: 2, value:"Every Tuesday"},
        {key: 3, value:"Every Wednesday"},
        {key: 4, value:"Every Thursday"},
        {key: 5, value:"Every Friday"},
        {key: 6, value:"Every Saturday"},
        {key: 7, value:"Every Sunday"}
    ]

    const update_time = (e, selected_time) => {
        setTime(selected_time)
    }

    return (
        <View style={styles.container}>
        
            <Text>Enter the name of the task:</Text>
            <TextInput style={styles.input_box}
                placeholder='Task Name'
                onChangeText={setTaskName}
            />

            <Text style={styles.text}>When would you like to begin task?</Text>
            <DateTimePicker style={styles.date_picker}
                value={task_time}
                mode={'time'}
                is24Hour={true}
                onChange={update_time}
            />

            <Text>Select Frequency:</Text>
            <SelectList 
                setSelected={(val) => setTaskFrequency(val)} 
                data={frequency_options} 
                save="value"
                placeholder='Select Frequency'
                search={false}
            />

            <TouchableOpacity 
                onPress={on_submit(task_name, task_time, task_frequency)}
                activeOpacity={0.7}
            >
            <Text style={styles.button}>Add!</Text>
            </TouchableOpacity>

            <StatusBar style="dark" />
        </View>
    )
}

export default Add

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 10
    },
    button: {
        padding: 10,
        backgroundColor: "#ededed",
        margin: 20,
        borderWidth: 1,
        borderRadius: 5
    },
    date_picker: {
        marginTop: 5,
        marginBottom: 20
    },
    input_box: {
        borderWidth: 1,
        padding: 10,
        width: 200,
        margin: 20
    },
    select_field: {
        margin: 20
    }
});
