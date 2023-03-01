## PROYECTO TICMAS: CV

Para inicializar este proyecto es necesario instalar:
   1. Node.js mediante el siguiente enlace: ([https://nodejs.org/es/download/](https://nodejs.org/es/download/)).
   2. Después de haber cumplido el primer paso, dentro de la terminal de Visual Studio Code se debe instalar la dependencia json server mediante el siguiente comando:
   
            npm install (o npm i) json-server

Una vez instalado la dependencia, se crea una base de datos **db.json**  para poder empezar a trabajar. Como este proyecto ya tiene incorparda una base de datos lo que hay que hacer es levantar esa base.

**NOTA IMPORTANTE: ** Al levantar el html los datos se verán vacíos. 

Para levantar la base de datos se pueden utilizar dos comandos:
                     json-server --watch db.json

O bien
                     json-server db.json

Una vez leventada la base de datos, ahora podrá trabajar con json-server.

------------

**ACLARACIONES IMPORTANTES:**

   - Si por alguna razón los datos no se cargan en la base de datos *db.json* reintete nuevamente. 
   
   - Siempre verificar que antes de usar la base de datos la misma se encuentre activa.
   
   - Por algún problema que se desconoce las ventanas modales no se pudieron ajustar al sistema responsive. Desafortunadamente, no se pudo encontrar solución.
   
   - El script de ***index.html*** de la linea 177 a la 192 se corresponde con las validaciones personalizadas del formulario de bootstrap. Para que esas validaciones funcionen la documentacion de bootstrap dice que es necesario poner el script abajo del formulario. (no necesariamente abajo).
