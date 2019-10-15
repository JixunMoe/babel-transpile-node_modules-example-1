require('@babel/register')({
	include: [ () => true ],
	ignore: [ () => false ],
	cache: false,
});

require('jixun/run-test');
