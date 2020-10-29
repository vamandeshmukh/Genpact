/**
 * JSON is an singleton object
 * JavaScript Object Notation (JSON) is a data-interchange format (just like XML is one).
 * It is similar to the JavaScript object literal syntax (with minor differences).
 * In a JSON formatted string, the keys are always double-quoted.
 * Reference: http://json.org/
 */

// Note: In JS, strings can be continued onto the next line by adding a backslash to the current line.
// A JSON formatted string representing mails received - Assume this is the response from the server (in HTTP request body)
var mails = `[
    {
        "from": "john@example.com",
        "cc": [ "jane@example.com", "bob@example.com" ], 
        "bcc": null,
        "read": false
    },
    {
        "from": "mark@example.com",
        "cc": [ "jane@example.com", "alice@example.com" ],
        "bcc": [ "john@example.com" ],
        "read": false
    }
]`;

console.log( mails );

var mailsObj = JSON.parse( mails );
console.log( mailsObj );

mailsObj[0].read = true;
console.log( mailsObj );

var updatedMails = JSON.stringify( mailsObj, null, 4 ); // 2nd argument is a function - usually we will use only null (unless we want to transform the string in some way)
console.log( updatedMails );

// now send updatedMails JSON string to server