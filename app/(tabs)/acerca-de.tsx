import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";

export default function AcercaDeScreen() {
//This screen shows information about the app and contact information about the developers
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <ThemedText type="title" style={{ fontFamily: Fonts.rounded, fontSize: 24, marginBottom: 20 }}>
                Acerca de Vecinos Vigilantes
            </ThemedText>
            <ThemedText style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>
                Vecinos Vigilantes es una aplicación diseñada para mejorar la seguridad comunitaria mediante la colaboración entre vecinos.
            </ThemedText>
            <ThemedText style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>
                Desarrollada por el equipo de Seguridad Comunitaria S.A., nuestra misión es proporcionar herramientas efectivas para la prevención del delito y la promoción de entornos seguros.
            </ThemedText>
            <ThemedText style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>
                Para más información o soporte, contáct anos en:
            </ThemedText>
            <ThemedText style={{ fontSize: 16, marginBottom: 5, textAlign: 'center' }}>
                Email:  contacto@vecinosvigilantes@gmail.com
            </ThemedText>
        </ThemedView>
    );
}