const admin = require ('firebase-admin')
const serviceAccount = require ('../training-performance-firebase-adminsdk-93ibu-090c635f59.json')
admin.initializeApp ({
        credential: admin.credential.cert(serviceAccount), 
        databaseURL : "https://training-performance.firebaseio.com/", 
})
const db = admin.firestore(); 
let docRef = db.collection('training-performance').doc('users');

function setData ( name, email) {
  let docRef = db.collection('users')
  docRef.doc (email).set ({
    name: name, 
    email: email
  })
}

function getData () {
  let getda = db.collection('users').doc("email.com").get()
  .then((snapshot) => {
    for(let index in snapshot){
      console.log ( snapshot[index]); 
    }
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
}

