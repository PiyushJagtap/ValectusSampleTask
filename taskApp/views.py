from django.shortcuts import render
from .models import SampleData

# Create your views here.


def hello_world(request):
    results = SampleData.objects.all()
    return render(request, "index.html", {"data": results})
