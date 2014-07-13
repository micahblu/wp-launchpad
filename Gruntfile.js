module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			wp_content: {
				expand: true,
				cwd: 'wp/',
				src: ['wp-content/*', 'index.php'],
				dest: './'
			},

			wp_config: {
				expand: true,
				cwd: 'wp/',
				src: ['wp-config-sample.php'],
				dest: './'
			}
		}

	});

	/*['grunt-contrib-copy'].forEach(function(task){
		grunt.loadNpmTask(task);
	});*/
	grunt.loadNpmTasks('grunt-contrib-copy');


	grunt.registerTask('init', ['copy:wp_content', 'copy:wp_config']);
}