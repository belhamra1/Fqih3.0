from flask import Flask , render_template , url_for , request, redirect, Markup

import json
import codecs
import pyodbc 
from tqdm.notebook import tqdm
from elasticsearch import Elasticsearch
import requests
set

es = Elasticsearch([{'host': 'localhost', 'port': '9200'}])


app = Flask(__name__ , template_folder = 'templates')

@app.route('/')
def index():
    return render_template('index.html')



@app.route("/" , methods=["GET","POST"])
def search():
    if request.method == "POST" :
        search_input = request.form["search-query"]
        if request.form['action'] == 'search quran':
            query_body = {
                        "size":1000,
                        "query": {
                        "match": {
                        "aya_no_chakl.shingle_nostem": {
                        "query":search_input
                        }
                        }
                        }
            }
            result = es.search(index="quran_final_mapping", body=query_body)
            return render_template('search.html',result=result)

        if request.form['action'] == 'search hadith':
            query_body = {
                        "size":1000,
                        "query": {
                        "match": {
                        "hadith_arabic.shingle_nostem": {
                        "query":search_input
                        }
                        }
                        }
                            }
            result = es.search(index="hadith_with_mapping", body=query_body)
            return render_template('search_hadith.html',result=result)



if __name__ == "__main__":
    app.run()