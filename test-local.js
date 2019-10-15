require('@babel/register')({
	include: [ () => true ],
	ignore: [ () => false ],
	cache: false,
});

require('./run-test');
