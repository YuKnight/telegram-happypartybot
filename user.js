/*=============================================
Tianhai Information Technology 2013-2017
-----------------------------------------------
Tianhai Information Technology
	http://tianhai.info/
Soha King
	https://soha.moe/
=============================================*/

var db=require('./db').connDatabase.conn.Mongo;
var async=require('async');

var xpos={
	flushUserInfo: function (message,afterRun){
		var useful=message.from;
		async.waterfall([
			function (callback){
				db.collection('user').update({
					uid: useful.id
				},useful,function (err){
					if(err){
						console.log(err);
					}
					callback(null);
				});
			}
		],function(err,result){
			console.log('data of user '+useful.username+' has been updated.');
			afterRun();
		});
	}
}

module.exports=xpos;
