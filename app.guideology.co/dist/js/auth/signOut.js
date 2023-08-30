const signOut = () => {
    firebase.auth().signOut().then(() => {
        // alert('User Logout Sucessfully')
      }).catch((error) => {
        // alert(error.message)
      });
}
