
import requests


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
    def printResponseContent(response):
        print(response.content)


caller = ApiCaller()
caller.printResponseContent(caller.get_all_countries())
caller.printResponseContent(caller.get_odds())
caller.printResponseContent(caller.get_events())