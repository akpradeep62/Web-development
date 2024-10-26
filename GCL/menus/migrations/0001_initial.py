# Generated by Django 4.2.4 on 2023-09-03 19:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='primaryMenu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('url', models.CharField(max_length=100)),
                ('order', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='subMenu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('url', models.CharField(max_length=100)),
                ('parent_menu', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='menus.primarymenu')),
            ],
        ),
    ]