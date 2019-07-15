
#propability tables given difference at 75 
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from pymongo import MongoClient
client = MongoClient("localhost", 27017, maxPoolSize=50)
db = client.book
collection = db['FullTimeMatches']
cursor = collection.find()
df =  pd.DataFrame(list(cursor))
df_lastGoal60orMore = df
pd.set_option('display.max_rows', 1500)
df_Eredevisie =  df_lastGoal60orMore[df_lastGoal60orMore.league_name == 'Eredivisie'  ]
df_Eredevisie.groupby(['differenceAt75'])['goalScoredLast15'].sum() / df_Eredevisie.groupby(['differenceAt75']).size()
#53% at -1 

# all leagues at -1 , pro league & eredivisie & copa italia 
df_lastGoal60orMore = df
pd.set_option('display.max_rows', 1500)
df_Eredevisie =  df_lastGoal60orMore
df_Eredevisie.groupby(['differenceAt75','positionDifferenceWithin3','homeTeamIBetter'])['goalScoredLast15'].sum() / df_Eredevisie.groupby(['differenceAt75','positionDifferenceWithin3','homeTeamIBetter']).size()


# check size 
df_lastGoal60orMore = df
pd.set_option('display.max_rows', 1500)
df_Eredevisie =  df_lastGoal60orMore
df_Eredevisie.groupby(['league_name','differenceAt75']).size()

# per team this gives some numbers 
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from pymongo import MongoClient
client = MongoClient("localhost", 27017, maxPoolSize=50)
db = client.book
collection = db['events']
cursor = collection.find()
df =  pd.DataFrame(list(cursor))
df_lastGoal60orMore = df
pd.set_option('display.max_rows', 1500)
df_Eredevisie =  df_lastGoal60orMore[df_lastGoal60orMore.league_name == 'Eredivisie'  ]
df_Eredevisie.groupby(['differenceAt75','hometeamname'])['goalScoredLast15'].sum() / df_Eredevisie.groupby(['differenceAt75','hometeamname']).size()
