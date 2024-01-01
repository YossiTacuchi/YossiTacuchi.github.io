<?php

try {
   // Recibe los datos del formulario
    $nombre = $_POST['nombre'];
    $nombre = $_POST['apellidos'];
    $nombre = $_POST['empresa'];
    $nombre = $_POST['telefono'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Configura el destinatario del correo electrónico
    $destinatario = 'yoshi.tacuchi@gmail.com';

    // Asunto del correo electrónico
    $asunto = 'Nuevo mensaje del formulario de contacto';

    // Cuerpo del correo electrónico
    $mensajeCorreo = "Nombre: $nombre\n";
    $mensajeCorreo .= "Correo Electrónico: $email\n";
    $mensajeCorreo .= "Mensaje:\n$mensaje";

    // Cabeceras del correo electrónico
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Envía el correo electrónico
    mail($destinatario, $asunto, $mensajeCorreo, $headers);

    // Responde al cliente (puedes personalizar este mensaje)
    echo '¡Gracias! Tu mensaje ha sido enviado con éxito.';

    // Puedes agregar más lógica aquí, como guardar los datos en una base de datos, etc.
} catch (Exception $e) {
    // Manejo de errores
    echo 'Error: ' . $e->getMessage();
}



?>
