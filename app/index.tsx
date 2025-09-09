import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.appInfo}>
                    <View>
                        <Text style={styles.appName}>FrontBook</Text>
                        <Text style={styles.description}>Compartilhe ideias!</Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <Link href={"/(tabs)"} asChild>
                            <TouchableOpacity style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Entrar</Text>
                            </TouchableOpacity>
                        </Link>

                        <Link href={"/(tabs)"} asChild>
                            <TouchableOpacity style={styles.registerButton}>
                                <Text style={styles.registerText}>Criar conta</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Ao continuar, você concorda com nossos termos de uso</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    appName: {
        color: "#2196f3",
        fontWeight: "bold",
        marginBottom: 8,
        fontSize: 36
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "space-between",
        paddingVertical: 40
    },
    description: {
        fontSize: 16,
        color: "666666",
        textAlign: "center"
    },
    footer: {
        alignItems: "center",
        paddingHorizontal: 20
    },
    footerText: {
        fontSize: 12,
        color: "#999",
        textAlign: "center"
    },
    buttonsContainer: {
        width: "100%",
        paddingBottom: 20
    },
    registerButton: {
        backgroundColor: "transparent",
        height: 50,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#2196f3",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12
    },
    registerText: {
        color: "#2196f3",
        fontSize: 16,
        fontWeight: "bold"
    },
    appInfo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 50
    },
    loginButton: {
        backgroundColor: "#2196f3",
        height: 50,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
})