
#!/bin/sh
/opt/zookeeper/bin/zkServer.sh start
/opt/kafka/bin/kafka-server-start.sh /opt/kafka/config/server.properties
nohup /opt/streamsets/streamsets-datacollector-3.7.2/bin/streamsets dc &


