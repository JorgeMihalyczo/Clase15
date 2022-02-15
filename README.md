# heladeria

@yael: habia utilizado Sass en el proyecto, lo había instalado de la siguiente manera:

1 --> npm init (todo enter y al final "yes")
2 --> npm install -D node-sass nodemon
3 --> entrar al archivo package.json, editar la linea 7, agregarle una coma, enter y agregar linea 8:
"build-css": "node-sass --include-path scss scss/style.scss css/style.css",
"watch-css": "nodemon -e scss -x \"npm run build-css\"" [guardar los cambios]
4 --> npm run watch-css

--  El js esta aplicado en productos.html y formulario.html y los archivos se encuentran en la carpeta "js".
