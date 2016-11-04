module.exports = function(grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			hypher: {
				options: {
					'-W099': true,
				},
				src: ['src/**/*.js']
			}
		},

		concat: {
			hypher: {
				options: {
				    banner: '/*!\n' +
				    		' * <%= pkg.name %>\n' +
				    		' * Version: <%= pkg.version %>\n' +
							' * <%= pkg.description %>\n' +
							' * Author: Bram Stein & Marc Wieland\n' +
							' */\n' +
							''
				},
				src: 'src/jquery.hypher.js',
				dest: 'dist/jquery.hypher.js',
			},
		},

		uglify: {
			hyphermin: {
				options: {
				    banner: '/*!\n' +
				    		' * <%= pkg.name %>\n' +
				    		' * Version: <%= pkg.version %>\n' +
							' * <%= pkg.description %>\n' +
							' * Author: Bram Stein & Marc Wieland\n' +
							' */\n' +
							'',
							//report: 'gzip'
				},
				files: {
					'dist/jquery.hypher.min.js': ['src/jquery.hypher.js']
				}
			}
		},

		watch: {
			js: {
				files: ['src/**/*.js'],
				tasks: [
					'jshint',
					'concat',
					'uglify'
				],
			},
		},
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', [
		'jshint',
		'concat',
		'uglify',
		'watch'
	]);
}
