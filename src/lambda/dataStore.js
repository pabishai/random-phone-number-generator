import fs from 'fs';
import path from "path";

/**
 *  This is a lambda function to read and write to JSON files
 */
exports.handler = (event, context, callback) => {
  // Filename is the text phone_numbers_timestamp
  const filePath = path.join('.netlify', 'data.json');
  let returnData = {
    statusCode: 200,
    body: 'This function reads and writes phone data from JSON files use GET or POST',
  };

  // Read file on get request
  if(event.httpMethod === 'GET') {
    const phoneNumberData = [];
    // Read data from data.json file in the folder
    const data = fs.readFileSync(filePath, 'utf-8');
    phoneNumberData.push({data});
    returnData.body = JSON.stringify(phoneNumberData);
  }

  // Write to file on POST request
  if(event.httpMethod === 'POST') {
    fs.writeFile(filePath, event.body, (error, data) => {
      if(error){
        throw error;
      }   
    });
    returnData.statusCode = 201;
  }

  callback(null, returnData);
};
