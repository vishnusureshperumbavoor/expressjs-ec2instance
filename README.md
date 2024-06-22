## Prequisites
NodeJS

## Steps to connect to the instance using SSH client
Download the pem file after creating instance  

Go the pem file directory  

Give read permission only to the owner of the system
```
chmod 400 <pem_file_name>.pem
```
example
```
chmod 400 nodejs-server-mumbai.pem
```
Connect ubuntu device with your ec2 instance

```
sudo ssh -i <pem_file_name>.pem <your_AMI>@<public_ipv4_address>
```
example
```
sudo ssh -i nodejs-server-mumbai.pem ubuntu@3.108.191.86
```
SSH is connected securely

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


Install dependencies & run the application

```
npm install
npm run dev
```
