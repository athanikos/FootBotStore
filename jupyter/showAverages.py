# prints HomeTeamWhileHomeAverageAttackUpTo75 as a time series 
import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
from pymongo import MongoClient
client = MongoClient("localhost", 27017, maxPoolSize=50)
db = client.book
collection = db['FullTimeMatches']
cursor = collection.find()
df =  pd.DataFrame(list(cursor))
pd.set_option('display.max_rows', 5000)
pd.options.display.max_columns = None
df_Eredevisie =  df[ (df.league_name == 'Eredivisie')  ]




for key, grp in df_Eredevisie.groupby(['hometeamname']):
    print(key + " " +  str(grp['HomeTeamWhileHomeAverageAttack'].mean()) + " "  + str(grp['HomeTeamWhileHomeAverageAttackUpTo75'].mean()))
