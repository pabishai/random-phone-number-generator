export const environment = {
  production: true,
  googleCredentials : {
    client_id: '481833430635-1ir6apctaf1vs3kgha27tud1nt4uj1ub.apps.googleusercontent.com',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    ux_mode: 'redirect',
    redirect_uris: ['https://random-phonenumbers.netlify.com', 'http://localhost:4200'],
    scope: 'https://www.googleapis.com/auth/spreadsheets'
  }
};
