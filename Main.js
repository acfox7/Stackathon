import 'react-native-gesture-handler'
import firebase from './firebaseconfig'
import React, { useState } from 'react'
import {
	ViewBase,
	Text,
	Image,
	ScrollView,
	TextInput,
	View,
	FlatList,
	StyleSheet,
	Button,
} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//backgroundColor: '#fff',
		alignItems: 'center',
		//marginTop: 70,
	},
	bigBlue: {
		//color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
})

const Main = ({ navigation }) => {
	const [text, setText] = useState('')
	const [ingredients, setIngredients] = useState([{ key: 'Orange' }])
	return (
		// <ScrollView>
		<View style={styles.container}>
			<View
				style={{
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					//backgroundColor: 'green',
					flex: 1,
				}}
			>
				<Text style={{ margin: 10, fontSize: 20, textAlign: 'center' }}>
					Ingredients:
				</Text>
				<TextInput
					style={{
						height: '10%',
						width: '70%',
						margin: 10,
						//borderColor: 'gray',
						borderWidth: 1,
					}}
					defaultValue={text}
					placeholder="What's in your fridge?"
					onChangeText={(text) => setText(text)}
					//some sort of on submit that adds to ingredients objects of format {key: 'Tomato'}
				/>
			</View>
			<View style={{ width: '70%', alignItems: 'flex-start', flex: 3 }}>
				<FlatList
					data={ingredients}
					renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
					style={{ marginTop: 20 }}
				/>
			</View>
			<Button
				title='Search!'
				onPress={() => navigation.navigate('Ingredients')}
			/>
		</View>
		// </ScrollView>
	)
}

export default Main
