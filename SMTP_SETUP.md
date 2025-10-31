# Configuration SMTP pour l'envoi d'emails

## Variables d'environnement requises

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Configuration SMTP pour l'envoi d'emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Configuration Gmail

Pour utiliser Gmail comme service SMTP :

1. **Activez la vérification en 2 étapes** sur votre compte Google
2. **Générez un mot de passe d'application** :
   - Allez dans les paramètres de votre compte Google
   - Sécurité → Vérification en 2 étapes → Mots de passe d'application
   - Générez un nouveau mot de passe d'application
   - Utilisez ce mot de passe dans `SMTP_PASS`

## Autres services SMTP

Vous pouvez utiliser d'autres services SMTP en modifiant les variables :

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

### Serveur SMTP personnalisé
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
```

## Test de la configuration

Une fois configuré, le formulaire de contact enverra automatiquement les emails à `carmelahotin@gmail.com` avec :

- ✅ Notifications toast de succès/erreur
- ✅ Validation des champs obligatoires
- ✅ Interface utilisateur responsive
- ✅ Gestion des états de chargement
- ✅ Reset automatique du formulaire après envoi

## Sécurité

- Ne commitez jamais le fichier `.env.local`
- Utilisez des mots de passe d'application plutôt que vos mots de passe principaux
- Considérez l'utilisation d'un service d'email dédié pour la production



