# Generated by Django 4.2.4 on 2023-09-16 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='servicePageSEO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meta_title', models.CharField(blank=True, max_length=500, null=True)),
                ('meta_description', models.CharField(blank=True, max_length=1000, null=True)),
            ],
        ),
    ]