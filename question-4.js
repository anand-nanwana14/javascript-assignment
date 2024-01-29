// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
    const result = {};

    for (let key in flatObject) {
        if (flatObject.hasOwnProperty(key)) {
            const keys = key.split('.');
            let currentLevel = result;

            keys.forEach((currentKey, index) => {
                if (!currentLevel[currentKey]) {
                    if (index === keys.length - 1) {
                        currentLevel[currentKey] = flatObject[key];
                    } else {
                        currentLevel[currentKey] = {};
                    }
                }

                currentLevel = currentLevel[currentKey];
            });
        }
    }

    return result;
}

const flatObject1 = {
    name: 'John',
    'address.city': 'New York',
    'address.zip.primary': 10001,
    'address.zip.secondary': 10002,
    'hobbies.0': 'Reading',
    'hobbies.1': 'Traveling'
};

const unflattenedObject1 = unflatten(flatObject1);
console.log(unflattenedObject1);