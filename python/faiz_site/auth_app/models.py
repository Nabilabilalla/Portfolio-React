from django.db import models

class Utilisateur(models.Model):
    nom = models.CharField(max_length=30)
    mot_de_passe = models.CharField(max_length=50)