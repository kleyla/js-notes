# Expresiones regulares

Caracteres especiales

$\^.+|?*()[]{}

## Que es un set de caracteres?
Conjunto que va dentro de corchetes.

Ej. Busqueda de vocales

[aeiou]

## Rango de un set

[a-z] Solo tiene un rango

[a-fA-Z] Aqui hay dos rangos de la a-f y de A-Z

[0-9]+ Encuentra un solo resultado 

[0-9]{3} Numeros de longitud 3

[0-9]{5,8} Numeros de longitud 5 a 8

Negar un set de caracteres

Ej. Encuentra todo lo que no sea numeros

[^0-9]+

## Caracter punto (.)

Encuentra cualquier cosa. Con excepcion de saltos de linea.

Ej. encuentra todo lo que empiece con un numero, y termine en un punto

[0-9].+\.

Encuentra los tag de un html

<.*>