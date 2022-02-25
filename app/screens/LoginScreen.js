import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import AppScreen from '../components/AppScreen';
import { AppForm, AppFormField, ErrorMessage, SubmitButton} from '../components/forms'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    const auth = useAuth()

    const [loginFailed, setLoginFailed] = useState(false)

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password)
        if(!result.ok) return setLoginFailed(true)
        setLoginFailed(false)

        auth.logIn(result.data)
    }


    return (
        <AppScreen style={styles.container}>
            <Image 
               style={styles.logo}
               source={require("../assets/images/logo-red.png")} 
            />

            <AppForm
                initialValues={{email:'', password:''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
             >
                 <ErrorMessage error="Invalid email and/or password" visible={loginFailed}/>
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    icon="email"
                    textContentType="emailAddress" 
                    />

                <AppFormField
                        autoCapitalize="none" 
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password" 
                        />

                <SubmitButton title="Login" />

            </AppForm>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:10
    },
    logo: {
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20
    }
})

export default LoginScreen;