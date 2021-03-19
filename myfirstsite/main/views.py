from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

import json
from db import writeDB, readsitedata , find_user ,already_user , addtocart , readcart,profile_give


# Create your views here.
def reg(request):
    if request.method =="GET":
        return HttpResponse("<h1> nothing to get here</h1>")


    
    elif request.method =="POST":
        data_obj=json.loads(request.body)
        user_obj=data_obj['dat']
        if already_user(user_obj["email"])==False:
            writeDB(obj=user_obj,loc='userdata')
            if find_user(user_obj)==True:
                return JsonResponse({"regStatus":"success"})
        else:
            return JsonResponse({"regStatus":"fail","comment":"This Email is already registered"})

    else:return HttpResponse("<h1> not a method</h1>")

def log_in(request):

    if request.method == "POST":
        inobj=json.loads(request.body)

        if find_user(inobj['dat'])==True:
            return JsonResponse({"logStatus":True , "id":inobj['dat']['email'] })
        else:return JsonResponse({"logStatus":False})
        
        

    elif request.method =="GET":
        return HttpResponse("<h1> nothing to get here</h1>")

    else:return HttpResponse("<h1> not a method</h1>")



"""================================================================="""

def cart_add(request):
    inobj=json.loads(request.body) # inobj has email and product id    
    if request.method =="POST":
        addtocart(inobj)
        return JsonResponse({"status":"success"})


    else:return HttpResponse("<h1> not a method</h1>")

def cart_read(request):
    inobj=json.loads(request.body) #inobj will be just an email
    if request.method =="POST":
        res=readcart(inobj)
        return JsonResponse({"usercart":res})

"""=================================================================="""
def read_profile(request):
    inobj=json.loads(request.body) #inobj will be just an email
    if request.method =="POST":
        profile=profile_give(inobj)
        return JsonResponse({"profile":profile})
        