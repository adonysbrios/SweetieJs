# SweetieJS

Antes de que leas nada, [ya existe la etiqueta dialog en html Xd](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)

SweetieJS es una librería código abierto para la creación de alertas sencillas, llamativas, personalizables y nada molestas para el usuario.
Cuenta con 3 tipos de alertas personalizables (info, prompt, confirm) y 3 tipos de alertas por defecto (success, warning, error)

# Alertas de SweetieJs
![Captura de pantalla (365)](https://github.com/adonysbrios/SweetieJs/assets/140138535/3ce89f74-ce97-4f33-96a0-de94bb25ccb1)

# Uso e instalación de SweetieJs
Para instalar y usar SweetieJs en tu proyecto sigue estos pasos:
- Descarga sweetie.css y sweetie.js
- Importa los archivos en tu HTML
```html
<!-- Copia esto en la etiqueta head -->
<link rel="stylesheet" href="sweetie.css">
<!-- Copia esto al final del body -->
<script src="sweetie.js"></script>
```
- Puedes empezar ahora a crear alertas, para probar que funcione puedes probar con una alerta
```javascript
simpleAlert({
            title:'The Leadership of Slight Data', 
            information:'Doupproaches to the creation of with help of the development methodology must stay true to The Environment of Minor Regulation ',
            position:'left-top',
})
```

## Guía de SweetieJS
Aqui encontrara una guía de las funciones de SweetieJs

# simpleAlert():
- Crea una alerta simple para mostrar información
- Como parametro recibira un objeto con los siguientes campos, el valor dado en el ejemplo son los parametros por defecto:
```javascript
{
        title: 'Title',
        information: 'Information',
        background: '#fff',
        titleColor: '#2E2E2E',
        infoColor: "#757575",
        accept: 'Aceptar',
        position: 'left-top'
}
```

# confirmAlert():
- Crea una alerta con dos botones para pedir al usuario confirmacion sobre algo
- ¡Importante! A la hora de usar callbacks es necesario que la función que declare como callback llame a otra funcion que ejecute al fin el código 
que usted desea, en caso de no ser así pueden haber errores
- Como parametro recibira un objeto con los siguientes campos, el valor dado en el ejemplo son los parametros por defecto:
```javascript
{
        title: 'Title',
        information: 'Information',
        background: '#fff',
        titleColor: '#2E2E2E',
        infoColor: "#757575",
        accept: 'Aceptar',
        cancel: 'Cancelar',
        acceptCallback: customCallback,
        cancelCallback: customCallbackCancel,
        position: 'left-top'
}
```

# promptAlert():
- Crea una alerta con un input para obtener información del usuario
- ¡Importante! A la hora de usar callbacks es necesario que la función que declare como callback llame a otra funcion que ejecute al fin el código 
que usted desea, en caso de no ser así pueden haber errores
- El parametro ```acceptCallback``` devuelve como parametro de el valor ingresado por el usuario
- Como parametro recibira un objeto con los siguientes campos, el valor dado en el ejemplo son los parametros por defecto:
```javascript
{
        title: 'Title',
        information: 'Information',
        background: '#fff',
        titleColor: '#2E2E2E',
        infoColor: "#757575",
        accept: 'Aceptar',
        acceptCallback: customPromptCallback,
        position: 'left-top',
        inputColor: '#d5d5d5'
}
```

# successAlert():
- Crea una alerta para mostrar el fin exitoso de un proceso
- Debe pasarle un parametro ´message´ que sera mostrado al usuario

# errorAlert():
- Crea una alerta para mostrar el fin con errores de un proceso
- Debe pasarle un parametro ´message´ que sera mostrado al usuario

# warningAlert():
- Crea una alerta para mostrar una alerta al usuario
- Debe pasarle un parametro ´message´ que sera mostrado al usuario

## Posiciones de las alertas
- left-top: Se posicionara la alerta en la parte superior izquierda
- left-bottom: Se posicionara la alerta en la parte inferior izquierda
- right-top: Se posicionara la alerta en la parte superior derecha
- right-bottom: Se posicionara la alerta en la parte inferior derecha
