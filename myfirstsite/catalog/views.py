from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

import json
from db import writeDB, readsitedata , find_user ,already_user , addtocart , readcart


def get_men(request):
    if request.method =="POST":#angular doesnt allow to send something without post method
        inobj=json.loads(request.body)
        option=inobj["opt"]
        if option=='zzz':
            res=readsitedata(loc='men',opt=option)
            return JsonResponse({"catalogue":res})
        else:
            return JsonResponse(readsitedata(loc='men',opt=option))



    else:return HttpResponse("<h1> not a method</h1>")

def get_women(request):
    if request.method =="POST":
        inobj=json.loads(request.body)
        option=inobj["opt"]
        if option=='zzz':
            res=readsitedata(loc='women',opt=option)
            return JsonResponse({"catalogue":res})
        else:
            return JsonResponse(readsitedata(loc='women',opt=option))



    else:return HttpResponse("<h1> not a method</h1>")

def get_best(request):
    if request.method =="POST":
        inobj=json.loads(request.body)
        option=inobj["opt"]
        if option=='zzz':
            res=readsitedata(loc='best-seller',opt=option)
            return JsonResponse({"catalogue":res})
        else:
            return JsonResponse(readsitedata(loc='women',opt=option))



    else:return HttpResponse("<h1> not a method</h1>")