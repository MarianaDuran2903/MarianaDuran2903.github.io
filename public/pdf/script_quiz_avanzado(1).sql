/* ============================================================
   UNIVERSIDAD EL BOSQUE
   BASES DE DATOS 2

   QUIZ 2 - SQL AVANZADO
   ORACLE DATABASE 19c

   Script completo:
   1. Eliminacion de objetos existentes
   2. Creacion de tablas
   3. Restricciones PK / FK / CHECK
   4. Datos de prueba
   ============================================================ */


/* ============================================================
   0. ELIMINAR TABLAS SI YA EXISTEN
   ============================================================ */

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE DEVOLUCION CASCADE CONSTRAINTS PURGE';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -942 THEN
            RAISE;
        END IF;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE DETALLE_PEDIDO CASCADE CONSTRAINTS PURGE';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -942 THEN
            RAISE;
        END IF;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE PEDIDO CASCADE CONSTRAINTS PURGE';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -942 THEN
            RAISE;
        END IF;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE PRODUCTO CASCADE CONSTRAINTS PURGE';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -942 THEN
            RAISE;
        END IF;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE CATEGORIA CASCADE CONSTRAINTS PURGE';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -942 THEN
            RAISE;
        END IF;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE SUCURSAL CASCADE CONSTRAINTS PURGE';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -942 THEN
            RAISE;
        END IF;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE CLIENTE CASCADE CONSTRAINTS PURGE';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -942 THEN
            RAISE;
        END IF;
END;
/


/* ============================================================
   1. TABLA CLIENTE
   ============================================================ */

CREATE TABLE CLIENTE
(
    id_cliente      NUMBER          NOT NULL,
    nombre          VARCHAR2(150)   NOT NULL,
    ciudad          VARCHAR2(100),
    segmento        VARCHAR2(30),
    fecha_registro  DATE,

    CONSTRAINT pk_cliente
        PRIMARY KEY (id_cliente),

    CONSTRAINT ck_cliente_segmento
        CHECK (segmento IN ('PREMIUM', 'ESTANDAR'))
);


/* ============================================================
   2. TABLA SUCURSAL
   ============================================================ */

CREATE TABLE SUCURSAL
(
    id_sucursal  NUMBER         NOT NULL,
    nombre       VARCHAR2(150)  NOT NULL,
    ciudad       VARCHAR2(100),
    region       VARCHAR2(100),

    CONSTRAINT pk_sucursal
        PRIMARY KEY (id_sucursal)
);


/* ============================================================
   3. TABLA CATEGORIA
   Jerarquia recursiva de N niveles
   ============================================================ */

CREATE TABLE CATEGORIA
(
    id_categoria        NUMBER         NOT NULL,
    nombre              VARCHAR2(150)  NOT NULL,
    id_categoria_padre  NUMBER,

    CONSTRAINT pk_categoria
        PRIMARY KEY (id_categoria),

    CONSTRAINT fk_categoria_padre
        FOREIGN KEY (id_categoria_padre)
        REFERENCES CATEGORIA (id_categoria)
);


/* ============================================================
   4. TABLA PRODUCTO
   ============================================================ */

CREATE TABLE PRODUCTO
(
    id_producto   NUMBER         NOT NULL,
    nombre        VARCHAR2(200)  NOT NULL,
    id_categoria  NUMBER         NOT NULL,
    precio_lista  NUMBER(12,2)   NOT NULL,

    CONSTRAINT pk_producto
        PRIMARY KEY (id_producto),

    CONSTRAINT fk_producto_categoria
        FOREIGN KEY (id_categoria)
        REFERENCES CATEGORIA (id_categoria),

    CONSTRAINT ck_producto_precio
        CHECK (precio_lista >= 0)
);


/* ============================================================
   5. TABLA PEDIDO
   ============================================================ */

CREATE TABLE PEDIDO
(
    id_pedido      NUMBER        NOT NULL,
    id_cliente     NUMBER        NOT NULL,
    id_sucursal    NUMBER        NOT NULL,
    fecha_pedido   DATE          NOT NULL,
    estado         VARCHAR2(30)  NOT NULL,

    CONSTRAINT pk_pedido
        PRIMARY KEY (id_pedido),

    CONSTRAINT fk_pedido_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES CLIENTE (id_cliente),

    CONSTRAINT fk_pedido_sucursal
        FOREIGN KEY (id_sucursal)
        REFERENCES SUCURSAL (id_sucursal),

    CONSTRAINT ck_pedido_estado
        CHECK (
            estado IN (
                'FACTURADO',
                'PENDIENTE',
                'CANCELADO'
            )
        )
);


/* ============================================================
   6. TABLA DETALLE_PEDIDO
   PK compuesta (id_pedido, num_linea)
   ============================================================ */

CREATE TABLE DETALLE_PEDIDO
(
    id_pedido       NUMBER        NOT NULL,
    num_linea       NUMBER        NOT NULL,
    id_producto     NUMBER        NOT NULL,
    cantidad        NUMBER(10)    NOT NULL,
    precio_unitario NUMBER(12,2)  NOT NULL,
    descuento       NUMBER(5,4)   DEFAULT 0 NOT NULL,

    CONSTRAINT pk_detalle_pedido
        PRIMARY KEY (
            id_pedido,
            num_linea
        ),

    CONSTRAINT fk_detalle_pedido
        FOREIGN KEY (id_pedido)
        REFERENCES PEDIDO (id_pedido),

    CONSTRAINT fk_detalle_producto
        FOREIGN KEY (id_producto)
        REFERENCES PRODUCTO (id_producto),

    CONSTRAINT ck_detalle_cantidad
        CHECK (cantidad > 0),

    CONSTRAINT ck_detalle_precio
        CHECK (precio_unitario >= 0),

    CONSTRAINT ck_detalle_descuento
        CHECK (descuento BETWEEN 0 AND 1)
);


/* ============================================================
   7. TABLA DEVOLUCION
   FK compuesta hacia DETALLE_PEDIDO
   ============================================================ */

CREATE TABLE DEVOLUCION
(
    id_devolucion      NUMBER         NOT NULL,
    id_pedido          NUMBER         NOT NULL,
    num_linea          NUMBER         NOT NULL,
    fecha_devolucion   DATE           NOT NULL,
    cantidad_devuelta  NUMBER(10)     NOT NULL,
    motivo             VARCHAR2(100),

    CONSTRAINT pk_devolucion
        PRIMARY KEY (id_devolucion),

    CONSTRAINT fk_devolucion_detalle
        FOREIGN KEY (
            id_pedido,
            num_linea
        )
        REFERENCES DETALLE_PEDIDO (
            id_pedido,
            num_linea
        ),

    CONSTRAINT ck_devolucion_cantidad
        CHECK (cantidad_devuelta > 0)
);


/* ============================================================
   8. DATOS - CLIENTE
   ============================================================ */

INSERT INTO CLIENTE
VALUES (
    100,
    'Comercial Andina',
    'Bogota',
    'PREMIUM',
    DATE '2023-01-15'
);

INSERT INTO CLIENTE
VALUES (
    101,
    'Inversiones Capital',
    'Bogota',
    'PREMIUM',
    DATE '2023-06-20'
);

INSERT INTO CLIENTE
VALUES (
    102,
    'Distribuciones del Norte',
    'Barranquilla',
    'PREMIUM',
    DATE '2024-02-10'
);

INSERT INTO CLIENTE
VALUES (
    103,
    'Comercializadora Pacifico',
    'Cali',
    'PREMIUM',
    DATE '2024-05-15'
);

INSERT INTO CLIENTE
VALUES (
    200,
    'Tienda Central',
    'Bogota',
    'ESTANDAR',
    DATE '2024-01-10'
);

INSERT INTO CLIENTE
VALUES (
    201,
    'Almacenes del Valle',
    'Cali',
    'ESTANDAR',
    DATE '2024-03-20'
);


/* ============================================================
   9. DATOS - SUCURSAL
   ============================================================ */

INSERT INTO SUCURSAL
VALUES (
    1,
    'Sucursal Bogota Norte',
    'Bogota',
    'CENTRO'
);

INSERT INTO SUCURSAL
VALUES (
    2,
    'Sucursal Bogota Sur',
    'Bogota',
    'CENTRO'
);

INSERT INTO SUCURSAL
VALUES (
    3,
    'Sucursal Medellin',
    'Medellin',
    'ANTIOQUIA'
);

INSERT INTO SUCURSAL
VALUES (
    4,
    'Sucursal Cali',
    'Cali',
    'OCCIDENTE'
);

INSERT INTO SUCURSAL
VALUES (
    5,
    'Sucursal Barranquilla',
    'Barranquilla',
    'CARIBE'
);


/* ============================================================
   10. DATOS - CATEGORIA

   Jerarquia de profundidad variable.

   Ejemplo:

   TECNOLOGIA
       COMPUTADORES
           PORTATILES
               PORTATILES GAMER

   Esto permite probar CONNECT BY.
   ============================================================ */


/* Categorias raiz */

INSERT INTO CATEGORIA
VALUES (
    10,
    'TECNOLOGIA',
    NULL
);

INSERT INTO CATEGORIA
VALUES (
    20,
    'HOGAR',
    NULL
);

INSERT INTO CATEGORIA
VALUES (
    30,
    'OFICINA',
    NULL
);

INSERT INTO CATEGORIA
VALUES (
    40,
    'DEPORTES',
    NULL
);

INSERT INTO CATEGORIA
VALUES (
    50,
    'ALIMENTOS',
    NULL
);


/* Nivel 2 */

INSERT INTO CATEGORIA
VALUES (
    11,
    'COMPUTADORES',
    10
);

INSERT INTO CATEGORIA
VALUES (
    12,
    'MOVILES',
    10
);

INSERT INTO CATEGORIA
VALUES (
    21,
    'ELECTRODOMESTICOS',
    20
);

INSERT INTO CATEGORIA
VALUES (
    22,
    'MUEBLES',
    20
);

INSERT INTO CATEGORIA
VALUES (
    31,
    'PAPELERIA',
    30
);

INSERT INTO CATEGORIA
VALUES (
    32,
    'EQUIPOS OFICINA',
    30
);

INSERT INTO CATEGORIA
VALUES (
    41,
    'FITNESS',
    40
);

INSERT INTO CATEGORIA
VALUES (
    42,
    'CICLISMO',
    40
);

INSERT INTO CATEGORIA
VALUES (
    51,
    'BEBIDAS',
    50
);

INSERT INTO CATEGORIA
VALUES (
    52,
    'SNACKS',
    50
);


/* Nivel 3 */

INSERT INTO CATEGORIA
VALUES (
    111,
    'PORTATILES',
    11
);

INSERT INTO CATEGORIA
VALUES (
    112,
    'ESCRITORIO',
    11
);

INSERT INTO CATEGORIA
VALUES (
    121,
    'SMARTPHONES',
    12
);

INSERT INTO CATEGORIA
VALUES (
    211,
    'COCINA',
    21
);

INSERT INTO CATEGORIA
VALUES (
    221,
    'ESCRITORIOS',
    22
);

INSERT INTO CATEGORIA
VALUES (
    311,
    'CUADERNOS',
    31
);

INSERT INTO CATEGORIA
VALUES (
    321,
    'IMPRESORAS',
    32
);

INSERT INTO CATEGORIA
VALUES (
    411,
    'MAQUINAS FITNESS',
    41
);

INSERT INTO CATEGORIA
VALUES (
    421,
    'BICICLETAS',
    42
);

INSERT INTO CATEGORIA
VALUES (
    511,
    'CAFE',
    51
);

INSERT INTO CATEGORIA
VALUES (
    521,
    'GALLETAS',
    52
);


/* Nivel 4 */

INSERT INTO CATEGORIA
VALUES (
    1111,
    'PORTATILES GAMER',
    111
);

INSERT INTO CATEGORIA
VALUES (
    1112,
    'PORTATILES EMPRESARIALES',
    111
);

INSERT INTO CATEGORIA
VALUES (
    1211,
    'SMARTPHONES PREMIUM',
    121
);


/* ============================================================
   11. DATOS - PRODUCTO
   ============================================================ */

INSERT INTO PRODUCTO
VALUES (
    1001,
    'Laptop Gamer Pro',
    1111,
    5000000
);

INSERT INTO PRODUCTO
VALUES (
    1002,
    'Laptop Empresarial',
    1112,
    3500000
);

INSERT INTO PRODUCTO
VALUES (
    1003,
    'PC Escritorio',
    112,
    2800000
);

INSERT INTO PRODUCTO
VALUES (
    1004,
    'Smartphone Premium',
    1211,
    4200000
);


INSERT INTO PRODUCTO
VALUES (
    2001,
    'Licuadora',
    211,
    350000
);

INSERT INTO PRODUCTO
VALUES (
    2002,
    'Escritorio Ejecutivo',
    221,
    900000
);


INSERT INTO PRODUCTO
VALUES (
    3001,
    'Cuaderno Profesional',
    311,
    25000
);

INSERT INTO PRODUCTO
VALUES (
    3002,
    'Impresora Laser',
    321,
    1200000
);


INSERT INTO PRODUCTO
VALUES (
    4001,
    'Caminadora',
    411,
    3000000
);

INSERT INTO PRODUCTO
VALUES (
    4002,
    'Bicicleta Ruta',
    421,
    4500000
);


INSERT INTO PRODUCTO
VALUES (
    5001,
    'Cafe Premium',
    511,
    40000
);

INSERT INTO PRODUCTO
VALUES (
    5002,
    'Galletas',
    521,
    15000
);


/* ============================================================
   12. DATOS - PEDIDO

   Cliente 100 reproduce los pedidos usados
   en la pregunta 1.c del quiz.
   ============================================================ */


/* ------------------------------------------------------------
   Cliente 100 - PREMIUM

   9001  04-MAR-2025   500.000
   9002  11-MAR-2025 1.200.000
   9003  11-MAR-2025   300.000
   9004  02-APR-2025   800.000
   ------------------------------------------------------------ */

INSERT INTO PEDIDO
VALUES (
    9001,
    100,
    1,
    DATE '2025-03-04',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9002,
    100,
    1,
    DATE '2025-03-11',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9003,
    100,
    1,
    DATE '2025-03-11',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9004,
    100,
    1,
    DATE '2025-04-02',
    'FACTURADO'
);


/* Cliente 101 - PREMIUM */

INSERT INTO PEDIDO
VALUES (
    9010,
    101,
    2,
    DATE '2025-01-10',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9011,
    101,
    2,
    DATE '2025-02-15',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9012,
    101,
    2,
    DATE '2025-03-20',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9013,
    101,
    2,
    DATE '2025-04-10',
    'FACTURADO'
);


/* Cliente 102 - PREMIUM / Caribe */

INSERT INTO PEDIDO
VALUES (
    9020,
    102,
    5,
    DATE '2025-01-15',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9021,
    102,
    5,
    DATE '2025-02-20',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9022,
    102,
    5,
    DATE '2025-03-25',
    'FACTURADO'
);


/* Cliente 103 - PREMIUM / Occidente */

INSERT INTO PEDIDO
VALUES (
    9030,
    103,
    4,
    DATE '2025-01-08',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9031,
    103,
    4,
    DATE '2025-02-12',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9032,
    103,
    4,
    DATE '2025-03-18',
    'FACTURADO'
);


/* Clientes ESTANDAR */

INSERT INTO PEDIDO
VALUES (
    9040,
    200,
    1,
    DATE '2025-01-05',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9041,
    200,
    1,
    DATE '2025-02-05',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9050,
    201,
    4,
    DATE '2025-01-12',
    'FACTURADO'
);

INSERT INTO PEDIDO
VALUES (
    9051,
    201,
    4,
    DATE '2025-03-12',
    'FACTURADO'
);


/* Pedidos NO FACTURADOS */

INSERT INTO PEDIDO
VALUES (
    9060,
    100,
    1,
    DATE '2025-05-10',
    'CANCELADO'
);

INSERT INTO PEDIDO
VALUES (
    9061,
    101,
    2,
    DATE '2025-05-15',
    'PENDIENTE'
);


/* Pedido fuera de 2025 */

INSERT INTO PEDIDO
VALUES (
    9070,
    100,
    1,
    DATE '2024-12-20',
    'FACTURADO'
);


/* ============================================================
   13. DATOS - DETALLE_PEDIDO
   ============================================================ */


/* ------------------------------------------------------------
   Cliente 100
   Valores diseñados para pregunta 1.c
   ------------------------------------------------------------ */


/* 9001 = 20 * 25.000 = 500.000 */

INSERT INTO DETALLE_PEDIDO
VALUES (
    9001,
    1,
    3001,
    20,
    25000,
    0
);


/* 9002 = 2 * 600.000 = 1.200.000 */

INSERT INTO DETALLE_PEDIDO
VALUES (
    9002,
    1,
    3002,
    2,
    600000,
    0
);


/* 9003 = 1 * 300.000 = 300.000 */

INSERT INTO DETALLE_PEDIDO
VALUES (
    9003,
    1,
    2001,
    1,
    300000,
    0
);


/* 9004 = 1.000.000 * (1 - 0.20)
        = 800.000
*/

INSERT INTO DETALLE_PEDIDO
VALUES (
    9004,
    1,
    2002,
    1,
    1000000,
    0.20
);


/* ------------------------------------------------------------
   Cliente 101
   ------------------------------------------------------------ */

INSERT INTO DETALLE_PEDIDO
VALUES (
    9010,
    1,
    1001,
    1,
    5000000,
    0.10
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9010,
    2,
    3002,
    1,
    1200000,
    0
);


INSERT INTO DETALLE_PEDIDO
VALUES (
    9011,
    1,
    2001,
    4,
    350000,
    0.05
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9011,
    2,
    5001,
    10,
    40000,
    0
);


INSERT INTO DETALLE_PEDIDO
VALUES (
    9012,
    1,
    4001,
    1,
    3000000,
    0.10
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9012,
    2,
    3001,
    20,
    25000,
    0
);


INSERT INTO DETALLE_PEDIDO
VALUES (
    9013,
    1,
    1004,
    1,
    4200000,
    0.05
);


/* ------------------------------------------------------------
   Cliente 102 - CARIBE
   ------------------------------------------------------------ */

INSERT INTO DETALLE_PEDIDO
VALUES (
    9020,
    1,
    1002,
    1,
    3500000,
    0
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9020,
    2,
    5001,
    20,
    40000,
    0.10
);


INSERT INTO DETALLE_PEDIDO
VALUES (
    9021,
    1,
    4002,
    1,
    4500000,
    0.10
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9021,
    2,
    2001,
    3,
    350000,
    0
);


INSERT INTO DETALLE_PEDIDO
VALUES (
    9022,
    1,
    3002,
    2,
    1200000,
    0.05
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9022,
    2,
    5002,
    50,
    15000,
    0
);


/* ------------------------------------------------------------
   Cliente 103 - OCCIDENTE
   ------------------------------------------------------------ */

INSERT INTO DETALLE_PEDIDO
VALUES (
    9030,
    1,
    1001,
    1,
    5000000,
    0
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9030,
    2,
    3001,
    50,
    25000,
    0.10
);


INSERT INTO DETALLE_PEDIDO
VALUES (
    9031,
    1,
    2002,
    3,
    900000,
    0
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9031,
    2,
    5001,
    30,
    40000,
    0.05
);


INSERT INTO DETALLE_PEDIDO
VALUES (
    9032,
    1,
    4001,
    2,
    3000000,
    0.10
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9032,
    2,
    3002,
    1,
    1200000,
    0
);


/* ------------------------------------------------------------
   Clientes ESTANDAR
   ------------------------------------------------------------ */

INSERT INTO DETALLE_PEDIDO
VALUES (
    9040,
    1,
    1003,
    1,
    2800000,
    0
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9040,
    2,
    2001,
    2,
    350000,
    0
);


INSERT INTO DETALLE_PEDIDO
VALUES (
    9041,
    1,
    4002,
    1,
    4500000,
    0
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9041,
    2,
    5002,
    100,
    15000,
    0
);


INSERT INTO DETALLE_PEDIDO
VALUES (
    9050,
    1,
    1004,
    1,
    4200000,
    0
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9050,
    2,
    2002,
    2,
    900000,
    0
);


INSERT INTO DETALLE_PEDIDO
VALUES (
    9051,
    1,
    4001,
    1,
    3000000,
    0
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9051,
    2,
    3002,
    2,
    1200000,
    0
);


/* ------------------------------------------------------------
   Pedidos no facturados
   ------------------------------------------------------------ */

INSERT INTO DETALLE_PEDIDO
VALUES (
    9060,
    1,
    1001,
    3,
    5000000,
    0
);

INSERT INTO DETALLE_PEDIDO
VALUES (
    9061,
    1,
    4002,
    3,
    4500000,
    0
);


/* Pedido 2024 */

INSERT INTO DETALLE_PEDIDO
VALUES (
    9070,
    1,
    1001,
    1,
    5000000,
    0
);


/* ============================================================
   14. DATOS - DEVOLUCION

   Casos especiales:
   - pedidos sin devoluciones
   - devoluciones GARANTIA
   - multiples devoluciones sobre la misma linea
   - devoluciones en mes distinto al pedido
   ============================================================ */


/* ------------------------------------------------------------
   PEDIDO 9001
   NO tiene devoluciones.
   Debe seguir apareciendo con num_devoluciones = 0.
   ------------------------------------------------------------ */


/* ------------------------------------------------------------
   PEDIDO 9002
   Una devolucion normal.
   ------------------------------------------------------------ */

INSERT INTO DEVOLUCION
VALUES (
    1,
    9002,
    1,
    DATE '2025-03-20',
    1,
    'CLIENTE'
);


/* ------------------------------------------------------------
   PEDIDO 9003
   Solo tiene una devolucion por GARANTIA.
   Esta devolucion debe excluirse del conteo
   de la pregunta 1.
   ------------------------------------------------------------ */

INSERT INTO DEVOLUCION
VALUES (
    2,
    9003,
    1,
    DATE '2025-03-25',
    1,
    'GARANTIA'
);


/* ------------------------------------------------------------
   PEDIDO 9004
   Dos devoluciones sobre la misma linea.
   Este caso permite demostrar la multiplicacion
   de filas al hacer un JOIN incorrecto.
   ------------------------------------------------------------ */

INSERT INTO DEVOLUCION
VALUES (
    3,
    9004,
    1,
    DATE '2025-04-15',
    1,
    'CLIENTE'
);

INSERT INTO DEVOLUCION
VALUES (
    4,
    9004,
    1,
    DATE '2025-04-20',
    1,
    'DEFECTO'
);


/* ============================================================
   DEVOLUCIONES EN MES POSTERIOR AL PEDIDO
   Para probar el informe mensual de la pregunta 2.
   ============================================================ */


/* Pedido enero -> devolucion febrero */

INSERT INTO DEVOLUCION
VALUES (
    10,
    9010,
    1,
    DATE '2025-02-05',
    1,
    'DEFECTO'
);


/* Pedido febrero -> devolucion marzo */

INSERT INTO DEVOLUCION
VALUES (
    11,
    9011,
    1,
    DATE '2025-03-10',
    1,
    'CLIENTE'
);


/* Pedido marzo -> devolucion abril */

INSERT INTO DEVOLUCION
VALUES (
    12,
    9012,
    1,
    DATE '2025-04-05',
    1,
    'DEFECTO'
);


/* CARIBE */

INSERT INTO DEVOLUCION
VALUES (
    20,
    9020,
    1,
    DATE '2025-02-10',
    1,
    'CLIENTE'
);

INSERT INTO DEVOLUCION
VALUES (
    21,
    9021,
    2,
    DATE '2025-03-15',
    1,
    'DEFECTO'
);


/* OCCIDENTE */

INSERT INTO DEVOLUCION
VALUES (
    30,
    9030,
    2,
    DATE '2025-02-08',
    10,
    'CLIENTE'
);

INSERT INTO DEVOLUCION
VALUES (
    31,
    9031,
    1,
    DATE '2025-03-05',
    1,
    'DEFECTO'
);


/* Clientes ESTANDAR */

INSERT INTO DEVOLUCION
VALUES (
    40,
    9040,
    1,
    DATE '2025-02-01',
    1,
    'CLIENTE'
);

INSERT INTO DEVOLUCION
VALUES (
    41,
    9050,
    2,
    DATE '2025-02-20',
    1,
    'DEFECTO'
);


/* ============================================================
   15. CONFIRMAR TRANSACCION
   ============================================================ */

COMMIT;


/* ============================================================
   16. CONSULTAS BASICAS DE VALIDACION
   ============================================================ */

SELECT COUNT(*) AS clientes
FROM cliente;

SELECT COUNT(*) AS sucursales
FROM sucursal;

SELECT COUNT(*) AS categorias
FROM categoria;

SELECT COUNT(*) AS productos
FROM producto;

SELECT COUNT(*) AS pedidos
FROM pedido;

SELECT COUNT(*) AS detalles
FROM detalle_pedido;

SELECT COUNT(*) AS devoluciones
FROM devolucion;


/* ============================================================
   17. VALIDAR LOS PEDIDOS DEL CLIENTE 100
   ============================================================ */

SELECT p.id_pedido,
       p.fecha_pedido,
       SUM(
           d.cantidad *
           d.precio_unitario *
           (1 - d.descuento)
       ) AS valor_pedido
FROM pedido p
JOIN detalle_pedido d
  ON d.id_pedido = p.id_pedido
WHERE p.id_cliente = 100
  AND p.id_pedido BETWEEN 9001 AND 9004
GROUP BY p.id_pedido,
         p.fecha_pedido
ORDER BY p.fecha_pedido,
         p.id_pedido;


/* ============================================================
   RESULTADO ESPERADO

   ID_PEDIDO   FECHA         VALOR_PEDIDO
   ----------  ------------  ------------
   9001        04-MAR-2025       500000
   9002        11-MAR-2025      1200000
   9003        11-MAR-2025       300000
   9004        02-APR-2025       800000
   ============================================================ */


/* ============================================================
   18. VALIDAR DEVOLUCIONES DEL CLIENTE 100
   ============================================================ */

SELECT p.id_pedido,
       COUNT(
           CASE
               WHEN dv.motivo <> 'GARANTIA'
               THEN 1
           END
       ) AS devoluciones_no_garantia
FROM pedido p
LEFT JOIN devolucion dv
  ON dv.id_pedido = p.id_pedido
WHERE p.id_cliente = 100
  AND p.id_pedido BETWEEN 9001 AND 9004
GROUP BY p.id_pedido
ORDER BY p.id_pedido;


/* ============================================================
   RESULTADO ESPERADO

   9001 -> 0
   9002 -> 1
   9003 -> 0
   9004 -> 2
   ============================================================ */


/* ============================================================
   19. VALIDAR JERARQUIA DE CATEGORIAS
   ============================================================ */

SELECT id_categoria,
       nombre,
       LEVEL AS nivel,
       CONNECT_BY_ROOT id_categoria AS id_categoria_raiz,
       CONNECT_BY_ROOT nombre AS categoria_raiz
FROM categoria
START WITH id_categoria_padre IS NULL
CONNECT BY NOCYCLE
       PRIOR id_categoria = id_categoria_padre
ORDER SIBLINGS BY id_categoria;


/* ============================================================
   FIN DEL SCRIPT
   ============================================================ */