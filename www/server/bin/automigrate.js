var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var pillars = [
  {
    title: 'Accompagnement',
    description: 'Blablabla'
  },
  {
    title: 'Célébration',
    description: 'Blablabla'
  }
];
var dataSource = app.dataSources.accountDs;

dataSource.automigrate('Pillar', function(err) {
  if (err) console.log(err);

  var Pillar = app.models.Pillar;
  var count = pillars.length;

  pillars.forEach(function(pillar) {
    Pillar.create(pillar, function(err, record) {
      if (err) return console.log(err);

      console.log('Record created:', record);

      count--;

      if (count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});
