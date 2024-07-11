# Generated by Django 5.0.4 on 2024-04-27 10:51

import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='name',
        ),
        migrations.RemoveField(
            model_name='car',
            name='year',
        ),
        migrations.AddField(
            model_name='car',
            name='city',
            field=models.CharField(default='Lagos', max_length=100),
        ),
        migrations.AddField(
            model_name='car',
            name='color',
            field=models.CharField(default='black', max_length=100),
        ),
        migrations.AddField(
            model_name='car',
            name='condition',
            field=models.CharField(default='Good', max_length=100),
        ),
        migrations.AddField(
            model_name='car',
            name='img',
            field=models.CharField(default='default.jpg', max_length=100),
        ),
        migrations.AddField(
            model_name='car',
            name='location',
            field=models.CharField(default='No. 5, Freedom Street', max_length=100),
        ),
        migrations.AddField(
            model_name='car',
            name='power',
            field=models.CharField(default='2000cc', max_length=100),
        ),
        migrations.AlterField(
            model_name='car',
            name='category',
            field=models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, to='api.category'),
        ),
        migrations.AlterField(
            model_name='user',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 27, 10, 51, 24, 322093, tzinfo=datetime.timezone.utc), verbose_name='date joined'),
        ),
    ]
