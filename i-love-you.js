// Commands:
//   hubot i love you - I love you more.

module.exports = function(robot) {
    robot.respond(/i love you/i, function(msg) {
        msg.send("```I love you more.```");
    });
};