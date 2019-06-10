#!/usr/bin/env python

import redis
import requests
from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
import sys

app = Flask(__name__)
api = Api(app)
cache = redis.Redis(host='redis', port=6379)
cors = CORS()
cors.init_app(app)  # new

dapikey = '000bdb4c-8231-430b-b291-db2b23416ec3'
url = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'


class Product(Resource):
    def get(self, word):
        r = requests.get(url+word+'?key='+dapikey)
        out = r.json()[0]


        return out


class Root(Resource):
    def get(self):
        return 'hi'
api.add_resource(Root, '/')
api.add_resource(Product, '/<string:word>')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80,debug=True)
