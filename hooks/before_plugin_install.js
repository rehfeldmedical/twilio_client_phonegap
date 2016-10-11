module.exports = function(ctx) {
    // make sure android platform is part of build
    if (ctx.opts.cordova.platforms.indexOf('ios') < 0) {
        return;
    }
	
	var path = require('path');
	
	var srcDir  = path.join(ctx.opts.plugin.pluginInfo.dir, 'src/ios');
	var tarball = path.join(srcDir, 'twilio-client-ios-1.2.11.tar.bz2');
	
	
	/*var fs = require('fs');
	var tar = require('tar');
	var zlib = require('zlib');
	
	var mkdirp = require('mkdirp'); // used to create directory tree
	
	//var untar = require('untar')
	
	fs.createReadStream(tarball)
		.on('error', console.log)
		.pipe(zlib.Unzip())
		.pipe(tar.Parse())
		.on('entry', function(entry) {
			if (/\.js$/.test(entry.path)) { // only extract JS files, for instance
				var isDir     = 'Directory' === entry.type;
				var fullpath  = path.join(dest, entry.path);
				var directory = isDir ? fullpath : path.dirname(fullpath);

				mkdirp(directory, function(err) {
					if (err) throw err;
					if (! isDir) { // should really make this an `if (isFile)` check...
						entry.pipe(fs.createWriteStream(fullpath));
					}
				});
			}
		});
	
	*/
	var cmd = 'bunzip2 -c "' + tarball + '" | (cd "' + srcDir + '"; tar -xf -);';
	require('child_process').exec(cmd, function (err, stdout, stderr) {
		if (err) {
			console.log(err);
		}
		// yea!
	});
	cmd = 'cd "' + srcDir + '"; cp -f twilio-client-ios-1.2.11/Headers/*.h .';
	console.log(cmd);
	require('child_process').exec(cmd, function (err, stdout, stderr) {
		if (err) {
			console.log("!!!! ERROR !!!!!");
			console.log(err);
		}
		// yea!
	});
	//console.log(ctx.opts.plugin.pluginInfo.dir)
	
	console.log("************************************");
	console.log("* Hello from Before Plugin Install *");
	console.log("************************************");
}