import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
  'projectId':  'monigrow-a9692',
})
cred = credentials.Certificate("C:/Users/Charles-PC/Downloads/monigrow-a9692-58aa1ae4965b.json")
db = firestore.client()

names = []
f = open("commonnames.txt", "r")
for line in f:
    names.append(line)
f.close()

temps = []
f = open("degree.txt", "r")
for line in f:
    temps.append(line)
f.close()

for i in range(0, 165):
    db.collection('plants').add({'name': names[i], 'ph':7, 'temperature': temps[i]})