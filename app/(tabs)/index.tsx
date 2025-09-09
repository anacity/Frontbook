import PostItem from "@/components/post/Post";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";

export interface PostProps {
    id: number
    author: string
    content: string
    createdDate: string
    likes: number
} 

async function fetchPosts() {
    try {
        const resp = await fetch("http://10.92.199.5:3000/posts")
        const data = await resp.json()
        return data
    } catch (error) {
        console.log("Erro ao buscar os posts")
    }
}

async function createPost(author: string, content: string) {
    try {
        const resp = await fetch("http://10.92.199.5:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                author,
                content,
                createdDate: new Date().toISOString(),
                likes: 0 
            })
        })

        if(!resp.ok){
            throw new Error("Erro ao criar post")
        }

        const newPost = await resp.json()
        return newPost

    } catch (error) {
        console.error("Erro ao criar post", error)
        
    }
}

export default function Timeline() {
    const [posts, setPosts] = useState<PostProps[]>([])
    const [newTextPost, setNewTextPost] = useState("")

    useEffect(() => {
        async function loadPost() {
            const apiPost = await fetchPosts()
            setPosts(apiPost)
        }
        
        loadPost()
    }, [])

    async function handleAddPost() {
        if(newTextPost.trim() == ""){
            console.log("Error, por favor escreva algo antes de postar!")
        }

        if(newTextPost.length > 280){
            console.log("Error, o post deve ter no máximo 280 caracteres!")
        }

        const newPost = await createPost("Ana", newTextPost)
        setPosts((prevPost) => [newPost, ...prevPost])
        
    }

    function handleTextChange(text: string){
        setNewTextPost(text)
    }

    return (
        <View style={styles.container}>
            <View style={styles.newPostContainer}>
                <TextInput style={styles.newPostInput} multiline onChangeText={handleTextChange} placeholder="O que está acontecendo?"></TextInput>
                <TouchableOpacity style={styles.postButton} onPress={handleAddPost}>
                    <Text style={styles.postButtonText}>Postar</Text>
                </TouchableOpacity>

                <ScrollView>
                    {
                        posts.map((post) => (
                            <PostItem post={post}/>
                        ))
                    }
                </ScrollView>
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