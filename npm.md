# Introduction to NPM:
* NPM stands for Node Package Manager. It is used to install, update, and uninstall<br>
packages.
# Creating an empty project using npm:
* to create a simple project in npm, we can simply issue:<br>
npm init -y<br>
the command line will create pakcage.json file to track all the packages being installed.
* if we use, npm init, we will be given more options to specify such as project name.
# Installing global packages:
* to install a package globally, we can issue the following command line:
1. npm install -g <package-name>
2. npm i -g package_name
* to view the packages installed globally, we can issue:
1. npm list -g
2. npm ls -g
# installing packages locally:
* to install packages locally, we have different options:
1. dependencies packages
2. development packages
* to install packages as dependencies, we can simply write:
1. npm install --save package_name
2. npm install package_name
3. npm install -S package_name
* to install packages as development, we can simply write:
1. npm install --save-dev package_name
2. npm install -D package_name
# remove/uninstall packages either globally, locally, or development:
## to remove/uninstall a package, we simply write this:
1. remove a package globally:
* npm uninstall -g package_name
2. to remove/uninstall a package locally, we simply write this:
* npm uninstall package_name
3. to remove/uninstall a package from development, we simpl write this:
* npm uninstall -D package_name
