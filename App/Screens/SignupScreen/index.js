import { Text, View, TextInput } from 'react-native';
import React, { useState ,useDispatch} from 'react';
import CommonButton from '../../Components/CommonComponents/Commonbutton';
import styles from './style';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch();

  const validateUsername = (username) => {
    return /^[a-zA-Z0-9]{3,}$/.test(username);
  };

  const validatePassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const validateEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };
  const handleSignup = () => {
    if (validateUsername(username) && validatePassword(password) && validateEmail(email)) {
      dispatch(signupRequest({ username, password, email }));
      navigation.navigate('Login');
    }
  };
  const handleUsernameChange = (val) => {
    setUsername(val);
    if (!validateUsername(val)) {
      setUsernameError('Username is invalid');
    } else {
      setUsernameError('');
    }
  };

  const handlePasswordChange = (val) => {
    setPassword(val);
    if (val.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (!/[A-Z]/.test(val)) {
      setPasswordError('Password must contain at least one uppercase letter');
    } else if (!/[a-z]/.test(val)) {
      setPasswordError('Password must contain at least one lowercase letter');
    } else if (!/\d/.test(val)) {
      setPasswordError('Password must contain at least one digit');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (val) => {
    setEmail(val);
    if (!validateEmail(val)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };

  return (
    <>
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <Text style={styles.signUp}>Sign Up</Text>
        </View>
        <View style={styles.textdata}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            label="username"
            placeholder="Enter your name"
            value={username}
            onChangeText={handleUsernameChange}
          />
          <View style={styles.horizontalLine} />
          <Text style={styles.errorText}>{usernameError}</Text>
        </View>
        <View style={styles.textdata}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            label="password"
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
          />
          <View style={styles.horizontalLine} />
          <Text style={styles.errorText}>{passwordError}</Text>
        </View>
        <View style={styles.textdata}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            label="email"
            placeholder="Enter your email"
            value={email}
            onChangeText={handleEmailChange}
          />
          <View style={styles.horizontalLine} />
          <Text style={styles.errorText}>{emailError}</Text>
        </View>
      </View>
      <CommonButton onPress={handleSignup} title="Signup" disabled={!!usernameError || !!passwordError || !!emailError} />
    </>
  );
};

export default SignupScreen;
