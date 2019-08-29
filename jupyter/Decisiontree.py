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
                                        ,'differenceAt75'
                                        ,'homeGoalsUpTo75'
                                        ,'awayGoalsUpTo75'
                                        ,'goalScoredLast15'   
                                      ]].copy()


import pandas as pd
from sklearn.tree import DecisionTreeClassifier # Import Decision Tree Classifier
from sklearn.model_selection import train_test_split # Import train_test_split function
from sklearn import metrics #Import scikit-learn metrics module for accuracy calculation

#https://www.datacamp.com/community/tutorials/decision-tree-classification-python
feature_cols = [                   
                                         'differenceAt75'
                                        ,'homeGoalsUpTo75'
                                        ,'awayGoalsUpTo75' ]
                                        
X = df_minimal_Eredevisie[feature_cols] # Features
y = df_minimal_Eredevisie.goalScoredLast15 # Target variable

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1) # 70% training and 30% test


# Create Decision Tree classifer object
clf = DecisionTreeClassifier()

# Train Decision Tree Classifer
clf = clf.fit(X_train,y_train)

y_pred = clf.predict(X_test)


print("Accuracy:",metrics.accuracy_score(y_test, y_pred))
