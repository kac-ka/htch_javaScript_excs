const fs = require("fs");

class Library {
    constructor(path){
        this.path = path;
    }
    
    async readBooksFile() {
        try {
            if(fs.existsSync(this.path)) {
                let fileContent = await fs.promises.readFile(this.path , "utf-8");
                return JSON.parse(fileContent);
            } else {
                try {
                    await fs.promises.writeFile(this.path, "[]");
                return [];
                } catch(e) {
                    console.log(e);
                }
            }
        } catch(e) {
            if (e instanceof SyntaxError) {
                return [];
            } else {
                console.log(e);
            }     
        }
    }

    schema = {
        code: value => (value && value.length !== 0),
        name: value => (value && value.length !== 0),
        author: value => /^([A-Z][a-z\-]* )+[A-Z][a-z\-]*( \w+\.?)?$/.test(value)
    };
    
    validate = (object, schema) => Object
        .keys(schema)
        .filter(key => !schema[key](object[key]))
        .map(key => new Error(`${key} is invalid.`));
    
    isBookValid(book, schema) {
        let errors = this.validate(book, schema);
      
        if (errors.length > 0) {
            for (const { message } of errors) {
              console.log(message);
            }
            return false;
        } else {
            return true;
        }
    }

    async getBook(code) {
        try {
            let parseItem = await this.readBooksFile();
            let bookFind = parseItem.find(b => {
                return b.code === code
            });
            if(bookFind === undefined) {
                throw new Error("Book with this code does not exist.");
            } else {
                return bookFind;
            }
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    DuplicateCodeError = (message)=>({
        error: new Error(message),
        code: 'DUPLICATE_CODE'
      });

    async createBook(book) {
        let currentBooks = await this.readBooksFile();
        if(this.isBookValid(book, this.schema)) {
            let bookList = currentBooks;
            try {
                if(bookList.find(b => b.code === book.code)) {
                    throw this.DuplicateCodeError("Book with this code already exists.")
                } else {
                    bookList.push(book);
                }
            } catch(e) {
                console.log(e);
            } 
            let newBookJSON = JSON.stringify(bookList, null, 2);
            await fs.promises.writeFile(this.path, newBookJSON);
        } else {
            console.log("Invalid book");
        }
    }

    async showBook(code) {
        try{
            console.log(await this.getBook(code));
        } catch(e) {
            console.log(e);
        }
    }
}

const newBook = {
    code: "978-80-257-0030-3",
    name: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams"
};

let library = new Library("./src/books.json");
library.createBook(newBook);
library.showBook("978-80-257-0030-39");    