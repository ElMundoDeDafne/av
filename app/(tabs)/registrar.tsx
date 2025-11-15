import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// --- Componente del Formulario ---
export default function RegistroVecinoScreen() {

  const triggerAlarm = () => {
        window.alert("Registro exitoso");
            // Muestra un diálogo de confirmación similar al de Java
            Alert.alert(
                "Registro de vecino",
                "¿Estás seguro de que deseas activar la alarma vecinal? Esta acción alertará a todos.",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    {
                        text: "SÍ, ACTIVAR",
                        onPress: () => {
                            // AQUÍ iría la lógica para enviar la petición al servidor (Axios, Fetch, etc.)
                            window.alert("Registro de vecino.");
                            Alert.alert("Nuevo vecino", "¡Se ha registrado el vecino de forma exitosa!");
                            
                            // NOTA: La lógica para reproducir el sonido fuerte en los receptores
                            // se maneja en el backend y los servicios push (FCM) del lado nativo.
                        }
                    }
                ],
                { cancelable: false }
            );
  }
  // 1. Estado para almacenar todos los datos del formulario
  const [formData, setFormData] = useState({
    primerNombre: '',
    segundoNombre: '',
    calleUno: '',
    calleDos: '',
    referencias: '',
    numeroCasa: '',
    lote: '',
  });

  // 2. Función para manejar el cambio en cualquier campo de entrada
  const handleInputChange = (name = '', value = '') => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 3. Función para manejar el envío del formulario
  const handleSubmit = () => {
    // Aquí es donde enviarías los datos a tu API o los guardarías.
    console.log('Datos del Nuevo Vecino Registrados:', formData);

    // Puedes agregar una lógica de validación simple aquí
    if (!formData.primerNombre || !formData.calleUno || !formData.numeroCasa) {
      alert('Por favor, complete los campos obligatorios: Primer Nombre, Calle Uno y Número de Casa.');
      return;
    }

    // Lógica de éxito (ej: limpiar el formulario después de enviar)
    alert(`¡Vecino ${formData.primerNombre} registrado con éxito!`);
    setFormData({
        primerNombre: '',
        segundoNombre: '',
        calleUno: '',
        calleDos: '',
        referencias: '',
        numeroCasa: '',
        lote: '',
    });
  };

  // 4. Componente de Input Reutilizable
  const FormInput = ({ label = '', name = '', placeholder = '', keyboardType = 'default' }) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        // value={formData[name]}
        onChangeText={(text) => handleInputChange(name, text)}
        // keyboardType={keyboardType}
      />
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Registro de Nuevo Vecino</Text>

        {/* --- Sección de Datos Personales --- */}
        <Text style={styles.sectionTitle}>Datos Personales</Text>
        <FormInput
          label="Primer Nombre *"
          name="primerNombre"
          placeholder="Ej: Juan"
        />
        <FormInput
          label="Segundo Nombre (opcional)"
          name="segundoNombre"
          placeholder="Ej: Carlos"
        />

        {/* --- Sección de Datos de Domicilio --- */}
        <Text style={styles.sectionTitle}>Datos de Domicilio</Text>
        <FormInput
          label="Calle Principal *"
          name="calleUno"
          placeholder="Ej: Av. Los Álamos"
        />
        <FormInput
          label="Entre Calle (Calle Dos)"
          name="calleDos"
          placeholder="Ej: Calle 3 y 4"
        />
        <FormInput
          label="Referencias de Ubicación"
          name="referencias"
          placeholder="Ej: Casa azul, cerca del parque"
        />

        {/* --- Números de Identificación de Domicilio --- */}
        <View style={styles.row}>
          <View style={styles.halfInput}>
            <FormInput
              label="Número Casa *"
              name="numeroCasa"
              placeholder="Ej: 123"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.halfInput}>
            <FormInput
              label="Lote"
              name="lote"
              placeholder="Ej: A-15"
            />
          </View>
        </View>

        {/* --- Botón de Envío --- */}
        <TouchableOpacity style={styles.button} onPress={triggerAlarm}>
          <Text style={styles.buttonText}>Registrar Vecino</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40, // Espacio extra para que el teclado no cubra
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
    marginTop: 15,
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  halfInput: {
    width: '48%', // Distribuye el espacio entre dos inputs
  },
  button: {
    backgroundColor: '#007AFF', // Color azul de iOS/clásico
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});