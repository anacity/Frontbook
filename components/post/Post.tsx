import { PostProps } from "@/app/(tabs)";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatDistanceToNow} from "date-fns"
import { ptBR } from "date-fns/locale"

interface PostItemProps {
    post: PostProps
}


export default function PostItem({post} : PostItemProps) {
    return (
        <View style={styles.postContainer}>
            <View style={styles.postHeader}>
                <View style={styles.avatar}>
                    <Ionicons name="person" size={20} color={"#666666"} />
                </View>

                <View style={styles.postInfo}>
                    <Text style={styles.username}>{post.author}</Text>
                    <Text style={styles.timestamp}>{formatDistanceToNow(post.createdDate, {locale: ptBR, addSuffix: true})}</Text>
                </View>
            </View>

            <Text style={styles.postContent}>{post.content}</Text>

            <View style={styles.postActions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="heart-outline" size={20}></Ionicons>
                    <Text style={styles.actionText}>{post.likes}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="chatbubble-outline" size={20}></Ionicons>
                    <Text style={styles.actionText}>9</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="share-outline" size={20}></Ionicons>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    newPostContainer: {
        backgroundColor: "#fff",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0"
    },
    newPostInput: {
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        minHeight: 80,
        textAlignVertical: "top",
        fontSize: 16
    },
    postButton: {
        backgroundColor: "#2196f3",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: "flex-end"
    },
    postButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14
    },
    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#e0e0e0",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12
    },
    postInfo: {
        flex: 1
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#333"
    },
    timestamp: {
        fontSize: 12,
        color: "#666666",
        marginTop: 2
    },
    postContainer: {
        backgroundColor: "#fff",
        marginBottom: 8,
        padding: 16
    },
    postContent: {
        fontSize: 16,
        lineHeight: 22,
        color: "#333",
        marginBottom: 12,
        marginTop: 12
    },
    postActions: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#f0f0f0",
        paddingTop: 12
    },
    actionButton: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 24
    },
    actionText: {
        color: "#666",
        fontSize: 14,
        marginLeft: 4
    }
})