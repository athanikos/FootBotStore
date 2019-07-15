# Football Stats (Storage And Pipelines)

# Introduction 
This repository contains the Storage and Pipelines part of the FootBallStats project.
The purpose of the project is to fetch live football data for further analysis.


# Design 

Sources ------> Kafka ------> Mongo 
                                  
StreamSets is used for pipeline development.
SportMonks is used as a live data provider.


# QuickStart 
1.  Install Kafka, StreamSets and Mongo
2.  Create a kafka topic called  MonksLiveMatches
3.  Deploy  GetMonksLiveScoresToKafka & PutMonksMatchesToMongoFromKafka pipelines contained in streamsets folder 
4.  Replace the api token with your sportMonks Api token in GetMonksLiveScoresToKafka
5.  To create a collection in mongo that holds FT Matches only run BuildFootballMatchesFromMatches


# StreamSets Pipelines 
GetMonksLiveScoresToKafka
![alt text](https://github.com/athanikos/Football_Stats_Storage_And_Pipelines/blob/master/screenshots/GetMonksLiveScoresToKafka.png)

PutMonksMatchesToMongoFromKafka
![alt_text](https://github.com/athanikos/Football_Stats_Storage_And_Pipelines/blob/master/screenshots/PutMonksMatchesToMongoFromKafka.png)












