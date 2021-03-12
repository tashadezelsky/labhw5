console.log("Hello Bookshelf");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: 'keyHlLjNPepQaUXmp'}).base('app9uIcRPijJId2HU');

base('books').select({}).eachPage(gotPageOfBooks, gotAllBooks);
    // This function (`page`) will get called for each page of records.

const books = [];

function gotPageOfBooks(records, fetchNextPage) {
    console.log("gotPageOfBooks()");
    books.push(...records);
    fetchNextPage();
}

function gotAllBooks(err) {
    console.log("gotAllBooks()");

    if (err) {
        console.log("error loading books");
        console.error(err);
        return;
       }

 consoleLogBooks();
 showBooks();
}

function consoleLogBooks() {
    console.log("consoleLogBooks()");
    books.forEach((book) => {
    console.log("Book:", book);
});
}

function showBooks() {
    console.log("showBooks()");
    books.forEach((book) => {
        const h2 = document.createElement("h2");
        h2.innerText = book.fields.title;
        document.body.appendChild(h2);
    });
}