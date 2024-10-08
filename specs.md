Liste des API pour le projet workshop EPSI:

**POST** - **/user/register**\
Body:
```json
{
    "email": "string",
    "password": "string",
    "username": "string"
}
```
Réponse code 200:
```txt
TOKEN
```
Réponse code 400:\
Si le mail est déjà utilisé:
```txt
User already exists
```

**POST** - **/user/login**\
Body:
```json
{
    "email": "string",
    "password": "string"
}
```
Réponse code 200:
```txt
TOKEN
```

**GET** - **/user/me**\
Réponse code 200:
```json
{
    "id": "string",
    "email": "string",
    "username": "string"
}
```

------------------------------------------

Addiction:
- Scope (1000 si system, 2000 si user)
- Label
- Type (DELAY / AMOUNT)

UserAddiction:
- userId
- addictionId
- currentValue
- targetValue
- 