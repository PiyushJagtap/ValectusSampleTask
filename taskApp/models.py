from django.db import models


class SampleData(models.Model):
    id = models.IntegerField(primary_key=True)
    City = models.TextField(max_length=100)

    class Meta:
        db_table = "tasktable"
