module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-sass' );

	grunt.config( 'sass', {
		dist : {
			options : {
				noCache : true,
				trace : true,
				lineNumbers : true,
				style : 'expanded',
				update : true
			},
			files : {
				'<%= dir.dist %>/styles/<%= pkg.name %>.css' : '<%= dir.src %>/sass/<%= pkg.name %>.scss'
			}
		}
	});
};
