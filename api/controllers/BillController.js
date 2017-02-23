/**
 * BillController
 *
 * @description :: Server-side logic for managing bills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var json2csv = require('json2csv');
module.exports = {
	csv:function(req,res){
		var numbers = {
			fields:["a", "b", "c"]
		};

		json2csv(numbers, function(err, csv){
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
