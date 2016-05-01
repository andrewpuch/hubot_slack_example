# Hubot Slack Example ***WORK IN PROGRESS***
Writing a bot using hubot in javascript that runs server side that integrates with your AWS infrastructure. 

```
sudo su
apt-get update
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
apt-get install nodejs -y
npm install -g yo generator-hubot
mkdir -p /root/chatbot
mkdir -p /root/.config/configstore/
chmod g+rwx /root /root/.config /root/.config/configstore /root/chatbot
cd /root/chatbot
yo hubot
rm -rf node_modules/
rm package.json
rm external-scripts.json
**Copy package.json from github into chatbot**
npm install && npm update
**Copy external-scripts.json from github***
**Copy describe-instance.js from github into scripts**
**Copy i-love-you.js from github into scripts**
**Copy config-sample.json from github to config.json**

HUBOT_ADAPTER=slack HUBOT_SLACK_TOKEN=[TOKEN] bin/hubot
```
