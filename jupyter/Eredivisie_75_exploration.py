
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
#54% at -1 , 52% @ 1 



# differenceAt75 , awayGoalsUpTo75 
# more than 53% when -1,1 and awaygoals = 1,2 
df_lastGoal60orMore = df
pd.set_option('display.max_rows', 1500)
df_Eredevisie =  df_lastGoal60orMore[df_lastGoal60orMore.league_name == 'Eredivisie'  ]
df_Eredevisie.groupby(['differenceAt75','awayGoalsUpTo75'])['goalScoredLast15'].sum() / df_Eredevisie.groupby(['differenceAt75','awayGoalsUpTo75']).size()

# differenceAt75 , homeGoalsUpTo75 
# -2 : 57% when 1,2 
#-1 53,55,53
df_lastGoal60orMore = df
pd.set_option('display.max_rows', 1500)
df_Eredevisie =  df_lastGoal60orMore[df_lastGoal60orMore.league_name == 'Eredivisie'  ]
df_Eredevisie.groupby(['differenceAt75','homeGoalsUpTo75'])['goalScoredLast15'].sum() / df_Eredevisie.groupby(['differenceAt75','homeGoalsUpTo75']).size()
# both  illustrate that when diff = 0 chances are @45%



# per team 
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
df_Eredevisie.groupby(['differenceAt75','hometeamname'])['goalScoredLast15'].sum() / df_Eredevisie.groupby(['differenceAt75','hometeamname']).size()

# check sizes 
df_Eredevisie.groupby(['differenceAt75','hometeamname'])['goalScoredLast15'].size()


