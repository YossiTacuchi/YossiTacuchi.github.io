# Proyecto Web Informativo

Este proyecto web informativo proporciona información sobre AD Logistics Website. A continuación, se detallan los pasos para configurar y desplegar el proyecto en un servidor.

## Pasos de Configuración

1. Abre el archivo `backend/procesar_contacto.php` en tu editor de texto favorito.

2. Busca las siguientes líneas de código:

    ```php
    // Configura el destinatario del correo electrónico
    $destinatario = 'contacto@adlogistics.com';
    ```

3. Reemplaza `'contacto@adlogistics.com'` con la dirección de correo electrónico deseada.

4. Guarda los cambios en `procesar_contacto.php`.

5. Copia el archivo modificado (`procesar_contacto.php`) de la carpeta `backend`.

6. Pégalos en el servidor del cliente, asegurándote de mantener la estructura de carpetas intacta.

7. Accede al proyecto en el dominio del cliente y verifica que todos los archivos se cargaron correctamente.

## Solución de Problemas

- **Error en el formulario de contacto:**
  - Si surge algún error con el formulario de contacto, dirígete a la carpeta `js`.
  - Abre el archivo `scripts.js` en tu editor de texto.

  - Busca la siguiente línea de código:
    ```javascript
    url: "backend/procesar_contacto.php",
    ```
  - Reemplaza `"backend/procesar_contacto.php"` con la URL correcta del script de procesamiento en el servidor.

- **Imágenes Faltantes:**
  - Asegúrate de subir todos los archivos de imágenes de la carpeta `assets` al servidor.

## Notas Adicionales

- En caso de otro problema, contactarse con el Equipo de Desarrollo.

