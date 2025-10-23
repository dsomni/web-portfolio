echo "Installing dependencies"
yarn install > /dev/null 2> /dev/null
echo "Start to build your package"
yarn build > /dev/null 2> /dev/null

echo "Deploying"
rm -rf /var/www/html/portfolio
mkdir -p /var/www/html/portfolio
cp -r ./dist/* /var/www/html/portfolio/

echo "Finished!"