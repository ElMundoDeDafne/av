import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda la pantalla
        backgroundColor: '#333333', // Fondo gris oscuro
        padding: 16,
        // Usamos justifyContent para centrar verticalmente, 
        // similar a como lo haría un RelativeLayout con centerInParent
        justifyContent: 'space-around', // Distribuye el espacio entre los elementos
        alignItems: 'center', // Centra horizontalmente
    },
    titleTextView: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 40, // Espacio superior
        textAlign: 'center',
    },
    instructionsTextView: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 30, // Margen para que no toque los bordes
    },
    panicButton: {
        // Dimensiones del círculo
        width: 250,
        height: 250,
        borderRadius: 125, // La mitad del tamaño para hacerlo circular
        
        // Colores definidos en tu drawable/button_panic_background.xml
        backgroundColor: '#D32F2F', 
        borderWidth: 4,
        borderColor: '#B71C1C',
        
        // Centrar el texto dentro del botón
        justifyContent: 'center', 
        alignItems: 'center',
        
        // Ajuste de posición para centrar el botón en el layout
        marginBottom: 80,
    },
    panicButtonText: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
    },
});


const PanicScreen = () => {
    
    // Función que se ejecutaría al presionar el botón
    const triggerAlarm = () => {
        // Muestra un diálogo de confirmación similar al de Java
        Alert.alert(
            "Confirmar Alarma",
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
                        console.log("Alerta enviada a la API.");
                        Alert.alert("Alerta Enviada", "¡La alerta ha sido enviada a tus vecinos!");
                        
                        // NOTA: La lógica para reproducir el sonido fuerte en los receptores
                        // se maneja en el backend y los servicios push (FCM) del lado nativo.
                    }
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            
            <Text style={styles.titleTextView}>Alarma Vecinal</Text>
            
            <Text style={styles.instructionsTextView}>
                Presiona el botón SÓLO en una emergencia real.
            </Text>

            {/* TouchableOpacity para crear el botón interactivo */}
            <TouchableOpacity 
                style={styles.panicButton}
                onPress={triggerAlarm}
                activeOpacity={0.7} // Efecto de pulsación
            >
                <Text style={styles.panicButtonText}>¡PÁNICO!</Text>
            </TouchableOpacity>

        </View>
    );
};

export default PanicScreen;