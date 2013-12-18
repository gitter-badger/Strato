function hasFlag( flag, altFlag ) {
  if ( process.argv.indexOf( flag ) !== -1 || process.argv.indexOf( altFlag ) !== -1 ) {
    return true;
  } else {
    return false;
  }
}

function ENV( v, def ) {
  var e = process.env[v];
  return e?e:def;
}

var config = {
  hasCLFlag: hasFlag,
  getENV: ENV,
  dbConfig: {
    core_url: ENV('DATABASE_URL', 'tcp://postgres:password@localhost:5433/WellDone'),
    reports_url: ENV('REPORTS_DATABASE_URL', 'http://localhost:5984/')
  },
  DEBUG: ( hasFlag( "--debug", "-d" ) || ENV('NODE_DEBUG_MODE') )?true:false,
  port: ENV('PORT', 3000),
  logDir: ENV('WD_LOG_PATH', '/var/log/welldone_server.log' ),
  twilioConfig: { account_sid: ENV('TWILIO_ACCOUNT_SID'),
                  auth_token:  ENV('TWILIO_AUTH_TOKEN'),
                  number:      ENV('TWILIO_NUMBER') }
};

module.exports = config;