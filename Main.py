
import requests
import time


class ApiCaller:

    KEY = "946c4bd036cccb7f704c50b98eff5c127db1054b88f8f3ac35cc6eef437bbd71"

    @staticmethod
    def get_all_countries():
        url = "https://apifootball.com/api/?action=get_countries&APIkey="
        return requests.post(url + ApiCaller.KEY)


    @staticmethod
    def get_odds():
        url = "https://apifootball.com/api/?action=get_odds&APIkey="
        return requests.post(url + ApiCaller.KEY)

    @staticmethod
    def get_events():
        url = "https://apifootball.com/api/?action=get_events&APIkey="
        return requests.post(url + ApiCaller.KEY)

    @staticmethod
    def get_leagues():
        url = "https://apifootball.com/api/?action=get_leagues&APIkey="
        return requests.post(url + ApiCaller.KEY)

    @staticmethod
    def get_live_scores():
        url = "https://apifootball.com/api/?action=get_events&&from=2019-03-03&to=2019-03-04&APIkey="
        return requests.post(url + ApiCaller.KEY)

    @staticmethod
    def printResponseContent(response):
        print(response.content)


caller = ApiCaller()
#caller.printResponseContent(caller.get_all_countries())
#caller.printResponseContent(caller.get_odds())
#caller.printResponseContent(caller.get_events())
#caller.printResponseContent(caller.get_live_scores())

while True:
    caller.printResponseContent(caller.get_live_scores())
    time.sleep(30)

