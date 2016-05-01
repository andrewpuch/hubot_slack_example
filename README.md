# Hubot Slack Example ***WORK IN PROGRESS***
Writing a bot using hubot in javascript that runs server side that integrates with your AWS infrastructure. 

```
sudo su
mkdir -p /root/chatbot && cd /root/chatbot
apt-get update
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
apt-get install nodejs -y
npm install -g yo generator-hubot
mkdir -p /root/.config/configstore/
chmod g+rwx /root /root/.config /root/.config/configstore /root/chatbot
yo hubot
rm -rf node_modules/
rm package.json
**Copy package json from github**
npm install && npm update
**Copy scripts folder from github**
```
