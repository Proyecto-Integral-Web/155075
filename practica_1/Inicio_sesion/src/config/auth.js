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
    }
    return null
  },
  async login (data) {
    await fireApp
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(result => {
        router.push({ name: 'profile' })
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  singUp (data) {
    if (data.name === '' || data.email === '' || data.password === '') {
      return console.log('Todos los campos son obligatorios.')
    }
    fireApp
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(result => {
        let newUser = {
          // displayName: result.user.name,
          displayName: data.name,
          email: result.user.email,
          uid: result.user.id
        }
        fireApp
          .auth()
          .updateCurrentUser(newUser)
          .catch(err => console.table(err))
      })
      .catch(err => {
        console.table(err)
      })
    console.log(data)
  },
  getUser () {
    let usuario = {
      nombre: fireApp.auth().currentUser.displayName,
      correo: fireApp.auth().currentUser.email
    }
    return usuario
  }
}
