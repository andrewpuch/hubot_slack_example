// Commands:
//   hubot describe instance [instance_id] - Shows instance details.

var config  = require(__dirname + '/../config.json'),
    promise = require('bluebird'),
    aws     = require('aws-sdk'),
    ec2     = new aws.EC2(config);

module.exports = function(robot) {
    robot.respond(/describe instance ([-\a-zA-Z0-9]+)/i, function(msg) {
        var instance = msg.match[1].toLowerCase(),
            message  = "";

        return new promise(function(resolve, reject) {
            ec2.describeInstances({ InstanceIds : [ instance ] }, function(err, instance) {
                if(err) {
                    reject(err);
                }

                resolve(instance);
            });
        }).then(function(instance) {
            instance = instance.Reservations[0].Instances[0];

            message = message + instance.InstanceType + "\n";
            message = message + instance.PublicIpAddress + "\n";
            message = message + instance.PrivateIpAddress + "\n";

            msg.send("```" + message + "```");
        }).catch(function(e) {
            msg.send("```" + e + "```");
        });
    });
};