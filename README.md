# Hubot Slack Example ***WORK IN PROGRESS***
Writing a bot using hubot in javascript that runs server side that integrates with your AWS infrastructure. 

```
sudo su
apt-get update
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
apt-get install nodejs git -y
npm install -g yo generator-hubot
git clone https://github.com/andrewpuch/hubot_slack_example.git
mkdir -p /root/chatbot
mkdir -p /root/.config/configstore/
chmod g+rwx /root /root/.config /root/.config/configstore /root/chatbot
cd /root/chatbot
yo hubot
rm -rf node_modules/
rm package.json
rm external-scripts.json
cp -f /root/hubot_slack_example/package.json /root/chatbot/package.json
npm install && npm update
cp -f /root/hubot_slack_example/external-scripts.json /root/chatbot/
cp /root/hubot_slack_example/config-sample.json /root/chatbot/config.json
cp /root/hubot_slack_example/describe-instance.js /root/chatbot/scripts/
cp /root/hubot_slack_example/i-love-you.js /root/chatbot/scripts/

HUBOT_ADAPTER=slack HUBOT_SLACK_TOKEN=[TOKEN] bin/hubot
```
