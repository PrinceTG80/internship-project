import pymongo
from bson import ObjectId

myclient = pymongo.MongoClient("mongodb://127.0.0.1:27017/")
mydb = myclient["database"]
mycol=mydb["userdata"]
k=mycol.find_one({"email":"khandya@chinya.com","pswd":"chaman"})
print(k)
print("its type is ",type(k))
if k==0:print("yes it can be zero")
elif k==False:print("yes it can be false")
elif k== None :print("yes it can be none")

# for i in customers:
#     print(i)



