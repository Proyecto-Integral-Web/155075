import fireApp from './_firebase'
import router from '@/router'

export default {
  logOut () {
    fireApp.auth().signOut()
    router.push({ name: 'Login' })
  },
  async checkUser () {
    let user = await fireApp.auth().currentUser
    if (user) {
      return user
    } return null
  },
  login (data) {
    fireApp.auth().signInWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        router.push({ name: 'profile' })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  singUp (data) {
    if (data.name === '' || data.email === '' || data.password === '') {
      return console.log('Todos los campos son obligatorios.')
    }
    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((result) => {
      let newUser = {
        displayName: result.user.name,
        email: result.user.email,
        uid: result.user.id
      }
      fireApp.auth().updateCurrentUser(newUser).catch(err => console.table(err))
    }).catch((err) => {
      console.table(err)
    })
    console.log(data)
  }
}
