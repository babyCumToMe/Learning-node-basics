const http = require("http");
const {createReadStream} = require("fs");
const { create } = require("lodash");

http
.createServer( (req, res) => {
      const fileStream = createReadStream("./content/big-file.txt", "utf8");
      fileStream.on("open", ()=>{
        fileStream.pipe(res);
      })

      fileStream.on("error", (err)=> console.log(err));
      
    }
)
.listen(5000)