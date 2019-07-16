import fs from 'fs';
import path from "path";

/**
 *  This is a lambda function to read and write to JSON files
 */
exports.handler = (event, context, callback) => {
  // Filename is the text phone_numbers_timestamp
  const timestamp = new Date().valueOf()
  const fileName = "phone_numbers_".concat(timestamp, ".json");
  const dirPath = 'data';
  const filePath = path.join(dirPath, fileName);
  let returnData = {
    statusCode: 200,
    body: 'This function reads and writes phone data from JSON files use GET or POST',
  };

  // Read file on get request
  if(event.httpMethod === 'GET') {
    const phoneNumberData = [];

    // Check if data folder exists and create if not
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    } else {
      // Read data from each file in the folder
      const files = fs.readdirSync(dirPath);
      files.forEach((file)=>{
        const data = fs.readFileSync(path.join(dirPath, file), 'utf-8');
        phoneNumberData.push({data});
      });
    }
    returnData.body = JSON.stringify(phoneNumberData);
  }

  // Write to file on POST request
  if(event.httpMethod === 'POST') {
    fs.open(filePath, 'wx', (err, fd) => {
      if(err) {
        throw err;
      }
      fs.write(fd, event.body, (error, data) => {
        if(error){
          throw error;
        }
        console.log(data)
        
      });
    });
    returnData.statusCode = 201;
    returnData.body = timestamp.toString();
  }

  callback(null, returnData);
};
