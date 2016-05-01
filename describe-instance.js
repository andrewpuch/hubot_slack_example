// Commands:
//   hubot describe instance [instance_id] - Shows instance details.

var promise = require('bluebird'),
    aws     = require('aws-sdk');
    ec2     = new aws.Ec2();

module.exports = function(robot) {
    robot.respond(/describe instance ([-\a-zA-Z0-9]+)/i, function(msg) {
        msg.send("```Instance is being described.```");
    });

    robot.respond(/i love you/i, function(msg) {
        msg.send("```asdfasdfsdft.```");
    });
};