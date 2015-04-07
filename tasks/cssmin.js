module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

	grunt.config( 'cssmin', {
		options : {
			sourceMap : true
		},
		fluid : {
			src : '<%= dir.dist %>/<%= pkg.name %>.fluid.css',
			dest : '<%= dir.dist %>/<%= pkg.name %>.fluid.min.css'
		},
		flexbox : {
			src : '<%= dir.dist %>/<%= pkg.name %>.flexbox.css',
			dest : '<%= dir.dist %>/<%= pkg.name %>.flexbox.min.css'
		}
	});
};
