module.exports = function(ctx) {
    // make sure android platform is part of build
    if (ctx.opts.cordova.platforms.indexOf('ios') < 0) {
        return;
    }
	
	var fs = require('fs');
	var tar = require('tar');
	var zlib = require('zlib');
	var path = require('path');
	var mkdirp = require('mkdirp'); // used to create directory tree
	
	//var untar = require('untar')
	var srcDir  = path.join(ctx.opts.plugin.pluginInfo.dir, 'src/ios');
	var dest    = srcDir;
	var tarball = path.join(srcDir, 'twilio-client-ios-1.2.11.tar.bz2');
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
	
	fs.createReadStream(path.join(srcDir, 'twilio-client-ios-1.2.11.tar.bz2').pipe(unzip.Extract({ path: srcDir })));
	//console.log(ctx.opts.plugin.pluginInfo.dir)
	
	console.log("************************************");
	console.log("* Hello from Before Plugin Install *");
	console.log("************************************");
}