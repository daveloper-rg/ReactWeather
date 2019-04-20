// function getTempCallback(location, callback){
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallback('Madrid',function(err, temp){
// 	if(err){
// 		console.log('error', err);
// 	}else{
// 		console.log('success', temp);
// 	}
// });

// function getTempPromise(location)
// {
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function(){
// 			resolve(79);
// 			reject('City not found');
// 		}, 1000);
// 	});
// }

// getTempPromise('Malaga').then(function(temp){
// 	console.log('promise success', temp);
// }, function(err){
// 	console.log('promise error', err);
// });

function addPromise(a,b){
	return new Promise(function(resolve, reject){
		if(typeof a === 'number' && typeof b === 'number'){
			resolve(a + b);
		}else{
			console.log('either ' + a + ' or ' +b + ' aren\'t valid numbers');
		}
	});
}

addPromise(3,4).then(function(sum){
	console.log('success', sum);
}, function(err){
	console.log('error',err);
});

addPromise('hello',4).then(function(sum){
	console.log('success', sum);
}, function(err){
	console.log('error',err);
});