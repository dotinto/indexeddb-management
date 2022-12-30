// open a database
let openRequest = indexedDB.open(name, version);

// openRequest events
openRequest.onupgradeneeded = function(event) {
  let db = openRequest.result;
  // perform version upgrade
  switch(event.oldVersion) {
    case 0: 
      // perform initialization
      break;
    case 1: 
      // perform upgrade
      break;
  }
}
openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};
openRequest.onsuccess = function() {
  let db = openRequest.result;
  // continue working with database using db object
};

// delete a database
let deleteRequest = indexedDB.deleteDatabase(name);

// deleteRequest events
deleteRequest.onsuccess = function() {
  console.log("Database deleted successfully");
};
deleteRequest.onerror = function() {
  console.error("Error", deleteRequest.error);
};

// create an object store
let objectStore = db.createObjectStore(name, {keyPath: keyPath});

// create an index on the object store
let index = objectStore.createIndex(name, keyPath, {unique: true});

// add data to the object store
let request = objectStore.add(data);

// get data from the object store
let request = objectStore.get(key);

// delete data from the object store
let request = objectStore.delete(key);

// update data in the object store
let request = objectStore.put(data);.

Written by Chatsonic