import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import ProjectScreen from './components/ProjectScreen';
import MyPortifolio from './components/Portifolio';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" component={MainScreen} title="Home" initial hideNavBar />
                <Scene key="projectScreen" component={ProjectScreen} title="ProjectScreen" hideNavBar />
                <Scene key="myPortifolio" component={MyPortifolio} title="MyPortifolio" hideNavBar />
            </Scene>
        </Router>
    );
};

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileImage}>
                    <Image source={require('./ryan.jpg')} style={styles.image} />
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Hi, my name is Ryan</Text>
                    <Text style={styles.description}>
                        a Developer with nearly two years of experience in React and React Native. I recently created a project that earned $8,851 with 130+ paid users. Before I worked at a company for 1.6 years, refining my skills in React, JavaScript, HTML, and Python scraping. Native in Portuguese and English C2.
                    </Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Education button pressed')}>
                    <Text style={styles.buttonText}>Education</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Actions.projectScreen()}>
                    <Text style={styles.buttonText}>Components</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Actions.myPortifolio()}>
                    <Text style={styles.buttonText}>MyPortifolio</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.ContainerText}>My social media and contacts</Text>
            <View style={styles.ContainerIcon}>
                <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com/projetoeuropam')}>
                    <AntDesign name="youtube" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/projeto.europa/')}>
                    <AntDesign name="instagram" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ryancarlos/')}>
                    <AntDesign name="linkedin-square" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.tiktok.com/@madebryan')}>
                    <MaterialIcons name="tiktok" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:ryancarlos16@gmail.com')}>
                    <MaterialIcons name="email" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('tel:+351962248268')}>
                    <MaterialIcons name="call" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    ContainerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: '40%',
        marginTop: '5%',
    },
    ContainerText: {
        fontSize: 20,
        marginTop: '5%',
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginRight: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    profileInfo: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
        color: '#333',
    },
    buttons: {
        marginTop: 20,
        width: '60%',
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '900',
    },
});

export default App;