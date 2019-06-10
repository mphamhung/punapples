#!/usr/bin/env python

import redis
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
cache = redis.Redis(host='redis', port=6379)

class Product(Resource):
    def get(self):
        return { 'test': 'test2' }


api.add_resource(Product, '/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80,debug=True)
