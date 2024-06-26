
# Sprint7

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión 17.3.7.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/sprint7.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd sprint7
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Servidor de Desarrollo

Para ejecutar un servidor de desarrollo, utiliza el siguiente comando:
```sh
ng serve
```

Navega a http://localhost:4200/ en tu navegador. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.


## Instalació i configuració del json-server-auth:

1. ```sh
   npm install -D json-server@0.17.4 json-server-auth
   ```

3. Creació del fitxer db.json per emmagatzemar els usuaris/es amb el següent contingut: 

{

  "users": []

}

3. Activem el nostre backend:
   ```sh
   npx json-server-auth db.json
   ```

## Ayuda Adicional
Para obtener más ayuda sobre Angular CLI, usa:

```sh
ng help
```



