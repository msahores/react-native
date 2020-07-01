import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const FetchImage = () => {
	const [image, setImage] = useState({});

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then(response => response.json())
			.then(json => setImage(json[0]));
	}, []);

	const renderImg = () => (
			<Image
        style={styles.image}
        source={{
          uri: image.url
        }}
      />
	)
	return (
		<View style={styles.imgContainer}>
			<Text>Image: {image.title}</Text>	
		  {image && renderImg()}
		</View>
	)}

const styles = StyleSheet.create({
	imgContainer: {
		flex: 1, 
		alignItems: 'center',
	},
	image: {
		width: 600, 
		height: 600,
	}
})
export default FetchImage;
