import { google } from 'googleapis';
import readline from 'readline'

const googleCredentials = {
  client_id: '367686070815-affaceeanechsuimub8uojk1ig18lm00.apps.googleusercontent.com',
  project_id: 'quickstart-1563217338389',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_secret: '6XIEYJSriV67Hi8RKiHZJmMR',
  redirect_uris: ['http://localhost:9000'],
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
}

/**
 *  This is a lambda function to read and write to JSON files
 */
exports.handler = (event, context, callback) => {
  // Read file on get request
  let returnData = {
    statusCode: 200,
    body: 'This function reads and writes phone data from JSON files use GET or POST',
  };
  authorize(googleCredentials, persistPhoneNumbers);
  if(event.httpMethod === 'GET') {
    
  }

  // Write to file on POST request
  if(event.httpMethod === 'POST') {
    
  }

  callback(null, returnData);
};

/**
 * Authorize on Google
 * @param {object} googleCredentials 
 * @param {function} callback 
 */
function authorize(googleCredentials, callback) {
  const {client_secret, client_id, redirect_uris} = googleCredentials;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  getNewToken(oAuth2Client, callback);
  callback(oAuth2Client);

}



function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: googleCredentials.scopes,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store in the localstorage
      callback(oAuth2Client);
    });
  });
}

function persistPhoneNumbers(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1FToC7hcn4guR98Ek3SFXErYlcbD6l8FHkl65TLS-GXg',
    range: 'Class Data!A1',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name, Major:');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        console.log(row);
      });
    } else {
      console.log('No data found.');
    }
  });
}
