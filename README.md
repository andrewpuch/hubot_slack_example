apt-get update
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
apt-get install nodejs -y
npm install -g yo generator-hubot
mkdir -p /root/.config/configstore/
chmod g+rwx /root /root/.config /root/.config/configstore
cd /opt
git clone spotbot
cp /opt/spothook/ops/spotbot/config/insight-yo.json /root/.config/configstore/
cp /opt/spothook/ops/spotbot/config/update-notifier-yo.json /root/.config/configstore/
cd /opt/spothook/ops/spotbot
npm install && npm update
