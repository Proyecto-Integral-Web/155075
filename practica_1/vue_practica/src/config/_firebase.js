import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyCrAw7Dy7XPbIVc8VP1vf7fnCQWRAGNjUE',
  authDomain: 'conexiondatitos.firebaseapp.com',
  databaseURL: 'https://conexiondatitos.firebaseio.com',
  projectId: 'conexiondatitos',
  storageBucket: 'conexiondatitos.appspot.com',
  messagingSenderId: '912119832035',
  appId: '1:912119832035:web:7f05a0d2856f674cd594d6',
  measurementId: 'G-9YRMLGWZ0N'
}

var fireApp = firebase.initializeApp(firebaseConfig)

export default fireApp
