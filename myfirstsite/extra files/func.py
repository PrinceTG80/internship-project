from django.conf import settings
import json
import pymongo

DB = settings.DB

def writeDB(obj,loc,filename=DB):
    with open(filename, 'r') as dbjson : #we first open this in read mode to convert the json to python dict
        datadict= json.loads(dbjson.read()) #this is the dict of our database
        dbjson.close()
        temp=datadict['database'][loc]
        temp.append(obj)
    
    with open(filename, 'w') as jsondb:
        json.dump(datadict, jsondb )
        jsondb.close()


def readDB(loc,filename=DB):
    with open(filename,'r') as dbjson:
        datadict=json.loads(dbjson.read())
        dbjson.close()
        temp=datadict['database'][loc]
        return temp

def findDB(userobj):
    with open(DB,'r') as dbd:
        dbdict=json.loads(dbd.read())
        dbd.close()
        
        for i in range(len(dbdict['database']['userdata'])):
            if userobj['email']==dbdict['database']['userdata'][i]['email'] and userobj['pswd']==dbdict['database']['userdata'][i]['pswd']:
                return True
        return False
            
             

        
    

# from bson import ObjectId
  


