## Install Node.js and npm on ubuntu

Update Package Lists:
```
sudo apt update
```
Install curl
```
sudo apt install -y curl
```

Install Node.js
```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install -y nodejs
```
Verify Installation
```
node --version
npm --version
```
Clone the repo
```
git clone https://github.com/vishnusureshperumbavoor/expressjs-ec2instance.git
```
Enter the directory
```
cd expressjs-ec2instance
```
Install dependencies
```
npm install
```
Run the application
```
node app.js
```