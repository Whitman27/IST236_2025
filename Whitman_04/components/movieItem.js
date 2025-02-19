import { Image, View, Text, StyleSheet, } from "react-native";
//Function representing a movie item
function MovieItem(props) {
    return(
        // Container for the entire movie item
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                 {/* Text component for displaying the movie title */}
                <Text style={styles.itemTitle}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                {/* Image component to display the movie image */}
                <Image style={styles.itemImage} source={props.image}/>
            </View>
            <View style={styles.ratingContainer}>
                {/* Text component for displaying the movie rating */}
                <Text style={styles.itemRating}>{props.rating} / 10</Text>
            </View>
        </View>
    );
}
// Export the MovieItem component to be used in App.js
export default MovieItem;

// Styles for the MovieItem component
const styles = StyleSheet.create({
    itemContainer:{
        marginBottom:20
    },
    titleContainer:{
        backgroundColor: "green", 
        borderWidth: 6,
        borderRadius: 6

    },
    itemTitle:{fontSize:50,
        fontStyle: "italic", 
        fontWeight: "bold", 
        textAlign: "center",        
    },
    imageContainer:{
        alignItems: "center", 
        borderWidth: 3,
        borderRadius: 6
    },
    itemImage:{
        width:"100%",
        height: 500,
        resizeMode: "cover"

    },
    ratingContainer:{
        backgroundColor: "green", 
        borderWidth: 6,
        borderRadius: 6
    },
    itemRating:{
        fontSize:30,
        textAlign: "center",  
    },

})