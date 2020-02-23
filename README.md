# Football Stats (Storage And Pipelines)

# Introduction 
This repository contains the Storage and Pipelines part of the FootBallStats project.
The purpose of the project is to store live football data for further analysis.


# Design 

Sources ------> Kafka ------> Mongo 
                                  
StreamSets for pipeline development.
SportMonks as a live data provider.

Pipelines 
1. PutMonksLiveMatches - ingestion to Kafka topic ( tree like event represenataion of match with nested items)
2.  PutMonksLiveMatchesToMatches - from kafka Topic MonksLiveMatcheds to Mongo Matches collection & Kafka topic  
3.  PutMatchesToFlatMatches - reads from Kafka matches topic and Flattens data to FlatMatches collection --- this flats out the collection and upserts by match_id+status+minute (one match has multiple rows)

4. Pending item to read from FlatMatches so that FinishedMatches is populated  and enriched 
This calls at least two webservices:

              a. get last 10 matches per team per league (calling matches per teamId per leagueId before some date) 
              b. compute stats (that is combine events collection and produce per 15 minutes threshold) This step 
                 gets all events per game and produces fields that are flattened
                 the call parameters are  matchId 
                 
              
              


# QuickStart 
[Install open jdk 8](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04)

[Install Kafka](https://www.digitalocean.com/community/tutorials/how-to-install-apache-kafka-on-ubuntu-18-04)

[Install Streamsets](https://streamsets.com/documentation/datacollector/latest/help/datacollector/UserGuide/Installation/Install_title.html) 
   
[Set limits:](https://superuser.com/questions/1200539/cannot-increase-open-file-limit-past-4096-ubuntu)
   by modifying the conf file /etc/security/limits.conf
            
                *                hard    nofile          65535
                *                soft    nofile          65535
                root             soft    nofile          65535
                root             hard    nofile          65535

[Install mongo](https://itsfoss.com/install-mongodb-ubuntu/#install-from-ubuntu-repository)
   
   modify /etc/mongod.conf to allow remote connections (bind_ip) 
   
[secure mongo](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04)
    
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




# Restoring from backup 
db.Matches.drop({})
mongoimport --db book --collection Matches --file Oct-05-2019
run BuildFullTimeMatchesFromMatches.js   // creates FullTimeMatches
                                         // execute build stats go lang 
                                         //RUN BUILDSTATS 
                                        
run BuildFullTimeMatchesWithStats.js   







