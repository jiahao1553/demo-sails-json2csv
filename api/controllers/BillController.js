/**
 * BillController
 *
 * @description :: Server-side logic for managing bills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var json2csv = require('json2csv');
module.exports = {
	csv:function(req,res){
		var json = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
];

json2csv({data: json, fields: ['car', 'price', 'color']}, function(err, csv){
			if(err){
				console.log(err)
			}else{
				var filename = "report"+".csv";
				res.attachment(filename);
				res.end(csv, 'UTF-8');
			}
		});
	}
};
