export default {
  signUp: firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
  }),
  signIn: firebase.auth().signInWithEmailAndPassword("steven.huynh@stanford.edu","1234").catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);

    if(errorCode === "auth/wrong-password") {
      Alert.alert("Invalid Password");
    } else {
      this.props.navigation.navigate('Main');
    }

  })
}
