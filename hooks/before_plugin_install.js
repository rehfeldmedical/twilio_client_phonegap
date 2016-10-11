module.exports = function(ctx) {
    if (ctx.opts.cordova.platforms.indexOf('ios') < 0) {
        return;
    }
	
	var path = require('path');
	
	var srcDir  = path.join(ctx.opts.plugin.pluginInfo.dir, 'src/ios');
	var tarball = path.join(srcDir, 'twilio-client-ios-1.2.11.tar.bz2');
	var deferral = ctx.requireCordovaModule('q').defer();
	
	var cmd = 'bunzip2 -c "' + tarball + '" | (cd "' + srcDir + '"; tar -xf -);';
	require('child_process').exec(cmd, function (err, stdout, stderr) {
		if (err) {
			deferral.reject('Operation failed');
		} else {
			console.log('Finished');
            deferral.resolve();
		}		
		
	});
	
	return deferral.promise;
}