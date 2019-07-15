# Football_Stats_Storage_And_Pipelines

# Introduction 
This repository contains the Storage and Pipelines part of the FootBallStats project.
The purpose of the project is to fecth live football data store and analyze.


# Architecture

Sources ---https-->    Kafka ---> Mongo <---| 
                                  |         |
                                  |_________| 

StreamSets is used for pipeline development.
SportMonks is used as a live data provider.


# QuickStart 
1.  Install Kafka, StreamSets and Mongo.
2.  Create a kafka topic called 
3.  Deploy 2 pipelines see streamsets folder 
4.  Replace your sportMonks Api token in GetMonksLiveScoresToKafka







