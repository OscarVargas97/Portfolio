# Prueba Tecnica LicitaLab

Gracias por postular a la oferta por el puesto de trabajo de Desarrollador Full Stack.
La siguiente prueba servirá para medir sus conocimientos en términos de las tecnologías
solicitadas como requisito para postular a este puesto de trabajo.

## Introducción
A diario tenemos un montón de cosas por hacer, y qué mejor que hacer una lista de
autocompromisos que se adquieren para las tareas que nos faltan por hacer en el menester
diario.
Esta prueba consiste en realizar un sistema en que el usuario pueda crear, modificar y
eliminar tareas, las que tendrán descripción, fecha de creación y fecha de vencimiento.
Asimismo, dada la fecha de vencimiento, el sistema debe indicar con algún sistema de
colores las tareas que están a tiempo de realizarse, a punto de vencer y ya vencidas. Por
supuesto, el usuario podrá ordenar y filtrar tareas según fecha o contenido en su
descripción.
La aplicación debe tener un aspecto como el siguiente:

## Requisitos
La aplicación DEBE ser construida en su Front-end con el framework React.js
(https://reactjs.org/), ademas, cada pieza que el postulante identifique que se pueda
construir como un componente, debe entonces mostrarse como tal a nivel de código. Se le
solicita al postulante que utilice la arquitectura Redux (https://redux.js.org/) para el desarrollo
de la aplicación.
Para el desarrollo del servidor API, se debe usar NEST.js (https://nestjs.com/), o Express.js
en conjunto de un ORM adhoc para el trabajo de modelado y comunicación con el
Front-End.
Para el correcto desarrollo del trabajo, se le pide al postulante que utilice alguna
herramienta de control de versiones (GitHub o similar). Asimismo, la aplicación tendrá que
ser entregada mediante una URL del repositorio. Es de exclusiva responsabilidad del
desarrollador entregar todas las instrucciones para que su repositorio pueda ser
ejecutado para evaluación; si no se puede ejecutar su trabajo, se considerará como no
entregado.

## Aspectos para evaluar.
Se tendrá en cuenta la ubicación de los objetos, textos e iconos que se muestran en el
mockup entregado. El estilo de colores, fuentes e iconos no será evaluado, pero le
entregará un bonus al postulante.
El orden de las tarjetas es definido en front, por lo que el postulante deberá implementar
una función que ordene las tarjetas en pantalla según la voluntad del usuario a través del
botón “ordenar”. El orden de las tarjetas disponibles será el siguiente:
● Según fecha de creación de la tarjeta (de mayor a menor), orden por defecto
● Según fecha de vencimiento (de menor a mayor)
● Según estado de la tarjeta (siendo el más importante “atrasada”, y el menos
“liberada”)
La forma de agregar nuevas tarjetas queda según voluntad del postulante mientras la tarjeta
tenga los datos mínimos (detalles y fecha de vencimiento).
Dado que las tarjetas tienen estado, el estado es calculado respecto a la fecha de hoy
versus la fecha de vencimiento de la tarea.
Si el usuario cambia la fecha de vencimiento, la tarjeta se debe reubicar según corresponda.
Es importante poder filtrar las tarjetas por texto, rango de tiempo, y estado (liberada,
atrasada o pendiente).
Es imperativo usar Redux para la gestión de datos en el front.
Bonus
Los siguientes aspectos entregarán al postulante un impulso en su aplicación:
● El color de fondo de las tarjetas que sea ad hoc a su estado.
● Estilos según alguna línea de diseño propuesta por el postulante (EJ: Material
Design)

● Usar un middleware como redux-saga o redux-thunk para la comunicación con la
API de forma asíncrona.
● Usar typescript para el desarrollo de front y back.
Entrega
El postulante deberá entregar su solución con las instrucciones mínimas de ejecución. Si las
Si las instrucciones entregadas no son suficientes para iniciar la aplicación, se asumirá
como no entregada la postulación.
Como se indicó anteriormente, el repositorio debe ser entregado en algún control de
versiones GIT o similar.
El plazo de entrega es el día viernes 19 de agosto a las 12:00 horas.
Cualquier duda respecto al desarrollo, puede enviar un correo electrónico a ab@licitalab.cl