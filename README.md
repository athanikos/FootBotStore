# Football_Stats_Storage_And_Pipelines

# Introduction 
This repository contains the Storage and Pipelines part of the FootBallStats project.
The purpose of the project is to fetch live football data store and analyze.


# Architecture

Sources ---https--> Kafka ------> Mongo 
                                  
StreamSets is used for pipeline development.
SportMonks is used as a live data provider.


# QuickStart 
1.  Install Kafka, StreamSets and Mongo.
2.  Create a kafka topic called  MonksLiveMatches.
3.  Deploy  GetMonksLiveScoresToKafka &  pipelines contained in streamsets folder 
4.  Replace your sportMonks Api token in GetMonksLiveScoresToKafka







