module.exports = function( grunt ) {
	'use strict';

	// require time-grunt at the top and pass in the grunt instance
	require( 'time-grunt' )( grunt );

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON( 'package.json' ),
		version : grunt.file.readJSON( 'package.json' ).version,
		banner : '/*!\n' +
				' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
				' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
				' */\n',
		dir : {
			docs : 'docs',
			dist : 'dist',
			src : 'src',
			vendor : 'vendor'
		}
	});

	// Load tasks
	grunt.loadTasks( 'tasks' );

	// Default task(s)
	grunt.registerTask( 'build', [
		'clean',
		'sass'
	]);
	grunt.registerTask( 'serve', [
		'jekyll',
		'connect',
		'browserSync',
		'watch'
	]);
	grunt.registerTask( 'dist', [
		'copy',
		'autoprefixer',
		'cssmin'
	]);
	grunt.registerTask( 'dev', [
		'build',
		'dist',
		'serve'
	]);
	grunt.registerTask( 'default', [ 'dev' ]);
};
