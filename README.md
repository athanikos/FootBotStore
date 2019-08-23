# Football Stats (Storage And Pipelines)

# Introduction 
This repository contains the Storage and Pipelines part of the FootBallStats project.
The purpose of the project is to store live football data for further analysis.


# Design 

Sources ------> Kafka ------> Mongo 
                                  
StreamSets is used for pipeline development.
SportMonks is used as a live data provider.


# QuickStart 
1.  Install Java, Kafka, StreamSets and Mongo

a. Install Java (open jdk 1.8 required by streamsets)  on ubuntu : https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04
    
b. Install Kafka : https://www.digitalocean.com/community/tutorials/how-to-install-apache-kafka-on-ubuntu-18-04
 https://stackoverflow.com/questions/52146001/kafka-not-able-to-connect-with-zookeeper-with-error-timed-out-waiting-for-conne
    
    
c. Install Streamsets 
    Set limits: https://superuser.com/questions/1200539/cannot-increase-open-file-limit-past-4096-ubuntu
    by modifying the conf file /etc/security/limits.conf
            
                *                hard    nofile          65535
                *                soft    nofile          65535
                root             soft    nofile          65535
                root             hard    nofile          65535
                
    
   Set Streamsets to run on boot with crontab add a line on  crontab -e 
   @reboot  /pathtosdcbin/streamsets dc 

d. Install mongo 
    https://itsfoss.com/install-mongodb-ubuntu/#install-from-ubuntu-repository
    modify /etc/mongod.conf to allow remote connections (bind_ip) 
    secure mongo:
    https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04
    
    
2.  Create a kafka topic named MonksLiveMatches
3.  Deploy  GetMonksLiveScoresToKafka & PutMonksMatchesToMongoFromKafka pipelines contained in streamsets folder 
4.  Replace the api token with your sportMonks Api token in GetMonksLiveScoresToKafka
5.  To create a collection in mongo that holds FT Matches only run BuildFootballMatchesFromMatches.js  aggregation pipeline that groups matches by status = FT and adds a number of statistics 

# StreamSets Pipelines 
## GetMonksLiveScoresToKafka 
The source json contains all matches within one data node in json.The java script evaluator is used to produce N data records from 1 record.
![alt text](https://github.com/athanikos/Football_Stats_Storage_And_Pipelines/blob/master/screenshots/GetMonkLiveScoresToKafka_one_to_many.png)
The unique key of the match is (status, id , minute)
Therefore, for a match you should expect to see 1 record per minute. 

![alt text](https://github.com/athanikos/Football_Stats_Storage_And_Pipelines/blob/master/screenshots/GetMonksLiveScoresToKafka.png)
## PutMonksMatchesToMongoFromKafka  
Uses mongo db as a lookup storage to decide whether to upsert. 
The triple (status, id , minute) is used to lookup.
If exists then data is sent to trash.
![alt_text](https://github.com/athanikos/Football_Stats_Storage_And_Pipelines/blob/master/screenshots/PutMonksMatchesToMongoFromKafka.png)












