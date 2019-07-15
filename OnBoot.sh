# start services scripts 
# assumes installation folders for kafka opt/kafka & streamsets /opt/streamsets/streamsets-datacollector-3.7.2

service mongod restart 

cd /opt/kafka/bin
./kafka-server-start.sh ../config/server.properties

/opt/streamsets/streamsets-datacollector-3.7.2/bin/streamsets dc

