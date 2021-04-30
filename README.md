# | REST API using Node.js / Express.js / MongoDB |

### How to use : 

Step 1 : Install Required packages using NPM

```
npm install
```

step 2 : Run the Application using node 

```
node app.js
```
 ### Documentation :
 
 [POST] /admin/add  Ajouter un admin
 
 Request body :
 ```
 {
    "username" : "username",
    "password" : "password"
 }
 ```
  [POST] /admin/login Authentifiation d'un admin
  
 Request body :
  ```
 {
    "username" : "username",
    "password" : "password"
 }
 ```
 Response : token
 
 [GET] /client/getAll Affichier tous les clients
 Headers :
   ```
   "auth-token" : "token"
 
 ```
 Response : Array of all clients objects
 
 
 
 
