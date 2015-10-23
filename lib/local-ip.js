function get() {
	var address = [];
	const nics = require('os').networkInterfaces();
	for(nic in nics)  {
		//console.log("nic = "+nic);
		for(var i=0; i<nics[nic].length; i++) {
			if(!nics[nic][i].internal) {
				if(nics[nic][i].family === 'IPv4') {
					//console.log(nics[nic][i].address);
					address.push(nics[nic][i].address);
				}
			}
		}
	}
	return address
}

var localip = {};
localip.get = get;
module.exports=localip;
