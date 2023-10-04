import React, { useState } from "react"
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList } from 'react-native'
import { Avatar, Button } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import { COLORS } from "../constants";
import { fontScale, heightScale } from "../utils/Dimentions";

const FeedbackScreen = () => {
    const [rating, setRating] = useState(0)
    const [feedback, setFeedback] = useState('')

    const handleSubmit = () => {
        // Handle submit logic here
        console.log("rating")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileContainer}>
                <Avatar.Image size={100} source={{ uri: 'https://picsum.photos/700' }} />
                <Text style={styles.name}>John Wilson</Text>
                <Text style={styles.designation}>Software Engineer</Text>
            </View>

            <View style={styles.ratingContainer}>
                <Rating
                    startingValue={4}
                    ratingCount={5}
                    imageSize={30}
                    onFinishRating={(rating) => {
                        setRating(rating)
                        console.log("rating", rating)
                    }}
                    style={styles.rating}
                />
            </View>

            <View style={styles.feedbackContainer}>
                <TextInput
                    label="Feedback"
                    value={feedback}
                    placeholder="Write your feedback here..."
                    placeholderTextColor={COLORS.black}
                    onChangeText={(text) => setFeedback(text)}
                    multiline
                    style={styles.feedbackInput}
                />
                <Button
                    mode="contained"
                    onPress={handleSubmit}
                    style={styles.submitButton}
                >
                    Submit
                </Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: heightScale(10),
        marginHorizontal: 10,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    name: {
        marginTop: heightScale(10),
        fontSize: fontScale(18),
        fontWeight: 'bold',
    },
    designation: {
        marginTop: 10,
        fontSize: fontScale(16),
    },
    ratingContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    rating: {
        paddingVertical: 10,
    },
    feedbackContainer: {
        flex: 1,
        width: '100%',
    },
    feedbackInput: {
        backgroundColor: COLORS.bglightblue,
        paddingTop: heightScale(20),
        padding: 20,
        marginTop: heightScale(10),
        height: '60%',
        fontSize: fontScale(20),
        borderRadius: 10,

    },
    submitButton: {
        marginTop: heightScale(10),
        marginBottom: heightScale(10)
    },
})

export default FeedbackScreen