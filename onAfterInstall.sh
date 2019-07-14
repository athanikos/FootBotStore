-- set retention to one year 
cd /opt/kafka/bin 
./kafka-topics.sh --zookeeper localhost:2181 --alter --topic MonksLiveMatches  --config retention.ms=315569260000
