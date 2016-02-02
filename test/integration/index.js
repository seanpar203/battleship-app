module.exports = {
  'homepage has \'index\' data-module set': function (client) {
    client.url('http://localhost:8888').pause(1000);

    client.expect.element('#page').to.have.attribute('data-module').which.contains('index');

    client.end();
  }
};
