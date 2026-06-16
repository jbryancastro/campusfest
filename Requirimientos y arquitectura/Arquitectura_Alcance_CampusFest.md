# Arquitectura y Alcance del Sistema CampusFest

## 1. Propósito y Alcance del Sistema

CampusFest es una plataforma web diseñada para apoyar la gestión de festivales estudiantiles universitarios. El sistema permitirá administrar eventos, gestionar participantes, asignar jurados, registrar evaluaciones y publicar resultados de manera centralizada.

## 2. Arquitectura del Sistema

Se utilizará una arquitectura web de tres capas. Esta arquitectura facilita el mantenimiento, la escalabilidad y la seguridad del sistema.

### 2.1 Capa de Presentación

Corresponde a la interfaz gráfica utilizada por los usuarios para interactuar con el sistema desde computadoras, tabletas y dispositivos móviles.

### 2.2 Capa de Lógica de Negocio

Contiene las reglas del sistema relacionadas con:

- Gestión de usuarios.
- Administración de eventos.
- Inscripciones.
- Evaluaciones.
- Publicación de resultados.
- Validaciones de seguridad.

### 2.3 Capa de Datos

Encargada de almacenar toda la información relacionada con:

- Usuarios.
- Eventos.
- Inscripciones.
- Jurados.
- Calificaciones.
- Resultados.

## 3. Base de Datos

Se utilizará una base de datos relacional para almacenar la información del sistema.

### 3.1 Principales Entidades

- Usuario
- Rol
- Evento
- Categoría
- Inscripción
- Jurado
- Evaluación
- Resultado

### 3.2 Relaciones Principales

- Un usuario puede tener un rol asignado.
- Un organizador puede crear varios eventos.
- Un participante puede inscribirse en varios eventos.
- Un evento puede tener varios participantes.
- Un evento puede tener varios jurados asignados.
- Un jurado puede registrar múltiples evaluaciones.
- Cada evaluación genera un resultado asociado al participante.

## 4. Tecnologías Utilizadas

### 4.1 Frontend

- HTML5
- CSS3
- Bootstrap
- JavaScript

### 4.2 Backend

- ASP.NET Core (C#)

### 4.3 Base de Datos

- SQL Server

### 4.4 Control de Versiones

- Git
- GitHub

### 4.5 Gestión del Proyecto

- Jira Software

## 5. Alcance del Sistema

El sistema CampusFest incluirá las siguientes funcionalidades:

### 5.1 Gestión de Usuarios

- Registro y autenticación de usuarios.
- Administración de cuentas y roles.

### 5.2 Gestión de Eventos

- Creación y edición de eventos.
- Definición de fecha, hora, lugar y cupos.
- Publicación de eventos activos.

### 5.3 Gestión de Inscripciones

- Inscripción de participantes.
- Control de cupos disponibles.
- Consulta de participantes inscritos.

### 5.4 Gestión de Evaluaciones

- Asignación de jurados.
- Registro de calificaciones.
- Cálculo automático de puntajes.

### 5.5 Gestión de Resultados

- Publicación de resultados.
- Consulta pública de resultados.

## 6. Fuera del Alcance

Las siguientes funcionalidades no formarán parte de esta versión:

- Pagos en línea.
- Aplicación móvil nativa.
- Integración con redes sociales.
- Generación avanzada de reportes estadísticos.