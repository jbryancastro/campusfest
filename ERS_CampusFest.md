# Especificación de Requisitos de Software (ERS)

## CampusFest - Sistema de Gestión del Festival Estudiantil

**Versión:** 1.0.0 | **Fecha:** 27 de mayo de 2026 | **Estado:** En construcción

---

## 1. Descripción General del Sistema

CampusFest es una plataforma web para la gestión integral del festival estudiantil universitario. Permite planificar eventos, gestionar inscripciones, administrar evaluaciones y publicar resultados dentro del entorno académico.

### 1.1 Perfiles de Usuario y Actores Involucrados

| Actor | Descripción | Permisos principales |
|---|---|---|
| Administrador | Personal técnico o coordinador general del sistema. | Acceso total: usuarios, eventos, resultados, reportes y configuración. |
| Organizador | Docente o estudiante líder encargado de uno o varios eventos. | Crear y editar eventos, ver inscritos, cargar resultados. |
| Participante | Estudiante universitario que se inscribe a eventos del festival. | Registro, inscripción a eventos, consulta de agenda y resultados. |
| Jurado | Persona designada para evaluar participantes o proyectos. | Acceso al panel de evaluación, ingreso de calificaciones. |
| Visitante | Cualquier persona que accede al sitio sin iniciar sesión. | Solo lectura: agenda pública, información de eventos y resultados publicados. |

### 1.2 Suposiciones, Dependencias y Restricciones Generales

#### Suposiciones

| SUP-01 | Los usuarios cuentan con acceso a internet y un navegador moderno. |
| SUP-02 | La institución proveerá infraestructura de hosting o un servicio en la nube para el despliegue. |
| SUP-03 | Los participantes poseen un correo electrónico válido para el registro y las notificaciones. |
| SUP-04 | Los datos de eventos y categorías serán cargados por los organizadores antes de abrir inscripciones. |
| SUP-05 | La versión inicial no gestionará pagos en línea. |

#### Dependencias

| DEP-01 | Servicio SMTP externo para el envío de correos de confirmación y notificaciones. |
| DEP-02 | Servicio de almacenamiento en la nube para imágenes de eventos. |
| DEP-03 | Integración opcional con el directorio institucional para autenticación; si no está disponible, se usará autenticación propia. |

#### Restricciones Generales

| RES-01 | El sistema será exclusivamente web; no se desarrollará aplicación móvil nativa en esta versión. |
| RES-02 | El sistema debe cumplir con la ley de protección de datos personales aplicable en la institución. |
| RES-03 | El desarrollo debe completarse dentro del calendario académico del séptimo cuatrimestre. |
| RES-04 | Las contraseñas deben almacenarse cifradas; no se permite texto plano. |

---

## 2. Requisitos Funcionales y No Funcionales

### 2.1 Requisitos Funcionales

| RF-01 | El sistema debe permitir que un usuario se registre con nombre completo, correo electrónico y contraseña. |
| RF-02 | El sistema debe validar que el correo electrónico no esté registrado previamente antes de aceptar un nuevo registro. |
| RF-03 | El sistema debe permitir que un usuario inicie sesión con correo electrónico y contraseña válidos. |
| RF-04 | El sistema debe permitir que un usuario recupere su contraseña mediante un enlace temporal enviado al correo registrado. |
| RF-05 | El administrador debe poder crear, editar, desactivar y eliminar cuentas de usuario. |
| RF-06 | El sistema debe permitir que el organizador cree eventos con nombre, descripción, fecha, hora, lugar y cupo máximo. |
| RF-07 | El sistema debe permitir que el organizador edite un evento mientras el evento no haya iniciado. |
| RF-08 | El sistema debe publicar solo los eventos marcados como activos para que sean visibles en la agenda pública. |
| RF-09 | El participante debe poder inscribirse a un evento siempre que exista cupo disponible. |
| RF-10 | El sistema debe impedir que un participante se inscriba dos veces al mismo evento. |
| RF-11 | El participante debe poder cancelar su inscripción antes del límite definido por el organizador. |
| RF-12 | El organizador debe poder consultar la lista de participantes inscritos en cada evento. |
| RF-13 | El administrador debe poder asignar jurados a un evento que requiera evaluación. |
| RF-14 | El jurado debe poder registrar calificaciones para los criterios definidos en un evento. |
| RF-15 | El sistema debe calcular automáticamente el puntaje total de cada participante según las calificaciones ingresadas. |
| RF-16 | El administrador debe poder publicar los resultados de un evento para que sean visibles públicamente. |
| RF-17 | El sistema debe enviar correos de confirmación al registrar una cuenta, al inscribirse a un evento y al cambiar el estado de una inscripción. |
| RF-18 | El administrador debe poder generar reportes de participación por evento en formato PDF o HTML. |

### 2.2 Requisitos No Funcionales

| RNF-01 | El sistema debe responder en un máximo de 2 segundos. |
| RNF-02 | El sistema debe funcionar correctamente con muchos usuarios al mismo tiempo. |
| RNF-03 | Las contraseñas deben guardarse de forma segura. |
| RNF-04 | La información enviada entre usuario y sistema debe estar protegida con HTTPS. |
| RNF-05 | La cuenta debe bloquearse temporalmente después de varios intentos fallidos de inicio de sesión. |
| RNF-06 | La interfaz debe verse bien en computadora, tablet y celular.|
| RNF-07 |El sistema debe ser accesible y fácil de usar para todas las personas. |
| RNF-08 | El sistema debe incluir pruebas para asegurar el buen funcionamiento del código. |
| RNF-09 | El sistema debe guardar registros de accesos y cambios importantes por un tiempo.|

---

## 3. Restricciones de Diseño e Implementación

### 3.1 Tecnologías Obligatorias, Plataformas, Lenguajes y Frameworks

| Frontend | Se utilizará HTML, CSS y JavaScript |
| Estilos | El diseño se realizará con CSS. |
| Backend | Se utilizará Node.js. |
| Base de datos | MongoDB. |
| Lenguaje principal | JavaScript  |
| Plataforma de despliegue | Aplicación web accesible desde navegador web.|
| Navegadores soportados | Google Chrome, Mozilla Firefox y Microsoft Edge en versiones actuales estables. |

### 3.2 Normativas o Estándares a Cumplir


| Seguridad | El sistema protegerá la información de los usuarios y sus contraseñas. |
| Accesibilidad | El sistema será fácil de usar para todas las personas. |
| Calidad de código | El código se mantendrá ordenado y uniforme. |
| Documentación | Nombres claros y consistentes en archivos, componentes y funciones. |

### 3.3 Convenciones de Nomenclatura y Formato de Código

| Variables y funciones | Se usarán nombres en camelCase.. |
| Componentes y clases | Se usarán nombres en PascalCase. |
| Constantes | Se escribirán en mayúsculas con guiones bajos. |
| Archivos | Los nombres serán claros y organizados. |
| Base de datos | Los nombres estarán en minúsculas y separados por guiones bajos. |
| Indentación | El código tendrá una indentación de 2 espacios. |
| Comillas | Se usarán comillas simples en JavaScript. |
| Longitud de línea | Las líneas de código no deben ser muy largas. |

### 3.4 Estrategia de Branches 

#### Branches

| main | Contiene la versión final y estable del proyecto. |
| develop | Se usa para integrar cambios y trabajo en progreso. |
| feature/* | Agrear nuevas funcionalidades. |
| fix/* | Se usa para correcciones de fallos. |
| docs/* | Cambios exclusivos de documentación. |



### 3.5 Tipos de Commit


| feat | Agregar una nueva función al sistema. |
| fix | Corrección de errores. |
| docs | Cambios de documentación. |
| style | Cambios en el diseño o formato del código. |
| refactor | Mejorar el código sin cambiar su funcionamiento.. |
| test | Agregado o ajuste de pruebas. |
| perf | Mejora de rendimiento. |

---

## 4. Matriz de Trazabilidad //// en proceso

La siguiente matriz resume la relación entre cada grupo de requisitos, su implementación, su prueba y el elemento Jira asociado.

| Requisitos | Implementación | Pruebas | Elemento Jira |
|---|---|---|---|
| RF-01 a RF-05 | Módulo de autenticación y gestión de usuarios | CP-01 a CP-05 | Epic CF-E01, Historias CF-H01 a CF-H03, Tareas CF-T01 a CF-T05 |
| RF-06 a RF-08 | Módulo de eventos y agenda pública | CP-06 a CP-08 | Epic CF-E02, Historias CF-H04 a CF-H05, Tareas CF-T06 a CF-T08 |
| RF-09 a RF-12 | Módulo de inscripciones | CP-09 a CP-12 | Epic CF-E03, Historias CF-H06 a CF-H07, Tareas CF-T09 a CF-T12 |
| RF-13 a RF-16 | Módulo de evaluación y resultados | CP-13 a CP-16 | Epic CF-E04, Historias CF-H08 a CF-H09, Tareas CF-T13 a CF-T16 |
| RF-17 a RF-18 | Módulo de notificaciones y reportes | CP-17 a CP-18 | Epics CF-E05 y CF-E06, Historias CF-H10 a CF-H11, Tareas CF-T17 a CF-T18 |
| RNF-01 a RNF-02 | Rendimiento e infraestructura | CP-19 a CP-20 | Epic CF-E07, Historia CF-H12, Tareas CF-T19 a CF-T20 |
| RNF-03 a RNF-05 | Seguridad de la aplicación | CP-21 a CP-23 | Epic CF-E07, Historia CF-H13, Tareas CF-T21 a CF-T23 |
| RNF-06 a RNF-07 | Usabilidad y accesibilidad | CP-24 a CP-25 | Epic CF-E07, Historia CF-H14, Tareas CF-T24 a CF-T25 |
| RNF-08 a RNF-09 | Calidad técnica y auditoría | CP-26 a CP-27 | Epic CF-E07, Historia CF-H15, Tareas CF-T26 a CF-T27 |




