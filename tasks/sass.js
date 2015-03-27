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
				'<%= dir.dist %>/<%= pkg.name %>.flexbox.css' : '<%= dir.src %>/flexbox-grid.scss',
				'<%= dir.dist %>/<%= pkg.name %>.fluid.css' : '<%= dir.src %>/fluid-grid.scss'
			}
		}
	});
};
