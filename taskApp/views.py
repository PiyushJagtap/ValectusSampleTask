from django.shortcuts import render
from .models import SampleData

# Create your views here.


def getData(request):
    results = SampleData.objects.all()
    return render(request, "index.html", {"data": results})
