const express = require("express");
const LibraryDao = require("./library-dao.js");

const dao = new LibraryDao.Library("./src/exercise-12/books.json");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => { 
    console.log("This is my request.", req);

res.send("Hello World!");
});

app.get("/getBook", async (req, res) => {
    try{
        if(!req.query.code) {
            return res.status(400).json("Code query missing.");           
        } else {
            // res.status(200);
            // res.json({error: `It is ok '${req.query.code}'`});
            let book = await dao.getBook(req.query.code);
            if(!book) {
                return res.status(400).json({error: `Book with code '${req.query.code}' is not found.`});
            } else {
                return res.status(200).json(book);
            }
        }
    } catch(e){
        console.log(e);
        return res.status(500).json({error: `Unexpected Error: ${e.message}`});
    }

});

app.post("/createBook", async (req, res) => {
    try {
        let bookFromReq = req.body;
        //uprav si radek
        console.log("=>(http-server.js:42) bookFromReq", bookFromReq);                
        if (dao.isBookValid(bookFromReq, dao.schema)){
            let currentBooks = await dao.readBooksFile();
            if(currentBooks.find(b => b.code === bookFromReq.code)) {
                return res.status(400).json({error: `Book with code '${bookFromReq.code}' already exists.`});
                // throw this.DuplicateCodeError("Book with this code already exists.")
            } else {
                bookFromReq.generateId = Math.floor(Math.random() * 1000000);
                currentBooks.push(bookFromReq);
                let createdBook = await dao.createBook(bookFromReq);
                return res.status(200).json(createdBook);
            }
        } else {
            return res.status(400).json({error: `No valid attribute code, name or author specified. Correct format must contain non-empty values of all atributes!`})
        }
        // return res.json(bookFromReq);
        // let schema = dao.schema;
    } catch (e) {
        console.log(e);
        return res.status(500).json({error: `Unexpected Error: ${e.message}`});
    }    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});



