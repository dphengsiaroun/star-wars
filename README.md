# Build a Cordava app

## Requirements
1. Install JDK8 (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. Install Android Studio (https://developer.android.com/studio/)
3. Install NodeJS (https://nodejs.org/en/)
4. Install Apache Ant (http://ant.apache.org/)
5. To configure environment path

- Check the actually PATH
````
$ echo $PATH
````

- For edit PATH
````
$ sudo nano ~/.bash_profile
````

- Copy Paste links in bash_profile on MacOS
````
1    #JAVA
2    export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_102.jdk/Contents/Home
3    export PATH=$PATH:$JAVA_HOME/bin
4    #ANDROID
5    export ANDROID_HOME=/Users/Mickael/Library/Android/sdk/platformtools:/Users/Mickael/Library/Android/sdk/tools
6    export PATH=$PATH:$ANDROID_HOME/bin
7    #APACHE ANT
8    export ANT_HOME=/usr/local/apache-ant-1.10.1
9    export PATH=$PATH:$ANT_HOME/bin
````

- For update PATH (file .bash_profile)
````
$ source /etc/profile
````

6. Install Phonegap
````
$ npm install –g phonegap
````

7. Install Cordova
````
$ npm install –g cordova
````

## Create a project
````
$ phonegap create cordavapp --template hello-world
$ cd cordavapp
````

## Add project on Platform Android or iOS
```
$ phonegap platform add android
// or
$ phonegap platform add ios
```

## Run the project on Platform Android or iOS
```
$ phonegap run android
// or
$ phonegap run ios
```

