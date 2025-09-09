import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen(){
    return(
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Bem Vindo!</Text>
                <Text style={styles.subtitle}>Entre em sua conta</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Ionicons style={styles.inputIcon} size={20} color={"#666666"} name="mail"/>
                    <TextInput style={styles.input} placeholder="E-mail"/>
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons style={styles.inputIcon} size={20} color={"#666666"} name="lock-closed"/>
                    <TextInput style={styles.input} placeholder="Senha"/>
                </View>
            

                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Não tem uma conta?</Text>
                <TouchableOpacity>
                    <Text style={styles.signUpText}> Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer:{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingHorizontal: 24
    },
    header: {
        alignItems: "center",
        marginBottom: 40
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#2196f3"
    },
    subtitle: {
        fontSize: 16,
        color: "#666666"
    },
    loginButton: {
        backgroundColor: "#2196f3",
        height: 50,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    footerText: {
        fontSize: 14,
        color: "#666666"
    },
    signUpText: {
        fontSize: 14,
        color: "#2196f3",
        fontWeight: "bold"
    },
    form: {
        marginBottom: 32
    },
    forgotPasswordText: {
        fontSize: 14,
        color: "#2196f3"
    },
    forgotPassword: {
        alignItems: "flex-end",
        marginBottom: 24
    },
    inputIcon: {
        marginRight: 12
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: "#333"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: "#f8f8f8"
    }
})