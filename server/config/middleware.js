var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function (app, express) {
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../../dist'));
};
