/**
 * Tests if two objects are equal (works with primitives, arrays and objects)
 * @param {object} obj1 
 * @param {object} obj2 
 * @returns {boolean} True if equal (deep equality test) and false otherwise
 */
function deepEquals( obj1, obj2 ) {
    var isEqual = true, latestResult;

    // if obj1 is not an object (typeof null is 'object' - so we test that separately)
    if( typeof obj1 === null || typeof obj1 !== 'object' ) {
        return obj1 === obj2;
    }

    // if obj1 and obj2 are arrays, then their items should be equal
    if( obj1 instanceof Array && obj2 instanceof Array ) {
        // if they don't have same number of items then the arrays aren't equal
        if( obj1.length !== obj2.length ) {
            return false;
        }

        // test that their items are equal (deep-equality test)
        for( var i = 0; i < obj1.length; i++ ) {
            latestResult = deepEquals( obj1[i], obj2[i] );

            if( latestResult === false ) {
                return latestResult;
            }
        }

        return true; // if the for loop has completed execution it means both arrays are equal
    }

    // if we have come to this point, then obj1 and obj2 are both objects

    // first test for same number of keys
    if( Object.keys( obj1 ).length !== Object.keys( obj2 ).length ) {
        return false;
    }

    // next test for match of keys and their values
    for( var prop in obj1 ) {
        // if prop does not exist as a key in obj2, then obj1 and obj2 are not equal
        if( !(prop in obj2) ) {
            return false;
        }

        latestResult = deepEquals( obj1[prop], obj2[prop] );

        if( latestResult === false ) {
            return latestResult;
        }
    }

    return true; // if the for..in loop has completed execution it means both objects are equal
}

// ********** Tests **********
var obj1 = {
    a: 1,
    b: {
        c: 3,
        d: 4
    },
    e: [ 1, 3, 5, { f: 6 } ]
};

var obj2 = {
    a: 1,
    b: {
        c: 3,
        d: 4
    },
    e: [ 1, 3, 5, { f: 6 } ]
};

var obj3 = {
    a: 1,
    b: {
        d: 4
    },
    e: [ 1, 3, 5, { f: 6 } ]
};

var obj4 = {
    a: 1,
    b: {
        c: 3,
        d: 4
    },
    e: [ 1, 3, 5, { f: 7 } ]
};

var obj5 = {
    a: 1,
    e: [ 1, 3, 5, { f: 6 } ]
};

var x = 3, y = 3;

var arr1 = [
    'hello',
    2,
    {
        z: 3
    },
    false
];

var arr2 = [
    'hello',
    2,
    {
        z: 3
    },
    false
];

var arr3 = [
    'hello',
    2,
    {
        z: 2
    },
    false
];

console.log( "deepEquals( obj1, obj2 ) = ", deepEquals( obj1, obj2 ) );
console.log( "deepEquals( obj1, obj3 ) = ", deepEquals( obj1, obj3 ) );
console.log( "deepEquals( obj1, obj4 ) = ", deepEquals( obj1, obj4 ) );
console.log( "deepEquals( obj1, obj5 ) = ", deepEquals( obj1, obj5 ) );
console.log( "deepEquals( x, y ) = ", deepEquals( x, y ) );
console.log( "deepEquals( arr1, arr2 ) = ", deepEquals( arr1, arr2 ) );
console.log( "deepEquals( arr1, arr3 ) = ", deepEquals( arr1, arr3 ) );