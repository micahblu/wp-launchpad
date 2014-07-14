module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {

			index: {
				expand: true,
				cwd: 'wp/',
				src: ['index.php'],
				dest: './',
				options: {
			     	process: function (content, srcpath) {
			        	return content.replace(/wp\-/g,"wp/wp-");
			        }	
			    }
			},

			wp_content: {
				expand: true,
				cwd: 'wp/',
				src: ['wp-content/**/*'],
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

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('init', ['copy:index', 'copy:wp_content', 'copy:wp_config', 'update_wp_paths']);

	grunt.registerTask('update_wp_paths', function(){

		var fs = require('fs');
		var path = require('path');
		var wp_config = grunt.file.read("wp-config-sample.php");

		var injection = "/** Let WordPress know we've moved our wp-content directory */\n";
			injection += "define( 'WP_CONTENT_DIR', dirname( __FILE__ ) . '/wp-content' );\n";
			injection += "define( 'WP_CONTENT_URL', 'http://' . dirname($_SERVER['PHP_SELF']) .'/wp-content' );\n";

		wp_config = wp_config.replace(/(\/\**.*\n.+wp\-settings\.php.+)/g, injection+"\n$1");

		grunt.file.write('wp-config-sample.php', wp_config);
	});
}