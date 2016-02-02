var selenium = require('selenium-server');

module.exports = {
  'src_folders':            [ './test/integration' ],
  'output_folder':          'reports',
  'custom_commands_path':   '',
  'custom_assertions_path': '',
  'page_objects_path':      '',
  'globals_path':           '',

  'selenium': {
    'start_process': true,
    'server_path':   selenium.path,
    'log_path':      '',
    'host':          '127.0.0.1',
    'port':          4444,
    'cli_args':      {
      'webdriver.chrome.driver': '/usr/local/bin/chromedriver'
    }
  },

  'test_settings': {
    'default': {
      'launch_url':    'http://localhost:8888/',
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'silent':        true,
      'screenshots':   {
        'enabled': false,
        'path':    ''
      },
      'desiredCapabilities': {
        'browserName':       'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts':    true
      },
      'exclude': ''
    }
  }
};
