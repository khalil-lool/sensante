# Plan Authentification — SénSanté

## 1. Objectif

L’objectif de ce module est de sécuriser l’application SénSanté.
Les données de santé étant sensibles, seuls les utilisateurs authentifiés pourront accéder aux fonctionnalités.

L’authentification permet de vérifier l’identité de l’utilisateur (email + mot de passe).
L’autorisation permet de définir ce que l’utilisateur a le droit de faire selon son rôle.

---

## 2. Technologie utilisée

Nous allons utiliser :

- NextAuth.js : pour gérer l’authentification et les sessions
- Prisma : pour accéder à la base de données
- bcrypt : pour sécuriser les mots de passe (hachage)
- PostgreSQL : pour stocker les utilisateurs

---

## 3. Flux d’authentification

1. L’utilisateur saisit son email et mot de passe
2. NextAuth vérifie les informations dans la base de données
3. Si les informations sont correctes :
   - une session est créée (JWT)
4. L’utilisateur peut accéder aux pages protégées
5. Son rôle est utilisé pour définir ses permissions

---

## 4. Rôles des utilisateurs

Trois rôles sont définis :

- AGENT :
  - créer des patients
  - saisir les symptômes

- MEDECIN :
  - toutes les actions de l’AGENT
  - valider les diagnostics
  - voir tous les patients

- ADMIN :
  - toutes les actions du MEDECIN
  - gérer les utilisateurs
  - accéder au dashboard

---

## 5. Étapes d’implémentation

1. Installer NextAuth et bcrypt
2. Configurer les variables d’environnement (.env)
3. Créer la configuration NextAuth (auth.ts)
4. Créer la route API /api/auth/[...nextauth]
5. Créer une API d’inscription (/api/register)
6. Hasher les mots de passe avec bcrypt
7. Créer les pages :
   - login
   - register
8. Mettre en place le SessionProvider
9. Protéger les pages (redirection vers /login si non connecté)
10. Vérifier la session dans les API Routes

---

## 6. Modèle utilisateur (User)

```prisma
model User {
  id       Int    @id @default(autoincrement())
  nom      String
  prenom   String
  email    String @unique
  password String
  role     String
}