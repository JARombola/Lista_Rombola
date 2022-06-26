# Funcionamiento
Los datos son generados de manera aleatoria cada vez que se carga la aplicación, por lo que siempre habrán resultados diferentes.

# Reglas Aplicadas
## Color Nombre Alumno:
- **Verde:** Si el alumno aprobó (_Nota >= 6_)
- **Rojo:** Si el alumno no aprobó (_Nota < 6_)
- **Negro:** El usuario NO se encuentra _activo_.

## Icono junto al nombre del alumno:
Depende de la carrera, pudiendo ser:
- **Medicina:** --> Corazón.
- **Música:** --> Nota musical
- **Sistemas:** --> Pc.

## Alumno inactivo:
Si el alumno se encuentra inactivo -> se muestra un mensaje en el panel.
Sino, se muestra la información correspondiente.

## Background panel colapsable:
- Verde: Alumno aprobado.
- Rojo: Alumno desaprobado.

## Info panel colapsable - Promedio:
- Se usa un pipe para truncar la cantidad de decimales. 
- Junto a la notas se muestra un ícono diferente en caso de aprobado/desaprobado.
