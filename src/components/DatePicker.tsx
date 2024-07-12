import React, { useState, useEffect } from 'react';
import { View, Button, Platform, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  mode: 'date' | 'time' | 'datetime'; // Modo de selección: fecha, hora o fecha y hora
  value: Date; // Valor inicial de la fecha
  onChange: (date: Date) => void; // Función para manejar el cambio de fecha
}

const DatePickerComponent: React.FC<DatePickerProps> = ({
  mode,
  value,
  onChange,
}) => {
  const [date, setDate] = useState(value);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    // Actualizar el estado local si cambia el valor inicial desde las props
    setDate(value);
  }, [value]);

  const showMode = () => {
    setShowDatePicker(true);
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Solo para iOS
    setDate(currentDate);
    onChange(currentDate); // Llama a la función de cambio de fecha del padre
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          Fecha seleccionada: {date.toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={showMode} title={`Seleccionar ${mode}`} />
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dateContainer: {
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default DatePickerComponent;
