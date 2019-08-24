import urllib.request
from datetime import date, timedelta
import time
import base64

apitoken = "YOURAPITOKEN"
pathtosave ="PATH TO SAVE "

start_date = date(2017, 8, 1)
end_date = date(2019, 8, 24)
delta = timedelta(days=1)

while start_date <= end_date:
    print (start_date.strftime("%Y-%m-%d"))
    contents = urllib.request.urlopen("https://soccer.sportmonks.com/api/v2.0/fixtures/between/" + start_date.strftime("%Y-%m-%d") + "/"
                                      + start_date.strftime("%Y-%m-%d") + "?api_token=" + apitoken + "&include=localTeam,visitorTeam,events,inplay,stats").read()
    with open( pathtosave + start_date.strftime("%Y-%m-%d") + ".json", 'w+') as file:
        file.write(contents.decode('utf-8'))
    start_date += delta


