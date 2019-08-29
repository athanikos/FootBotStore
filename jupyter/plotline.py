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
df_Eredevisie =  df[ (df.league_name == 'Eredivisie') & (df.hometeamname == 'Ajax' )   ]

df_Eredevisie['dt'] = pd.to_datetime(df_Eredevisie['startingat'])
df_Eredevisie = df_Eredevisie.set_index('dt')

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


fig, ax = plt.subplots()

for key, grp in df_Eredevisie.groupby(['hometeamname']):
    ax = df_Eredevisie['HomeTeamWhileHomeAverageAttackUpTo75'].plot(linewidth=0.5, label=key)


plt.legend(loc='best')
plt.show()
