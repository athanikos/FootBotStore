# Football Stats (Storage And Pipelines)

# Introduction 
This repository contains the Storage and Pipelines part of the FootBallStats project.
The purpose of the project is to fetch live football data for storage & further analysis.


# Design 

Sources ------> Kafka ------> Mongo 
                                  
StreamSets is used for pipeline development.
SportMonks is used as a live data provider.


# QuickStart 
1.  Install Kafka, StreamSets and Mongo
2.  Create a kafka topic called  MonksLiveMatches
3.  Deploy  GetMonksLiveScoresToKafka & PutMonksMatchesToMongoFromKafka pipelines contained in streamsets folder 
4.  Replace the api token with your sportMonks Api token in GetMonksLiveScoresToKafka
5.  To create a collection in mongo that holds FT Matches only run BuildFootballMatchesFromMatches.js  aggregation pipeline that adds a number of statistics 

# StreamSets Pipelines 
## GetMonksLiveScoresToKafka 
The source json contains all matches within one data node in json.
![alt text](https://github.com/athanikos/Football_Stats_Storage_And_Pipelines/blob/master/screenshots/GetMonkLiveScoresToKafka_one_to_many.png)

The unique key of the match is (status, id , minute)
Therefore, for a match you should expect to see 1 record per minute. 
The java script evaluator is used to produce N data records from 1 record.
![alt text](https://github.com/athanikos/Football_Stats_Storage_And_Pipelines/blob/master/screenshots/GetMonksLiveScoresToKafka.png)

## PutMonksMatchesToMongoFromKafka  
Uses mopngo db as a lookup storage to decide whether to upsert. 
The triple (status, id , minute) is used to lookup.
If exists then data is sent to trash.
![alt_text](https://github.com/athanikos/Football_Stats_Storage_And_Pipelines/blob/master/screenshots/PutMonksMatchesToMongoFromKafka.png)












