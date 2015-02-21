module.exports = function(grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			glide: {
				options: {
					'-W099': true,
				},
				src: ['src/**/*.js']
			}
		},

		concat: {
			glide: {
				options: {
				    banner: '/*!\n' +
				    		' * <%= pkg.name %>\n' +
				    		' * Version: <%= pkg.version %>\n' +
							' * <%= pkg.description %>\n' +
							' * Author: <%= pkg.author %>\n' +
							' * Site: http://<%= pkg.homepage %>/\n' +
							' * Licensed under the BSD license\n' +
							' */\n' +
							''
				},
				src: 'src/jquery.hypher.js',
				dest: 'dist/jquery.hypher.js',
			},
		},

		uglify: {
			glidemin: {
				options: {
				    banner: '/*!\n' +
				    		' * <%= pkg.name %>\n' +
				    		' * Version: <%= pkg.version %>\n' +
							' * <%= pkg.description %>\n' +
							' * Author: <%= pkg.author %>\n' +
							' * Site: http://<%= pkg.homepage %>/\n' +
							' * Licensed under the BSD license\n' +
							' */\n' +
							'',
					report: 'gzip'
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
