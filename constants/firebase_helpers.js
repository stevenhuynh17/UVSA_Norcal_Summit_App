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

    else {
      this.props.navigation.navigate('Main');
    }

  })
}
