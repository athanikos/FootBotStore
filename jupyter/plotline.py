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

df_minimal_Eredevisie = df_Eredevisie[[ 'startingatwithtime', 'hometeamname','awayteamname'
                                        ,'HomeTeamWhileHomeAverageAttackUpTo75'
                                        ,'HomeTeamWhileHomeAverageDefenceUpTo75'
                                        ,'HomeTeamWhileHomeAverageAttackLast15'
                                        ,'HomeTeamWhileHomeAverageDefenceLast15'
                                        ,'AwayTeamWhileAwayAverageAttackUpTo75'
                                        ,'AwayTeamWhileAwayAverageDefenceUpTo75'
                                        ,'AwayTeamWhileAwayAverageAttackLast15'
                                        ,'AwayTeamWhileAwayAverageDefenceLast15'
                                        ,'HomeTeamWhileHomeAverageAttack'
                                        ,'HomeTeamWhileHomeAverageDefence'
                                        ,'AwayTeamWhileAwayAverageAttack'
                                        ,'AwayTeamWhileAwayAverageDefence'
                                        ,'differenceAt75'
                                        ,'redDifferenceAt75'
                                        ,'CombinedWhileHomeAverage'
                                        ,'CombinedWhileAwayAverage'
                                        ,'CombinedWhileAwayAverageUpTo75'
                                        ,'CombinedWhileAwayAverageLast15'
                                        ,'CombinedWhileHomeAverageUpTo75'
                                        ,'CombinedWhileHomeAverageLast15'
                                        ,'goalScoredLast15'   
                                      ]].copy()

df_minimal_Eredevisie.groupby(['hometeamname'])['HomeTeamWhileHomeAverageAttack'].mean().plot(kind='bar')
df_minimal_Eredevisie.groupby(['hometeamname'])['HomeTeamWhileHomeAverageDefence'].mean().plot(kind='bar')
df_minimal_Eredevisie.groupby(['awayteamname'])['AwayTeamWhileAwayAverageDefence'].mean().plot(kind='bar')
df_minimal_Eredevisie.groupby(['awayteamname'])['AwayTeamWhileAwayAverageAttack'].mean().plot(kind='bar')


plt.show()
