#https://www.dataquest.io/blog/tutorial-time-series-analysis-with-pandas/
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
df_Eredevisie =  df[df.league_name == 'Eredivisie'  ]

dfAjax  =  df_Eredevisie[df_Eredevisie.hometeamname == 'Ajax'  ]
dfAjax['dt'] = pd.to_datetime(dfAjax['startingat'])
dfAjax = dfAjax.set_index('dt')

dfAjax.loc['2010-01-01':'2019-08-22']

dfAjax['AwayTeamWhileAwayAverageAttackUpTo75'].plot(linewidth=0.5);

