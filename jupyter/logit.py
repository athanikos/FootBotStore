from pymongo import MongoClient
client = MongoClient("localhost", 27017, maxPoolSize=50)
db = client.book
collection = db['FullTimeMatches']
cursor = collection.find()
df =  pd.DataFrame(list(cursor))
pd.set_option('display.max_rows', 5000)
pd.options.display.max_columns = None
df_Eredevisie =  df[df.league_name == 'Eredivisie'  ]

df_minimal_Eredevisie = df_Eredevisie[[
                                        'HomeTeamWhileHomeAverageAttackUpTo75'
                                        ,'HomeTeamWhileHomeAverageDefenceUpTo75'
                                        ,'HomeTeamWhileHomeAverageAttackLast15'
                                        ,'HomeTeamWhileHomeAverageDefenceLast15'
                                        ,'AwayTeamWhileAwayAverageAttackUpTo75'
                                        ,'AwayTeamWhileAwayAverageDefenceUpTo75'
                                        ,'AwayTeamWhileAwayAverageAttackLast15'
                                        ,'AwayTeamWhileAwayAverageDefenceLast15'
                                        ,'differenceAt75'
                                        ,'homeGoalsUpTo75'
                                        ,'awayGoalsUpTo75'
                                        ,'goalScoredLast15'   
                                      ]].copy()

feature_cols = [                 
                                        'HomeTeamWhileHomeAverageAttackUpTo75'
                                        ,'HomeTeamWhileHomeAverageDefenceUpTo75'
                                        ,'HomeTeamWhileHomeAverageAttackLast15'
                                        ,'HomeTeamWhileHomeAverageDefenceLast15'
                                        ,'AwayTeamWhileAwayAverageAttackUpTo75'
                                        ,'AwayTeamWhileAwayAverageDefenceUpTo75'
                                        ,'AwayTeamWhileAwayAverageAttackLast15'
                                        ,'AwayTeamWhileAwayAverageDefenceLast15'
                                        ,'differenceAt75'
                                        ,'homeGoalsUpTo75'
                                        ,'awayGoalsUpTo75'
                                         ]

y =df_minimal_Eredevisie['goalScoredLast15']
X=df_minimal_Eredevisie[feature_cols]


from sklearn.model_selection  import train_test_split 

X_train, X_test, y_train , y_test = train_test_split(X,y,test_size=0.3, random_state=1)
from sklearn.linear_model import LogisticRegression 
logmodel = LogisticRegression() 
logmodel.fit(X_train,y_train)

predictions = logmodel.predict(X_test)
from sklearn.metrics import classification_report 
classification_report(y_test,predictions)

from sklearn.metrics import confusion_matrix 
confusion_matrix(y_test,predictions)




