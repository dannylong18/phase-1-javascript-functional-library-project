function makeArray (collection) {
    if (Array.isArray(collection)) {
        return collection
    }

    else {
        let array = Object.values(collection)
        return array
    }
}

function myEach (collection, callbackFx) {
    if (Array.isArray(collection)) {
        collection.forEach((element) => callbackFx(element))
    }

    else {
        let array = Object.values(collection)
        array.forEach((element) => callbackFx(element))
    }
    return collection
}

function myMap (collection, callbackFx) {
    if (Array.isArray(collection)) {
        let newArray = collection.map((element) => callbackFx(element))
        return newArray
    }

    else {
        let newArray = Object.values(collection).map((element) => callbackFx(element))
        return newArray
    }
}

function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
      let startIndex = 0;
  
      if (acc === undefined) {
        if (collection.length === 0) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        acc = collection[0];
        startIndex = 1;
      }
  
      for (let i = startIndex; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
  
      return acc;
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
  
      if (acc === undefined) {
        if (keys.length === 0) {
          throw new TypeError('Reduce of empty object with no initial value');
        }
        acc = collection[keys[0]];
        keys.shift();
      }
  
      for (const key of keys) {
        acc = callback(acc, collection[key], collection);
      }
  
      return acc;
    } else {
      throw new TypeError('Unsupported collection type');
    }
  }


function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object') {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (predicate(collection[key], key, collection)) {
          return collection[key];
        }
      }
    }
  
    return undefined;
  }

  function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
      const filteredArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          filteredArray.push(collection[i]);
        }
      }
      return filteredArray;
    } else if (typeof collection === 'object' && collection !== null) {
      const filteredArray = [];
      for (const key in collection) {
        if (predicate(collection[key])) {
          filteredArray.push(collection[key]);
        }
      }
      return filteredArray;
    } else {
      return [];
    }
  }

  function mySize (collection) {
    if (Array.isArray(collection)) {
         return collection.length 
    }
    else {
        let size = Object.keys(collection).length
        return size 
    }
  }

  function myFirst (array, n = 1) {
    if (n === 1) {
        return array[0];
      } else{
        return array.slice(0, n);
      }
    }

function myLast (array, n=1) {
    if (n === 1) {
        return array[array.length - 1];
      } else if (n > 1) {
        return array.slice(-n);
      }
}
    
function myKeys (obj) {
    return Object.keys(obj)
}

function myValues (obj) {
    return Object.values(obj)
}