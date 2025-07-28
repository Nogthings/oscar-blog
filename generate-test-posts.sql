-- Script para generar 20 posts de prueba sobre tecnología
-- Ejecutar en Supabase SQL Editor

INSERT INTO posts (title, excerpt, content, slug, published, cover_image) VALUES
(
  'Introducción a React 19: Las Nuevas Características que Debes Conocer',
  'Descubre las últimas funcionalidades de React 19, incluyendo Server Components, mejoras en el compilador y nuevas APIs que cambiarán la forma de desarrollar.',
  '# Introducción a React 19

React 19 trae consigo una serie de mejoras revolucionarias que prometen cambiar la forma en que desarrollamos aplicaciones web. En este artículo, exploraremos las características más importantes.

## Server Components

Los Server Components permiten renderizar componentes directamente en el servidor, reduciendo significativamente el bundle size del cliente y mejorando el rendimiento.

```jsx
// Server Component
async function UserProfile({ userId }) {
  const user = await fetchUser(userId);
  return <div>{user.name}</div>;
}
```

## Mejoras en el Compilador

El nuevo compilador de React optimiza automáticamente tu código, eliminando la necesidad de usar `useMemo` y `useCallback` en muchos casos.

## Nuevas APIs

- `use()` - Para consumir promesas y contextos
- `useActionState()` - Para manejar acciones del servidor
- `useOptimistic()` - Para actualizaciones optimistas

## Conclusión

React 19 representa un gran paso adelante en el ecosistema de React, ofreciendo mejor rendimiento y una experiencia de desarrollo más fluida.',
  'introduccion-react-19-nuevas-caracteristicas',
  true,
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop'
),
(
  'TypeScript vs JavaScript: ¿Cuál Elegir en 2025?',
  'Una comparación detallada entre TypeScript y JavaScript, analizando ventajas, desventajas y casos de uso para ayudarte a tomar la mejor decisión.',
  '# TypeScript vs JavaScript: La Batalla Continúa

La elección entre TypeScript y JavaScript sigue siendo uno de los debates más acalorados en el desarrollo web moderno.

## Ventajas de TypeScript

### Tipado Estático
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getUserById(id: number): User | null {
  // Implementación
}
```

### Mejor Tooling
- Autocompletado inteligente
- Refactoring seguro
- Detección temprana de errores

## Ventajas de JavaScript

### Simplicidad
- No requiere compilación
- Curva de aprendizaje más suave
- Flexibilidad máxima

### Ecosistema Maduro
- Amplia compatibilidad
- Menos dependencias
- Desarrollo más rápido para prototipos

## Casos de Uso

**Usa TypeScript cuando:**
- Trabajas en equipos grandes
- El proyecto es complejo y de larga duración
- La mantenibilidad es crítica

**Usa JavaScript cuando:**
- Desarrollas prototipos rápidos
- El equipo es pequeño
- El proyecto es simple

## Conclusión

No hay una respuesta única. La elección depende del contexto, el equipo y los requisitos del proyecto.',
  'typescript-vs-javascript-cual-elegir-2025',
  true,
  'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=600&fit=crop'
),
(
  'Guía Completa de CSS Grid: Dominando el Layout Moderno',
  'Aprende CSS Grid desde cero hasta nivel avanzado. Ejemplos prácticos, mejores prácticas y técnicas para crear layouts profesionales.',
  '# CSS Grid: El Futuro del Layout Web

CSS Grid ha revolucionado la forma en que creamos layouts web. Es la herramienta más poderosa para crear diseños complejos y responsivos.

## Conceptos Básicos

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```

## Grid Areas

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Técnicas Avanzadas

### Auto-fit vs Auto-fill
```css
/* Auto-fit: ajusta al contenido */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* Auto-fill: mantiene columnas vacías */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
```

### Grid con Flexbox
Combinar Grid para el layout principal y Flexbox para componentes internos es una estrategia poderosa.

## Casos de Uso Reales

1. **Galerías de imágenes masonry**
2. **Layouts de dashboard**
3. **Grids responsivos sin media queries**
4. **Componentes de card complejos**

## Conclusión

CSS Grid es esencial para cualquier desarrollador frontend moderno. Su flexibilidad y poder lo convierten en la herramienta ideal para layouts complejos.',
  'guia-completa-css-grid-layout-moderno',
  true,
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
),
(
  'Node.js Performance: Optimizaciones que Debes Conocer',
  'Técnicas avanzadas para optimizar el rendimiento de aplicaciones Node.js. Desde clustering hasta optimizaciones de memoria.',
  '# Optimizando Node.js para Máximo Rendimiento

Node.js es increíblemente rápido, pero siempre hay margen para mejorar. Veamos las técnicas más efectivas.

## Event Loop Optimization

```javascript
// Evita bloquear el event loop
function heavyComputation(data) {
  return new Promise((resolve) => {
    setImmediate(() => {
      // Procesamiento pesado aquí
      resolve(processData(data));
    });
  });
}
```

## Clustering

```javascript
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  require("./app.js");
}
```

## Memory Management

### Garbage Collection
```bash
node --max-old-space-size=4096 app.js
```

### Memory Leaks
- Evita referencias circulares
- Limpia event listeners
- Usa WeakMap para referencias débiles

## Caching Strategies

```javascript
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 600 });

function getData(key) {
  const cached = cache.get(key);
  if (cached) return cached;
  
  const data = expensiveOperation(key);
  cache.set(key, data);
  return data;
}
```

## Database Optimization

- Connection pooling
- Query optimization
- Índices apropiados
- Paginación eficiente

## Monitoring

```javascript
const profiler = require("v8-profiler-next");

// Iniciar profiling
const profile = profiler.startProfiling("CPU");
setTimeout(() => {
  const profile = profiler.stopProfiling();
  profile.export().pipe(fs.createWriteStream("profile.cpuprofile"));
}, 30000);
```

## Conclusión

La optimización es un proceso continuo. Mide, optimiza, y vuelve a medir.',
  'nodejs-performance-optimizaciones-avanzadas',
  true,
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
),
(
  'Docker para Desarrolladores: De Principiante a Experto',
  'Guía completa de Docker para desarrolladores. Aprende contenedores, Docker Compose, mejores prácticas y patrones avanzados.',
  '# Docker: Containerización Moderna

Docker ha transformado el desarrollo y deployment de aplicaciones. Vamos desde lo básico hasta técnicas avanzadas.

## Conceptos Fundamentales

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
```

## Multi-stage Builds

```dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
CMD ["node", "dist/server.js"]
```

## Docker Compose

```yaml
version: "3.8"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/myapp
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine

volumes:
  postgres_data:
```

## Mejores Prácticas

### Seguridad
- Usa imágenes oficiales
- No corras como root
- Escanea vulnerabilidades
- Usa .dockerignore

### Optimización
- Aprovecha el cache de layers
- Usa multi-stage builds
- Minimiza el tamaño de imagen
- Ordena comandos por frecuencia de cambio

## Debugging

```bash
# Inspeccionar contenedor
docker exec -it container_name sh

# Ver logs
docker logs -f container_name

# Monitorear recursos
docker stats
```

## Conclusión

Docker es esencial en el desarrollo moderno. Dominar contenedores mejora significativamente tu flujo de trabajo.',
  'docker-desarrolladores-principiante-experto',
  true,
  'https://images.unsplash.com/photo-1605745341112-85968b19335a?w=800&h=600&fit=crop'
),
(
  'Arquitectura Microservicios: Patrones y Mejores Prácticas',
  'Explora los patrones fundamentales de microservicios, desde API Gateway hasta Event Sourcing. Guía práctica para arquitectos.',
  '# Microservicios: Diseñando Sistemas Distribuidos

Los microservicios ofrecen escalabilidad y flexibilidad, pero también introducen complejidad. Veamos cómo hacerlo bien.

## Principios Fundamentales

### Single Responsibility
Cada servicio debe tener una única responsabilidad bien definida.

### Database per Service
```yaml
user-service:
  database: users-db
  
order-service:
  database: orders-db
  
inventory-service:
  database: inventory-db
```

## Patrones Esenciales

### API Gateway
```javascript
const express = require("express");
const httpProxy = require("http-proxy-middleware");

const app = express();

// Routing a servicios
app.use("/api/users", httpProxy({ target: "http://user-service:3001" }));
app.use("/api/orders", httpProxy({ target: "http://order-service:3002" }));
app.use("/api/inventory", httpProxy({ target: "http://inventory-service:3003" }));
```

### Circuit Breaker
```javascript
const CircuitBreaker = require("opossum");

const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000
};

const breaker = new CircuitBreaker(callExternalService, options);
```

### Saga Pattern
```javascript
class OrderSaga {
  async execute(orderData) {
    try {
      const payment = await this.paymentService.charge(orderData);
      const inventory = await this.inventoryService.reserve(orderData);
      const shipping = await this.shippingService.schedule(orderData);
      
      return { success: true, orderId: payment.orderId };
    } catch (error) {
      await this.compensate(orderData, error);
      throw error;
    }
  }

  async compensate(orderData, error) {
    // Revertir operaciones realizadas
  }
}
```

## Service Discovery

```javascript
const consul = require("consul")();

// Registrar servicio
consul.agent.service.register({
  name: "user-service",
  address: "localhost",
  port: 3001,
  check: {
    http: "http://localhost:3001/health",
    interval: "10s"
  }
});
```

## Monitoring y Observabilidad

### Distributed Tracing
```javascript
const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");

const sdk = new opentelemetry.NodeSDK({
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start();
```

## Conclusión

Los microservicios no son una solución mágica. Evalúa cuidadosamente si tu proyecto los necesita.',
  'arquitectura-microservicios-patrones-mejores-practicas',
  true,
  'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop'
),
(
  'Machine Learning con JavaScript: TensorFlow.js en Acción',
  'Descubre cómo implementar modelos de machine learning directamente en el navegador usando TensorFlow.js. Ejemplos prácticos incluidos.',
  '# Machine Learning en el Navegador

TensorFlow.js trae el poder del machine learning al navegador y Node.js, abriendo nuevas posibilidades para aplicaciones interactivas.

## Instalación y Setup

```bash
npm install @tensorflow/tfjs
```

```javascript
import * as tf from "@tensorflow/tfjs";

// Verificar backend
console.log("Backend:", tf.getBackend());
```

## Modelo Simple de Regresión

```javascript
// Crear datos de entrenamiento
const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);

// Definir modelo
const model = tf.sequential({
  layers: [
    tf.layers.dense({ inputShape: [1], units: 1 })
  ]
});

// Compilar
model.compile({
  optimizer: "sgd",
  loss: "meanSquaredError"
});

// Entrenar
await model.fit(xs, ys, { epochs: 10 });
```

## Clasificación de Imágenes

```javascript
async function classifyImage(imageElement) {
  // Cargar modelo preentrenado
  const model = await tf.loadLayersModel("/models/image-classifier/model.json");
  
  // Preprocesar imagen
  const tensor = tf.browser.fromPixels(imageElement)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .div(255.0)
    .expandDims();
  
  // Predicción
  const predictions = await model.predict(tensor).data();
  
  return predictions;
}
```

## Transfer Learning

```javascript
async function createTransferModel() {
  // Cargar modelo base
  const baseModel = await tf.loadLayersModel("https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json");
  
  // Congelar capas base
  baseModel.layers.forEach(layer => {
    layer.trainable = false;
  });
  
  // Agregar capas personalizadas
  const model = tf.sequential({
    layers: [
      baseModel,
      tf.layers.globalAveragePooling2d(),
      tf.layers.dense({ units: 128, activation: "relu" }),
      tf.layers.dropout({ rate: 0.5 }),
      tf.layers.dense({ units: numClasses, activation: "softmax" })
    ]
  });
  
  return model;
}
```

## Procesamiento en Tiempo Real

```javascript
async function setupWebcamClassification() {
  const webcam = await tf.data.webcam(webcamElement);
  const model = await tf.loadLayersModel("/models/classifier/model.json");
  
  while (true) {
    const img = await webcam.capture();
    const prediction = await model.predict(img.expandDims()).data();
    
    // Mostrar resultados
    displayPrediction(prediction);
    
    img.dispose();
    await tf.nextFrame();
  }
}
```

## Optimización y Performance

```javascript
// Usar WebGL backend para mejor rendimiento
await tf.setBackend("webgl");

// Limpieza de memoria
tf.dispose(tensor);
tf.tidy(() => {
  // Operaciones que crean tensores temporales
});
```

## Conclusión

TensorFlow.js democratiza el machine learning, permitiendo crear experiencias inteligentes directamente en el navegador.',
  'machine-learning-javascript-tensorflow-js',
  true,
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop'
),
(
  'WebAssembly: El Futuro de la Performance Web',
  'Explora WebAssembly (WASM) y cómo puede acelerar dramáticamente tus aplicaciones web. Ejemplos con Rust, C++ y AssemblyScript.',
  '# WebAssembly: Performance Nativa en el Navegador

WebAssembly permite ejecutar código de alta performance en el navegador, acercando las aplicaciones web al rendimiento nativo.

## ¿Qué es WebAssembly?

WASM es un formato de código de bajo nivel que funciona como target de compilación para lenguajes como C, C++, Rust, y Go.

## Compilando Rust a WASM

```rust
// lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[wasm_bindgen]
pub fn process_image_data(data: &mut [u8]) {
    for pixel in data.chunks_mut(4) {
        // Procesamiento intensivo de imagen
        let avg = (pixel[0] as u16 + pixel[1] as u16 + pixel[2] as u16) / 3;
        pixel[0] = avg as u8;
        pixel[1] = avg as u8;
        pixel[2] = avg as u8;
    }
}
```

```toml
# Cargo.toml
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

## Integrando con JavaScript

```bash
# Compilar
wasm-pack build --target web
```

```javascript
import init, { fibonacci, process_image_data } from "./pkg/my_wasm.js";

async function run() {
  await init();
  
  // Usar función de Rust
  const result = fibonacci(40);
  console.log("Fibonacci(40):", result);
  
  // Procesar imagen
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  process_image_data(imageData.data);
  ctx.putImageData(imageData, 0, 0);
}
```

## AssemblyScript: TypeScript para WASM

```typescript
// assembly/index.ts
export function quickSort(arr: i32[], low: i32, high: i32): void {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function partition(arr: i32[], low: i32, high: i32): i32 {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}
```

## Casos de Uso Ideales

### Procesamiento de Imágenes
```javascript
// Filtros complejos en tiempo real
const applyFilter = Module.cwrap("apply_convolution_filter", null, ["number", "number", "number"]);
```

### Criptografía
```javascript
// Encriptación AES de alta performance
const encrypt = Module.cwrap("aes_encrypt", "number", ["string", "string"]);
```

### Simulaciones Científicas
```javascript
// Simulaciones físicas complejas
const simulatePhysics = Module.cwrap("physics_step", null, ["number", "number"]);
```

## Herramientas y Workflow

```bash
# Emscripten para C/C++
emcc math.c -o math.js -s EXPORTED_FUNCTIONS="[\"_calculate\"]"

# wasm-pack para Rust
wasm-pack build --target bundler

# AssemblyScript
npm install -g assemblyscript
asc assembly/index.ts -b build/optimized.wasm -O3
```

## Performance Comparison

```javascript
// Benchmark JavaScript vs WASM
function benchmarkFibonacci() {
  const n = 40;
  
  // JavaScript
  console.time("JS Fibonacci");
  const jsResult = fibonacciJS(n);
  console.timeEnd("JS Fibonacci");
  
  // WASM
  console.time("WASM Fibonacci");
  const wasmResult = fibonacci(n);
  console.timeEnd("WASM Fibonacci");
  
  console.log("Results match:", jsResult === wasmResult);
}
```

## Conclusión

WebAssembly no reemplaza JavaScript, lo complementa. Úsalo para tareas computacionalmente intensivas donde la performance es crítica.',
  'webassembly-futuro-performance-web',
  true,
  'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop'
),
(
  'GraphQL vs REST: Comparación Definitiva para APIs Modernas',
  'Análisis completo entre GraphQL y REST. Ventajas, desventajas, casos de uso y cómo elegir la mejor opción para tu proyecto.',
  '# GraphQL vs REST: La Batalla de las APIs

La elección entre GraphQL y REST puede definir la arquitectura de tu aplicación. Analicemos ambas opciones objetivamente.

## REST: El Estándar Establecido

### Ventajas de REST
- **Simplicidad**: Fácil de entender y implementar
- **Caching**: HTTP caching nativo
- **Tooling maduro**: Amplio ecosistema de herramientas
- **Stateless**: Escalabilidad inherente

```javascript
// API REST típica
GET /api/users/123
GET /api/users/123/posts
GET /api/posts/456/comments
```

### Implementación REST

```javascript
// Express.js REST API
app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.get("/api/users/:id/posts", async (req, res) => {
  const posts = await Post.find({ authorId: req.params.id });
  res.json(posts);
});
```

## GraphQL: Flexibilidad Máxima

### Ventajas de GraphQL
- **Single endpoint**: Una URL para toda la API
- **Flexibilidad de queries**: Cliente define qué datos necesita
- **Type safety**: Schema fuertemente tipado
- **Introspección**: API autodocumentada

```graphql
# GraphQL Query
query GetUserWithPosts($userId: ID!) {
  user(id: $userId) {
    id
    name
    email
    posts {
      id
      title
      content
      comments {
        id
        text
        author {
          name
        }
      }
    }
  }
}
```

### Implementación GraphQL

```javascript
// Schema definition
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }
  
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
  }
  
  type Query {
    user(id: ID!): User
    posts: [Post!]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    user: (_, { id }) => User.findById(id),
    posts: () => Post.find()
  },
  User: {
    posts: (user) => Post.find({ authorId: user.id })
  },
  Post: {
    author: (post) => User.findById(post.authorId),
    comments: (post) => Comment.find({ postId: post.id })
  }
};
```

## Comparación Práctica

### Over-fetching vs Under-fetching

**REST Problem:**
```javascript
// Cliente solo necesita nombre, pero recibe todo
fetch("/api/users/123")
  .then(res => res.json())
  .then(user => console.log(user.name)); // Solo usa name
```

**GraphQL Solution:**
```javascript
// Cliente pide exactamente lo que necesita
const query = gql`
  query {
    user(id: "123") {
      name
    }
  }
`;
```

### Caching

**REST:**
```javascript
// HTTP caching natural
app.get("/api/users/:id", cache("1 hour"), getUserHandler);
```

**GraphQL:**
```javascript
// Caching más complejo, requiere herramientas específicas
const cache = new InMemoryLRUCache();

const resolvers = {
  Query: {
    user: async (_, { id }, { dataSources }) => {
      return dataSources.userAPI.getUser(id);
    }
  }
};
```

## Casos de Uso

### Usa REST cuando:
- API pública con muchos consumidores
- Necesitas máximo caching
- Equipo familiarizado con REST
- Aplicación simple con pocos endpoints

### Usa GraphQL cuando:
- Frontend tiene necesidades específicas de datos
- Múltiples clientes con diferentes requerimientos
- Desarrollo frontend y backend en paralelo
- Performance de red es crítica

## Implementación Híbrida

```javascript
// Usar ambos en la misma aplicación
app.use("/api/rest", restRoutes);
app.use("/api/graphql", graphqlHTTP({
  schema: schema,
  graphiql: true
}));
```

## Performance

```javascript
// Benchmark de queries
async function benchmarkAPI() {
  console.time("REST multiple requests");
  const user = await fetch("/api/users/123");
  const posts = await fetch("/api/users/123/posts");
  const comments = await fetch("/api/posts/456/comments");
  console.timeEnd("REST multiple requests");
  
  console.time("GraphQL single request");
  const data = await fetch("/api/graphql", {
    method: "POST",
    body: JSON.stringify({ query: complexQuery })
  });
  console.timeEnd("GraphQL single request");
}
```

## Conclusión

No hay un ganador absoluto. REST sigue siendo excelente para APIs simples y públicas, mientras GraphQL brilla en aplicaciones complejas con múltiples clientes.',
  'graphql-vs-rest-comparacion-definitiva-apis',
  true,
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
),
(
  'Seguridad Web: Protegiendo Aplicaciones en 2025',
  'Guía completa de seguridad web. OWASP Top 10, autenticación moderna, HTTPS, CSP, y técnicas avanzadas de protección.',
  '# Seguridad Web: Tu Primera Línea de Defensa

La seguridad web es más crítica que nunca. Veamos las amenazas actuales y cómo proteger nuestras aplicaciones.

## OWASP Top 10 2024

### 1. Injection Attacks

```javascript
// ❌ Vulnerable a SQL Injection
app.get("/users", (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.query.id}`;
  db.query(query, (results) => res.json(results));
});

// ✅ Usando prepared statements
app.get("/users", (req, res) => {
  const query = "SELECT * FROM users WHERE id = ?";
  db.query(query, [req.query.id], (results) => res.json(results));
});
```

### 2. Cross-Site Scripting (XSS)

```javascript
// ❌ Vulnerable a XSS
app.get("/search", (req, res) => {
  res.send(`<h1>Results for: ${req.query.q}</h1>`);
});

// ✅ Sanitización de entrada
const DOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

app.get("/search", (req, res) => {
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  const clean = purify.sanitize(req.query.q);
  res.send(`<h1>Results for: ${clean}</h1>`);
});
```

## Autenticación Moderna

### JWT Implementation

```javascript
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Registro
app.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  const user = await User.create({
    email: req.body.email,
    password: hashedPassword
  });
  
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
  
  res.json({ token, refreshToken: generateRefreshToken(user.id) });
});

// Middleware de autenticación
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  
  if (!token) {
    return res.sendStatus(401);
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
```

### OAuth 2.0 / OpenID Connect

```javascript
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOrCreate({
    googleId: profile.id,
    email: profile.emails[0].value,
    name: profile.displayName
  });
  return done(null, user);
}));
```

## HTTPS y Certificados

```javascript
const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();

// Forzar HTTPS
app.use((req, res, next) => {
  if (req.header("x-forwarded-proto") !== "https") {
    res.redirect(`https://${req.header("host")}${req.url}`);
  } else {
    next();
  }
});

// Configuración HTTPS
const options = {
  key: fs.readFileSync("path/to/private-key.pem"),
  cert: fs.readFileSync("path/to/certificate.pem")
};

https.createServer(options, app).listen(443);
```

## Content Security Policy (CSP)

```javascript
const helmet = require("helmet");

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
      scriptSrc: ["'self'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    }
  }
}));
```

## Rate Limiting

```javascript
const rateLimit = require("express-rate-limit");

// Rate limiting global
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por IP
  message: "Demasiadas solicitudes desde esta IP"
});

// Rate limiting para login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // máximo 5 intentos de login
  skipSuccessfulRequests: true
});

app.use(globalLimiter);
app.use("/api/login", loginLimiter);
```

## Validación y Sanitización

```javascript
const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])")),
  age: Joi.number().integer().min(18).max(120)
});

app.post("/users", (req, res) => {
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  
  // Procesar datos validados
  createUser(value);
});
```

## Monitoreo de Seguridad

```javascript
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "security.log" })
  ]
});

// Middleware de logging de seguridad
app.use((req, res, next) => {
  logger.info({
    ip: req.ip,
    method: req.method,
    url: req.url,
    userAgent: req.get("User-Agent"),
    timestamp: new Date().toISOString()
  });
  next();
});

// Detectar ataques comunes
app.use((req, res, next) => {
  const suspiciousPatterns = [
    /(\<script\>.*\<\/script\>)/gi,
    /(union.*select)/gi,
    /(drop.*table)/gi
  ];
  
  const queryString = JSON.stringify(req.query);
  const bodyString = JSON.stringify(req.body);
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(queryString) || pattern.test(bodyString)) {
      logger.warn({
        type: "SECURITY_ALERT",
        ip: req.ip,
        pattern: pattern.toString(),
        request: { query: req.query, body: req.body }
      });
      return res.status(400).json({ error: "Solicitud bloqueada por seguridad" });
    }
  }
  
  next();
});
```

## Conclusión

La seguridad es un proceso continuo, no un destino. Mantente actualizado con las últimas amenazas y mejores prácticas.',
  'seguridad-web-protegiendo-aplicaciones-2025',
  true,
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop'
),
(
  'Next.js 15: Server Components y el Futuro de React',
  'Explora las nuevas características de Next.js 15, incluyendo Server Components mejorados, Turbopack, y optimizaciones de rendimiento.',
  '# Next.js 15: Revolucionando el Desarrollo React

Next.js 15 marca un hito en el desarrollo web con mejoras significativas en Server Components, Turbopack y performance.

## Server Components Evolution

```jsx
// app/posts/page.tsx - Server Component
import { PostsList } from "@/components/PostsList";
import { getServerPosts } from "@/lib/api";

export default async function PostsPage() {
  // Fetch en el servidor
  const posts = await getServerPosts();
  
  return (
    <div>
      <h1>Latest Posts</h1>
      <PostsList posts={posts} />
    </div>
  );
}
```

### Streaming y Suspense

```jsx
import { Suspense } from "react";
import { PostsSkeleton } from "@/components/PostsSkeleton";

export default function Layout({ children }) {
  return (
    <div>
      <Suspense fallback={<PostsSkeleton />}>
        {children}
      </Suspense>
    </div>
  );
}
```

## App Router Enhancements

### Parallel Routes

```jsx
// app/dashboard/@analytics/page.tsx
export default function Analytics() {
  return <AnalyticsPanel />;
}

// app/dashboard/@team/page.tsx  
export default function Team() {
  return <TeamOverview />;
}

// app/dashboard/layout.tsx
export default function Layout({ analytics, team }) {
  return (
    <div className="dashboard">
      <div className="sidebar">{team}</div>
      <div className="main">{analytics}</div>
    </div>
  );
}
```

### Intercepting Routes

```jsx
// app/photos/[id]/page.tsx
export default function PhotoPage({ params }) {
  return <PhotoDetail id={params.id} />;
}

// app/@modal/(.)photos/[id]/page.tsx
export default function PhotoModal({ params }) {
  return (
    <Modal>
      <PhotoDetail id={params.id} />
    </Modal>
  );
}
```

## Turbopack Integration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // Configuración de Turbopack
      loaders: {
        ".svg": ["@svgr/webpack"],
      },
      resolveAlias: {
        "@/": "./src/",
      },
    },
  },
};

module.exports = nextConfig;
```

## Server Actions

```jsx
// app/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  
  const post = await db.post.create({
    data: { title, content },
  });
  
  revalidatePath("/posts");
  redirect(`/posts/${post.id}`);
}

// components/PostForm.tsx
import { createPost } from "@/app/actions";

export function PostForm() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Title" />
      <textarea name="content" placeholder="Content" />
      <button type="submit">Create Post</button>
    </form>
  );
}
```

## Enhanced Caching

```jsx
// Granular cache control
import { unstable_cache } from "next/cache";

const getCachedUser = unstable_cache(
  async (userId) => {
    return await db.user.findUnique({ where: { id: userId } });
  },
  ["user"],
  {
    revalidate: 3600, // 1 hora
    tags: ["user"],
  }
);

// Invalidar cache específico
import { revalidateTag } from "next/cache";

export async function updateUser(userId: string, data: any) {
  await db.user.update({
    where: { id: userId },
    data,
  });
  
  revalidateTag("user");
}
```

## Optimizaciones de Performance

### Bundle Analyzer

```bash
npm install @next/bundle-analyzer
```

```javascript
// next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  // configuración
});
```

### Image Optimization

```jsx
import Image from "next/image";

export function OptimizedImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      priority
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
```

## Middleware Enhancements

```typescript
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Auth check
  const token = request.cookies.get("auth-token");
  
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  // Geolocation-based routing
  const country = request.geo?.country || "US";
  
  if (country === "ES" && !request.nextUrl.pathname.startsWith("/es")) {
    return NextResponse.redirect(new URL(`/es${request.nextUrl.pathname}`, request.url));
  }
  
  // A/B Testing
  const bucket = Math.random() > 0.5 ? "a" : "b";
  const response = NextResponse.next();
  response.cookies.set("bucket", bucket);
  
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

## TypeScript Integration

```typescript
// types/index.ts
export interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    email: string;
  };
  createdAt: Date;
}

// app/posts/[id]/page.tsx
interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function PostPage({ params }: PageProps) {
  const post: Post = await getPost(params.id);
  
  return <PostComponent post={post} />;
}
```

## Deployment Strategies

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "18"
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## Conclusión

Next.js 15 representa un salto significativo en performance y developer experience. Los Server Components y Turbopack están redefiniendo cómo construimos aplicaciones React.',
  'nextjs-15-server-components-futuro-react',
  true,
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop'
),
(
  'Desarrollo Mobile con React Native: Guía 2025',
  'Todo lo que necesitas saber sobre React Native en 2025. Expo Router, New Architecture, performance tips y best practices.',
  '# React Native: Desarrollo Mobile Moderno

React Native continúa evolucionando, acercándose cada vez más al performance nativo mientras mantiene la productividad de React.

## New Architecture Overview

La nueva arquitectura de React Native trae cambios fundamentales:

- **TurboModules**: Módulos nativos más eficientes
- **Fabric**: Nuevo sistema de renderizado
- **Codegen**: Generación automática de código
- **JSI**: JavaScript Interface mejorada

## Setup con Expo Router

```bash
npx create-expo-app@latest MyApp
cd MyApp
npx expo install expo-router react-native-safe-area-context react-native-screens
```

```typescript
// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
}
```

```tsx
// app/index.tsx
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Expo Router!</Text>
      <Link href="/profile">Go to Profile</Link>
    </View>
  );
}
```

## Navigation Patterns

```tsx
// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

## State Management

```tsx
// store/useStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AppState {
  user: User | null;
  posts: Post[];
  setUser: (user: User) => void;
  addPost: (post: Post) => void;
  fetchPosts: () => Promise<void>;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      posts: [],
      setUser: (user) => set({ user }),
      addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
      fetchPosts: async () => {
        const posts = await api.getPosts();
        set({ posts });
      },
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

## Performance Optimization

### FlatList Optimization

```tsx
import { FlatList, ListRenderItem } from "react-native";
import { memo, useCallback } from "react";

const PostItem = memo(({ item }: { item: Post }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
    <Text>{item.excerpt}</Text>
  </View>
));

export function PostsList({ posts }: { posts: Post[] }) {
  const renderItem: ListRenderItem<Post> = useCallback(
    ({ item }) => <PostItem item={item} />,
    []
  );

  const keyExtractor = useCallback((item: Post) => item.id, []);

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      removeClippedSubviews
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      initialNumToRender={10}
      windowSize={10}
      getItemLayout={(data, index) => ({
        length: 100,
        offset: 100 * index,
        index,
      })}
    />
  );
}
```

### Image Optimization

```tsx
import { Image } from "expo-image";

export function OptimizedImage({ uri, style }) {
  return (
    <Image
      source={{ uri }}
      style={style}
      contentFit="cover"
      transition={200}
      cachePolicy="memory-disk"
      placeholder={require("../assets/placeholder.png")}
    />
  );
}
```

## Native Modules

```typescript
// modules/CryptoModule.ts
import { NativeModule, requireNativeModule } from "expo";

export interface CryptoModule extends NativeModule {
  encrypt(data: string, key: string): Promise<string>;
  decrypt(data: string, key: string): Promise<string>;
}

export default requireNativeModule<CryptoModule>("CryptoModule");
```

```swift
// ios/CryptoModule.swift
import ExpoModulesCore
import CryptoKit

public class CryptoModule: Module {
  public func definition() -> ModuleDefinition {
    Name("CryptoModule")

    AsyncFunction("encrypt") { (data: String, key: String) -> String in
      // Implementación de encriptación
      return encryptedData
    }

    AsyncFunction("decrypt") { (data: String, key: String) -> String in
      // Implementación de desencriptación
      return decryptedData
    }
  }
}
```

## Gestures y Animations

```tsx
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

export function SwipeableCard({ children, onSwipeRight, onSwipeLeft }) {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      opacity.value = 1 - Math.abs(event.translationX) / 200;
    })
    .onEnd((event) => {
      if (Math.abs(event.translationX) > 100) {
        if (event.translationX > 0) {
          runOnJS(onSwipeRight)();
        } else {
          runOnJS(onSwipeLeft)();
        }
        translateX.value = withSpring(event.translationX > 0 ? 300 : -300);
        opacity.value = withSpring(0);
      } else {
        translateX.value = withSpring(0);
        opacity.value = withSpring(1);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: opacity.value,
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[animatedStyle]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}
```

## Testing

```tsx
// __tests__/PostsList.test.tsx
import { render, screen } from "@testing-library/react-native";
import { PostsList } from "../PostsList";

const mockPosts = [
  { id: "1", title: "Test Post", excerpt: "Test excerpt" },
  { id: "2", title: "Another Post", excerpt: "Another excerpt" },
];

describe("PostsList", () => {
  it("renders posts correctly", () => {
    render(<PostsList posts={mockPosts} />);
    
    expect(screen.getByText("Test Post")).toBeTruthy();
    expect(screen.getByText("Another Post")).toBeTruthy();
  });
});
```

## Deployment

```yaml
# .github/workflows/eas-build.yml
name: EAS Build

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Setup Expo
        uses: expo/expo-github-action@v8
        with:
          expo-version: latest
          token: ${{ secrets.EXPO_TOKEN }}
      - name: Install dependencies
        run: npm install
      - name: Build for iOS
        run: eas build --platform ios --non-interactive
      - name: Build for Android
        run: eas build --platform android --non-interactive
```

## Code Push

```typescript
// utils/codePush.ts
import codePush from "react-native-code-push";

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {
    title: "Actualización disponible",
    optionalUpdateMessage: "¿Desea instalar la actualización?",
    optionalInstallButtonLabel: "Instalar",
    optionalIgnoreButtonLabel: "Más tarde",
  },
};

export default codePush(codePushOptions);
```

## Conclusión

React Native en 2025 ofrece una experiencia de desarrollo excepcional con performance cercano al nativo. La nueva arquitectura y herramientas como Expo Router facilitan la creación de apps de calidad profesional.',
  'desarrollo-mobile-react-native-guia-2025',
  true,
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
),
(
  'Rust para JavaScript Developers: Introducción Práctica',
  'Aprende Rust desde la perspectiva de un desarrollador JavaScript. Sintaxis, ownership, borrowing y cómo aplicar Rust en proyectos web.',
  '# Rust para Desarrolladores JavaScript

Rust está ganando popularidad en el ecosistema web. Veamos cómo un desarrollador JavaScript puede aprovechar este poderoso lenguaje.

## ¿Por qué Rust?

- **Performance**: Velocidad cercana a C/C++
- **Seguridad de memoria**: Sin garbage collector
- **Concurrencia**: Sin data races
- **WebAssembly**: Compilación directa a WASM
- **Tooling**: Cargo es excelente

## Sintaxis Básica

### Variables y Tipos

```rust
// JavaScript
let name = "John";
let age = 30;
let isActive = true;

// Rust
let name: &str = "John";
let age: i32 = 30;
let is_active: bool = true;

// Mutabilidad explícita
let mut counter = 0;
counter += 1;
```

### Funciones

```rust
// JavaScript
function add(a, b) {
  return a + b;
}

// Rust
fn add(a: i32, b: i32) -> i32 {
    a + b // No semicolon = return
}

// Con tipos genéricos
fn identity<T>(x: T) -> T {
    x
}
```

### Structs (como objetos)

```rust
// JavaScript
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

// Rust
struct User {
    name: String,
    age: u32,
    email: String,
}

let user = User {
    name: String::from("Alice"),
    age: 25,
    email: String::from("alice@example.com"),
};
```

## Ownership System

El concepto más importante de Rust:

```rust
// Move semantics
let s1 = String::from("hello");
let s2 = s1; // s1 ya no es válido

// Clone para copiar
let s1 = String::from("hello");
let s2 = s1.clone(); // Ambos son válidos

// References (borrowing)
fn calculate_length(s: &String) -> usize {
    s.len()
} // s sale de scope, pero no es dropped

let s1 = String::from("hello");
let len = calculate_length(&s1); // s1 sigue siendo válido
```

## Pattern Matching

```rust
// JavaScript switch equivalent
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn process_message(msg: Message) {
    match msg {
        Message::Quit => println!("Quit"),
        Message::Move { x, y } => println!("Move to ({}, {})", x, y),
        Message::Write(text) => println!("Text: {}", text),
        Message::ChangeColor(r, g, b) => println!("RGB({}, {}, {})", r, g, b),
    }
}
```

## Error Handling

```rust
// JavaScript try/catch equivalent
use std::fs::File;
use std::io::Read;

fn read_file_contents(filename: &str) -> Result<String, std::io::Error> {
    let mut file = File::open(filename)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

// Using the function
match read_file_contents("data.txt") {
    Ok(contents) => println!("File contents: {}", contents),
    Err(error) => println!("Error reading file: {}", error),
}
```

## Collections

```rust
// Arrays (fixed size)
let numbers: [i32; 5] = [1, 2, 3, 4, 5];

// Vectors (dynamic)
let mut vec = Vec::new();
vec.push(1);
vec.push(2);

// HashMap (like JavaScript objects)
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Yellow"), 50);
```

## Traits (como interfaces)

```rust
trait Summary {
    fn summarize(&self) -> String;
}

struct Article {
    headline: String,
    content: String,
}

impl Summary for Article {
    fn summarize(&self) -> String {
        format!("{}: {}", self.headline, self.content)
    }
}

fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}
```

## Rust en el Ecosistema Web

### Backend con Axum

```rust
use axum::{
    extract::Query,
    http::StatusCode,
    response::Json,
    routing::{get, post},
    Router,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct User {
    id: u32,
    name: String,
}

async fn get_users() -> Json<Vec<User>> {
    let users = vec![
        User { id: 1, name: "Alice".to_string() },
        User { id: 2, name: "Bob".to_string() },
    ];
    Json(users)
}

async fn create_user(Json(payload): Json<User>) -> Result<Json<User>, StatusCode> {
    // Validate and save user
    Ok(Json(payload))
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/users", get(get_users))
        .route("/users", post(create_user));

    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```

### CLI Tools

```rust
use clap::{App, Arg};
use std::fs;

fn main() {
    let matches = App::new("File Processor")
        .version("1.0")
        .about("Processes files quickly")
        .arg(Arg::with_name("input")
            .short("i")
            .long("input")
            .value_name("FILE")
            .help("Input file")
            .required(true))
        .arg(Arg::with_name("output")
            .short("o")
            .long("output")
            .value_name("FILE")
            .help("Output file"))
        .get_matches();

    let input_file = matches.value_of("input").unwrap();
    let output_file = matches.value_of("output").unwrap_or("output.txt");

    match fs::read_to_string(input_file) {
        Ok(contents) => {
            let processed = contents.to_uppercase();
            fs::write(output_file, processed).expect("Failed to write file");
            println!("File processed successfully!");
        }
        Err(e) => eprintln!("Error reading file: {}", e),
    }
}
```

### WebAssembly

```rust
// Cargo.toml
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"

// lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[wasm_bindgen]
pub fn process_data(data: &[u8]) -> Vec<u8> {
    data.iter().map(|&x| x * 2).collect()
}
```

```bash
# Compilar a WebAssembly
wasm-pack build --target web
```

```javascript
// Usar en JavaScript
import init, { fibonacci, process_data } from "./pkg/rust_wasm.js";

async function run() {
  await init();
  
  console.log("Fibonacci(10):", fibonacci(10));
  
  const data = new Uint8Array([1, 2, 3, 4, 5]);
  const result = process_data(data);
  console.log("Processed:", result);
}
```

## Testing

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(2, 3), 5);
    }

    #[test]
    fn test_user_creation() {
        let user = User {
            name: String::from("Test"),
            age: 25,
            email: String::from("test@example.com"),
        };
        assert_eq!(user.name, "Test");
    }

    #[test]
    #[should_panic(expected = "index out of bounds")]
    fn test_panic() {
        let v = vec![1, 2, 3];
        v[4]; // This should panic
    }
}
```

## Performance Tips

```rust
// Use &str instead of String when possible
fn process_text(text: &str) -> usize {
    text.len()
}

// Pre-allocate collections
let mut vec = Vec::with_capacity(1000);

// Use iterators (they're zero-cost)
let sum: i32 = (0..1000)
    .filter(|x| x % 2 == 0)
    .map(|x| x * x)
    .sum();

// Avoid unnecessary clones
fn use_string(s: &String) {
    // Work with reference
}
```

## Conclusión

Rust ofrece performance excepcional y seguridad de memoria sin sacrificar la expresividad. Para desarrolladores JavaScript, representa una excelente herramienta para proyectos que requieren máximo rendimiento.',
  'rust-javascript-developers-introduccion-practica',
  true,
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop'
),
(
  'Databases Modernas: SQL vs NoSQL en 2025',
  'Comparación actualizada entre bases de datos SQL y NoSQL. PostgreSQL, MongoDB, Redis, y cuándo usar cada una en proyectos modernos.',
  '# Bases de Datos en 2025: Navegando el Panorama Actual

La elección de base de datos puede determinar el éxito de tu proyecto. Analicemos las opciones disponibles y sus casos de uso.

## PostgreSQL: El Gigante SQL

PostgreSQL se ha convertido en la base de datos relacional más popular para aplicaciones modernas.

### Características Avanzadas

```sql
-- JSONB para datos semi-estructurados
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    specifications JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Índices en JSONB
CREATE INDEX idx_products_specs ON products 
USING GIN (specifications);

-- Queries complejas
SELECT name, specifications->'features'->>'color' as color
FROM products 
WHERE specifications @> '{"category": "electronics"}';
```

### Extensiones Potentes

```sql
-- PostGIS para datos geoespaciales
CREATE EXTENSION postgis;

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    point GEOMETRY(POINT, 4326)
);

-- Buscar ubicaciones cercanas
SELECT name, ST_Distance(point, ST_MakePoint(-122.4194, 37.7749)) as distance
FROM locations
WHERE ST_DWithin(point, ST_MakePoint(-122.4194, 37.7749), 0.01)
ORDER BY distance;

-- pg_stat_statements para monitoreo
CREATE EXTENSION pg_stat_statements;

SELECT query, calls, mean_time, rows, 100.0 * shared_blks_hit /
       nullif(shared_blks_hit + shared_blks_read, 0) AS hit_percent
FROM pg_stat_statements
ORDER BY mean_time DESC LIMIT 5;
```

## MongoDB: Flexibilidad NoSQL

MongoDB domina el espacio de documentos NoSQL con su flexibilidad y escalabilidad.

### Aggregation Framework

```javascript
// Pipeline de agregación complejo
db.orders.aggregate([
  {
    $match: {
      orderDate: {
        $gte: ISODate("2024-01-01"),
        $lt: ISODate("2025-01-01")
      }
    }
  },
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customer"
    }
  },
  {
    $unwind: "$customer"
  },
  {
    $group: {
      _id: {
        month: { $month: "$orderDate" },
        region: "$customer.region"
      },
      totalSales: { $sum: "$amount" },
      orderCount: { $sum: 1 },
      avgOrderValue: { $avg: "$amount" }
    }
  },
  {
    $sort: { "_id.month": 1, "_id.region": 1 }
  }
]);
```

### Change Streams

```javascript
// Reactividad en tiempo real
const changeStream = db.inventory.watch([
  { $match: { "fullDocument.quantity": { $lt: 10 } } }
]);

changeStream.on("change", (change) => {
  console.log("Low inventory alert:", change.fullDocument);
  
  // Trigger reorder notification
  notificationService.sendAlert({
    type: "LOW_INVENTORY",
    product: change.fullDocument.name,
    quantity: change.fullDocument.quantity
  });
});
```

## Redis: Velocidad y Cache

Redis sigue siendo la opción predilecta para caching y datos en memoria.

### Estructuras de Datos Avanzadas

```javascript
const redis = require("redis");
const client = redis.createClient();

// Sorted Sets para rankings
await client.zAdd("leaderboard", [
  { score: 1000, value: "player1" },
  { score: 1500, value: "player2" },
  { score: 800, value: "player3" }
]);

// Top 10 players
const topPlayers = await client.zRevRange("leaderboard", 0, 9, {
  WITHSCORES: true
});

// HyperLogLog para conteos únicos
await client.pfAdd("unique_visitors", ["user1", "user2", "user3"]);
const uniqueCount = await client.pfCount("unique_visitors");

// Streams para event sourcing
await client.xAdd("events", "*", {
  type: "user_login",
  userId: "123",
  timestamp: Date.now()
});

// Leer eventos
const events = await client.xRead({
  key: "events",
  id: "0"
}, {
  COUNT: 10
});
```

### Redis Modules

```bash
# RedisJSON para JSON nativo
redis-cli
JSON.SET product:1 $ '{"name":"Laptop","price":999,"specs":{"cpu":"Intel i7","ram":"16GB"}}'
JSON.GET product:1 $.specs.cpu

# RediSearch para búsqueda full-text
FT.CREATE products ON JSON PREFIX 1 product: SCHEMA $.name AS name TEXT $.price AS price NUMERIC
FT.SEARCH products "@name:laptop @price:[500 1500]"
```

## Bases de Datos Especializadas

### ClickHouse: Analytics

```sql
-- Optimizada para análisis OLAP
CREATE TABLE events (
    event_time DateTime,
    user_id UInt32,
    event_type String,
    page String,
    browser String
) ENGINE = MergeTree()
ORDER BY (event_time, user_id);

-- Queries analíticas ultra-rápidas
SELECT 
    toYYYYMM(event_time) as month,
    browser,
    count() as events,
    uniq(user_id) as unique_users
FROM events 
WHERE event_time >= '2024-01-01'
GROUP BY month, browser
ORDER BY month, events DESC;
```

### Neo4j: Grafos

```cypher
// Crear nodos y relaciones
CREATE (alice:Person {name: 'Alice', age: 30})
CREATE (bob:Person {name: 'Bob', age: 25})
CREATE (company:Company {name: 'TechCorp'})
CREATE (alice)-[:WORKS_FOR {since: 2020}]->(company)
CREATE (bob)-[:WORKS_FOR {since: 2022}]->(company)
CREATE (alice)-[:KNOWS {since: 2019}]->(bob)

// Queries de grafos
MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
WHERE c.name = 'TechCorp'
RETURN p.name, p.age

// Encontrar conexiones
MATCH path = (alice:Person {name: 'Alice'})-[:KNOWS*1..3]-(others:Person)
RETURN others.name, length(path) as degrees_of_separation
ORDER BY degrees_of_separation
```

## Database as a Service

### Supabase

```javascript
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(url, key);

// Real-time subscriptions
supabase
  .channel("posts")
  .on("postgres_changes", 
    { event: "*", schema: "public", table: "posts" },
    (payload) => {
      console.log("Change received!", payload);
    }
  )
  .subscribe();

// Row Level Security
await supabase.rpc("enable_rls", { table_name: "posts" });

// Edge Functions
const { data, error } = await supabase.functions.invoke("process-image", {
  body: { imageUrl: "https://example.com/image.jpg" }
});
```

### PlanetScale

```javascript
import { connect } from "@planetscale/database";

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

const conn = connect(config);

// Branching workflow
const results = await conn.execute(
  "SELECT * FROM users WHERE created_at > ? ORDER BY created_at DESC",
  [new Date("2024-01-01")]
);
```

## Polyglot Persistence

```javascript
// Arquitectura híbrida
class UserService {
  constructor() {
    this.postgres = new PostgreSQL(); // Datos transaccionales
    this.redis = new Redis(); // Cache y sesiones
    this.elasticsearch = new Elasticsearch(); // Búsqueda
    this.mongodb = new MongoDB(); // Logs y eventos
  }

  async createUser(userData) {
    // PostgreSQL para datos principales
    const user = await this.postgres.users.create(userData);
    
    // Redis para cache
    await this.redis.set(`user:${user.id}`, JSON.stringify(user), "EX", 3600);
    
    // Elasticsearch para búsqueda
    await this.elasticsearch.index({
      index: "users",
      id: user.id,
      body: {
        name: user.name,
        email: user.email,
        searchableText: `${user.name} ${user.email}`
      }
    });
    
    return user;
  }
}
```

## Criteria de Selección

### Usa PostgreSQL cuando:
- Necesitas ACID compliance
- Queries complejas con JOINs
- Datos altamente relacionales
- Necesitas consistencia fuerte

### Usa MongoDB cuando:
- Schema flexible y cambiante
- Desarrollo rápido de prototipos
- Datos semi-estructurados
- Escalabilidad horizontal

### Usa Redis cuando:
- Cache de alta performance
- Sesiones de usuario
- Rate limiting
- Real-time analytics

### Usa ClickHouse cuando:
- Analytics de gran volumen
- Data warehousing
- Time-series data
- Reporting complejo

## Conclusión

No existe una base de datos perfecta para todos los casos. La clave está en entender los trade-offs y elegir la herramienta adecuada para cada componente de tu sistema.',
  'databases-modernas-sql-nosql-2025',
  true,
  'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop'
),
(
  'Edge Computing: Llevando el Procesamiento al Límite',
  'Explora el Edge Computing y su impacto en aplicaciones modernas. CDNs, Edge Functions, IoT y cómo optimizar la latencia global.',
  '# Edge Computing: La Nueva Frontera

El Edge Computing está transformando cómo pensamos sobre la infraestructura, acercando el procesamiento a los usuarios finales.

## ¿Qué es Edge Computing?

Edge Computing procesa datos cerca de donde se generan, reduciendo latencia y mejorando la experiencia del usuario.

### Beneficios Clave
- **Menor latencia**: Procesamiento local
- **Mejor performance**: Respuestas más rápidas
- **Menor ancho de banda**: Menos datos al centro
- **Mayor privacidad**: Datos locales
- **Disponibilidad**: Funcionamiento offline

## CDNs Modernas

### Cloudflare Workers

```javascript
// Cloudflare Worker
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Geolocation-based routing
  const country = request.cf.country;
  
  if (country === "ES") {
    return fetch("https://api-eu.example.com" + url.pathname);
  } else if (country === "JP") {
    return fetch("https://api-asia.example.com" + url.pathname);
  }
  
  return fetch("https://api-us.example.com" + url.pathname);
}

// A/B Testing en el edge
async function abTestMiddleware(request) {
  const cookie = request.headers.get("Cookie");
  let variant = "A";
  
  if (!cookie?.includes("variant=")) {
    variant = Math.random() > 0.5 ? "A" : "B";
  }
  
  const response = await fetch(request);
  
  if (!cookie?.includes("variant=")) {
    response.headers.set("Set-Cookie", `variant=${variant}; Max-Age=86400`);
  }
  
  return response;
}
```

### Vercel Edge Functions

```typescript
// Edge API route
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  
  // Cache en el edge
  const cacheKey = `user:${userId}`;
  const cached = await caches.default.match(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  // Fetch data
  const userData = await fetch(`${process.env.API_URL}/users/${userId}`);
  const user = await userData.json();
  
  // Personal response
  const response = NextResponse.json({
    ...user,
    region: req.geo?.region,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
  
  // Cache for 1 hour
  response.headers.set("Cache-Control", "s-maxage=3600");
  
  return response;
}
```

## Edge Databases

### Turso (LibSQL)

```javascript
import { createClient } from "@libsql/client";

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Multi-region reads
export async function getUser(id) {
  const result = await turso.execute({
    sql: "SELECT * FROM users WHERE id = ?",
    args: [id]
  });
  
  return result.rows[0];
}

// Writes to primary, reads from edge
export async function updateUserPreferences(id, preferences) {
  await turso.execute({
    sql: "UPDATE users SET preferences = ? WHERE id = ?",
    args: [JSON.stringify(preferences), id]
  });
  
  // Invalidate edge cache
  await fetch(`https://api.example.com/cache/invalidate/user/${id}`, {
    method: "POST"
  });
}
```

### Upstash Redis

```javascript
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Global state management
export async function incrementPageViews(page) {
  const views = await redis.incr(`views:${page}`);
  
  // Update leaderboard
  await redis.zadd("popular_pages", {
    score: views,
    member: page
  });
  
  return views;
}

// Session management
export async function setUserSession(sessionId, userData) {
  await redis.setex(
    `session:${sessionId}`,
    3600, // 1 hour
    JSON.stringify(userData)
  );
}
```

## IoT y Edge

### Device Communication

```javascript
// MQTT en el edge
import mqtt from "mqtt";

class EdgeIoTManager {
  constructor() {
    this.client = mqtt.connect("mqtt://edge-broker.local:1883");
    this.deviceData = new Map();
  }

  async processSensorData(deviceId, data) {
    // Local processing
    const processed = this.analyzeSensorData(data);
    
    // Store locally
    this.deviceData.set(deviceId, {
      ...processed,
      timestamp: Date.now()
    });
    
    // Send to cloud only if significant change
    if (this.isSignificantChange(processed)) {
      await this.sendToCloud(deviceId, processed);
    }
    
    // Real-time local actions
    if (processed.alert) {
      this.triggerLocalAlert(deviceId, processed);
    }
  }

  analyzeSensorData(data) {
    const { temperature, humidity, pressure } = data;
    
    return {
      temperature,
      humidity,
      pressure,
      heatIndex: this.calculateHeatIndex(temperature, humidity),
      alert: temperature > 35 || humidity > 80
    };
  }
}
```

### Edge ML Inference

```javascript
// TensorFlow.js en el edge
import * as tf from "@tensorflow/tfjs";

class EdgeMLPredictor {
  constructor() {
    this.model = null;
  }

  async loadModel() {
    // Load model to edge device
    this.model = await tf.loadLayersModel("/models/anomaly-detection/model.json");
  }

  async predictAnomaly(sensorData) {
    if (!this.model) await this.loadModel();
    
    // Preprocess data
    const tensor = tf.tensor2d([sensorData]).div(255.0);
    
    // Local inference
    const prediction = await this.model.predict(tensor).data();
    const isAnomaly = prediction[0] > 0.8;
    
    // Cleanup
    tensor.dispose();
    
    if (isAnomaly) {
      // Immediate local action
      this.handleAnomaly(sensorData);
      
      // Send alert to cloud
      this.alertCloud(sensorData, prediction[0]);
    }
    
    return { isAnomaly, confidence: prediction[0] };
  }
}
```

## Edge Security

```javascript
// Rate limiting en el edge
class EdgeRateLimiter {
  constructor() {
    this.windows = new Map();
  }

  async checkLimit(clientId, limit = 100, windowMs = 60000) {
    const now = Date.now();
    const windowStart = Math.floor(now / windowMs) * windowMs;
    const key = `${clientId}:${windowStart}`;
    
    const current = this.windows.get(key) || 0;
    
    if (current >= limit) {
      return { allowed: false, remaining: 0, resetTime: windowStart + windowMs };
    }
    
    this.windows.set(key, current + 1);
    
    // Cleanup old windows
    this.cleanup(windowStart);
    
    return {
      allowed: true,
      remaining: limit - current - 1,
      resetTime: windowStart + windowMs
    };
  }

  cleanup(currentWindow) {
    for (const [key] of this.windows) {
      const windowTime = parseInt(key.split(":")[1]);
      if (windowTime < currentWindow) {
        this.windows.delete(key);
      }
    }
  }
}

// DDoS protection
class EdgeDDoSProtection {
  async analyzeTraffic(request) {
    const clientIP = request.headers.get("cf-connecting-ip");
    const userAgent = request.headers.get("user-agent");
    
    // Analyze patterns
    const riskScore = await this.calculateRiskScore(clientIP, userAgent);
    
    if (riskScore > 0.8) {
      // Challenge with CAPTCHA
      return this.challengeRequest(request);
    } else if (riskScore > 0.6) {
      // Add delay
      await this.delay(1000);
    }
    
    return { action: "allow" };
  }
}
```

## Performance Optimization

```javascript
// Edge caching strategies
class EdgeCache {
  async smartCache(request, response) {
    const url = new URL(request.url);
    const key = this.generateCacheKey(request);
    
    // Cache based on content type
    let ttl = 300; // 5 minutes default
    
    if (url.pathname.includes("/api/static/")) {
      ttl = 86400; // 24 hours for static data
    } else if (url.pathname.includes("/api/user/")) {
      ttl = 60; // 1 minute for user data
    } else if (url.pathname.includes("/api/realtime/")) {
      ttl = 5; // 5 seconds for real-time data
    }
    
    // Add cache headers
    response.headers.set("Cache-Control", `public, max-age=${ttl}`);
    response.headers.set("CDN-Cache-Control", `max-age=${ttl}`);
    
    return response;
  }

  generateCacheKey(request) {
    const url = new URL(request.url);
    const country = request.cf?.country || "unknown";
    const device = this.detectDevice(request);
    
    return `${url.pathname}:${country}:${device}:${url.search}`;
  }
}

// Resource hints en el edge
async function optimizeHTML(html, request) {
  const country = request.cf?.country;
  const device = this.detectDevice(request);
  
  // Add region-specific preloads
  const regionAssets = getRegionAssets(country);
  const preloads = regionAssets.map(asset => 
    `<link rel="preload" href="${asset}" as="script">`
  ).join("\n");
  
  // Inject optimizations
  return html.replace(
    "<head>",
    `<head>\n${preloads}\n<link rel="dns-prefetch" href="//cdn-${country}.example.com">`
  );
}
```

## Casos de Uso Reales

### E-commerce

```javascript
// Personalización en tiempo real
export async function personalizeProduct(request) {
  const userLocation = request.cf?.city;
  const userAgent = request.headers.get("user-agent");
  
  // Local inventory check
  const localInventory = await checkLocalInventory(userLocation);
  
  // Personalized pricing
  const pricing = await getRegionalPricing(userLocation);
  
  // Device-specific images
  const images = await optimizeImages(userAgent);
  
  return {
    inventory: localInventory,
    pricing,
    images,
    shippingOptions: getLocalShipping(userLocation)
  };
}
```

### Gaming

```javascript
// Matchmaking en el edge
class EdgeMatchmaking {
  async findMatch(playerId, region) {
    // Get players in region
    const localPlayers = await this.getRegionalPlayers(region);
    
    // Match locally if possible
    const match = this.findLocalMatch(playerId, localPlayers);
    
    if (match) {
      return {
        matchId: match.id,
        server: this.getClosestServer(region),
        players: match.players
      };
    }
    
    // Expand search to nearby regions
    return this.findCrossRegionMatch(playerId);
  }
}
```

## Conclusión

Edge Computing no es solo una tendencia, es el futuro de la infraestructura web. Permite crear aplicaciones más rápidas, confiables y personalizadas que nunca antes.',
  'edge-computing-procesamiento-limite',
  true,
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
),
(
  'DevOps en 2025: CI/CD, Containers y Observabilidad',
  'Guía completa de DevOps moderno. GitHub Actions, Docker, Kubernetes, monitoring y las mejores prácticas para equipos de desarrollo.',
  '# DevOps 2025: Automatización y Observabilidad

DevOps ha evolucionado significativamente. Veamos las herramientas y prácticas que definen el desarrollo moderno.

## CI/CD Moderno

### GitHub Actions

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: 18
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test:coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Security audit
        run: npm audit --audit-level high
      
      - name: SAST with CodeQL
        uses: github/codeql-action/init@v3
        with:
          languages: javascript
      
      - name: CodeQL Analysis
        uses: github/codeql-action/analyze@v3

  build:
    needs: [test, security]
    runs-on: ubuntu-latest
    if: github.event_name == 'push'
    outputs:
      image: ${{ steps.image.outputs.image }}
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      
      - name: Login to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=ref,event=branch
            type=ref,event=pr
            type=sha,prefix={{branch}}-
      
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
      
      - name: Output image
        id: image
        run: echo "image=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}" >> $GITHUB_OUTPUT

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment:
      name: production
      url: https://app.example.com
    steps:
      - name: Deploy to Kubernetes
        uses: azure/k8s-deploy@v1
        with:
          manifests: |
            k8s/deployment.yaml
            k8s/service.yaml
          images: ${{ needs.build.outputs.image }}
          kubectl-version: latest
```

### Advanced Pipeline Features

```yaml
# Matrix builds
strategy:
  matrix:
    node-version: [16, 18, 20]
    os: [ubuntu-latest, windows-latest, macos-latest]

# Conditional deployments
deploy-staging:
  if: github.ref == 'refs/heads/develop'
  environment: staging

deploy-production:
  if: github.ref == 'refs/heads/main'
  environment: production
  needs: [test, security, build]

# Parallel jobs with dependencies
jobs:
  build-frontend:
    # ...
  build-backend:
    # ...
  integration-tests:
    needs: [build-frontend, build-backend]
    # ...
```

## Container Orchestration

### Docker Multi-stage Optimization

```dockerfile
# Multi-stage build optimized for production
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# Development stage
FROM base AS development
ENV NODE_ENV=development
RUN npm ci
COPY . .
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS build
ENV NODE_ENV=production
RUN npm ci --only=production && npm cache clean --force
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
ENV NODE_ENV=production
USER node
WORKDIR /app

# Copy built application
COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/package*.json ./

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

EXPOSE 3000
CMD ["node", "dist/server.js"]
```

### Kubernetes Deployments

```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: ghcr.io/company/web-app:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database-url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
        startupProbe:
          httpGet:
            path: /health
            port: 3000
          failureThreshold: 30
          periodSeconds: 10

---
apiVersion: v1
kind: Service
metadata:
  name: web-app-service
spec:
  selector:
    app: web-app
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web-app-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/rate-limit: "100"
spec:
  tls:
  - hosts:
    - app.example.com
    secretName: app-tls
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-app-service
            port:
              number: 80
```

## Infrastructure as Code

### Terraform

```hcl
# infrastructure/main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  
  backend "s3" {
    bucket = "company-terraform-state"
    key    = "production/terraform.tfstate"
    region = "us-west-2"
  }
}

# EKS Cluster
module "eks" {
  source = "terraform-aws-modules/eks/aws"
  version = "~> 19.0"

  cluster_name    = "production-cluster"
  cluster_version = "1.28"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  eks_managed_node_groups = {
    main = {
      min_size     = 2
      max_size     = 10
      desired_size = 3

      instance_types = ["t3.medium"]
      
      k8s_labels = {
        Environment = "production"
        NodeGroup   = "main"
      }
    }
  }
}

# RDS Database
resource "aws_db_instance" "main" {
  identifier = "production-db"
  
  engine         = "postgres"
  engine_version = "15.4"
  instance_class = "db.t3.micro"
  
  allocated_storage     = 20
  max_allocated_storage = 100
  storage_encrypted     = true
  
  db_name  = "appdb"
  username = "appuser"
  password = var.db_password
  
  vpc_security_group_ids = [aws_security_group.rds.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name
  
  backup_retention_period = 7
  backup_window          = "03:00-04:00"
  maintenance_window     = "sun:04:00-sun:05:00"
  
  skip_final_snapshot = false
  final_snapshot_identifier = "production-db-final-snapshot"
  
  tags = {
    Environment = "production"
  }
}
```

### Pulumi (Infrastructure as Code with TypeScript)

```typescript
// infrastructure/index.ts
import * as aws from "@pulumi/aws";
import * as k8s from "@pulumi/kubernetes";

// VPC Configuration
const vpc = new aws.ec2.Vpc("main", {
  cidrBlock: "10.0.0.0/16",
  enableDnsHostnames: true,
  enableDnsSupport: true,
  tags: { Name: "main-vpc" }
});

// EKS Cluster
const cluster = new aws.eks.Cluster("production", {
  roleArn: clusterRole.arn,
  vpcConfig: {
    subnetIds: [privateSubnet1.id, privateSubnet2.id]
  },
  version: "1.28"
});

// Kubernetes Provider
const k8sProvider = new k8s.Provider("k8s", {
  kubeconfig: cluster.kubeconfigJson
});

// Application Deployment
const appDeployment = new k8s.apps.v1.Deployment("web-app", {
  metadata: { name: "web-app" },
  spec: {
    replicas: 3,
    selector: { matchLabels: { app: "web-app" } },
    template: {
      metadata: { labels: { app: "web-app" } },
      spec: {
        containers: [{
          name: "web-app",
          image: "ghcr.io/company/web-app:latest",
          ports: [{ containerPort: 3000 }],
          env: [
            { name: "NODE_ENV", value: "production" },
            { name: "DATABASE_URL", valueFrom: { secretKeyRef: { name: "app-secrets", key: "database-url" } } }
          ]
        }]
      }
    }
  }
}, { provider: k8sProvider });
```

## Observability Stack

### Monitoring con Prometheus

```yaml
# monitoring/prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'kubernetes-apiservers'
    kubernetes_sd_configs:
    - role: endpoints
    scheme: https
    tls_config:
      ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
    relabel_configs:
    - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
      action: keep
      regex: default;kubernetes;https

  - job_name: 'web-app'
    kubernetes_sd_configs:
    - role: pod
    relabel_configs:
    - source_labels: [__meta_kubernetes_pod_label_app]
      action: keep
      regex: web-app
    - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
      action: keep
      regex: true
```

### Application Metrics

```javascript
// metrics/prometheus.js
const promClient = require("prom-client");

// Custom metrics
const httpRequestDuration = new promClient.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.1, 0.5, 1, 2, 5]
});

const activeConnections = new promClient.Gauge({
  name: "active_connections",
  help: "Number of active connections"
});

const dbQueryDuration = new promClient.Histogram({
  name: "db_query_duration_seconds",
  help: "Duration of database queries",
  labelNames: ["query_type"]
});

// Middleware for Express
function metricsMiddleware(req, res, next) {
  const start = Date.now();
  
  res.on("finish", () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestDuration
      .labels(req.method, req.route?.path || req.path, res.statusCode)
      .observe(duration);
  });
  
  next();
}

// Database instrumentation
class InstrumentedDatabase {
  async query(sql, params, type = "select") {
    const start = Date.now();
    try {
      const result = await this.db.query(sql, params);
      const duration = (Date.now() - start) / 1000;
      dbQueryDuration.labels(type).observe(duration);
      return result;
    } catch (error) {
      const duration = (Date.now() - start) / 1000;
      dbQueryDuration.labels(`${type}_error`).observe(duration);
      throw error;
    }
  }
}

module.exports = {
  metricsMiddleware,
  httpRequestDuration,
  activeConnections,
  dbQueryDuration
};
```

### Distributed Tracing

```javascript
// tracing/opentelemetry.js
const { NodeSDK } = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { Resource } = require("@opentelemetry/resources");
const { SemanticResourceAttributes } = require("@opentelemetry/semantic-conventions");

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "web-app",
    [SemanticResourceAttributes.SERVICE_VERSION]: process.env.APP_VERSION || "1.0.0",
    [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: process.env.NODE_ENV || "development"
  }),
  instrumentations: [getNodeAutoInstrumentations({
    "@opentelemetry/instrumentation-fs": {
      enabled: false // Disable filesystem instrumentation
    }
  })]
});

sdk.start();

// Custom spans
const opentelemetry = require("@opentelemetry/api");

async function processOrder(orderId) {
  const tracer = opentelemetry.trace.getTracer("order-service");
  
  return tracer.startActiveSpan("process-order", async (span) => {
    span.setAttributes({
      "order.id": orderId,
      "order.type": "web"
    });
    
    try {
      // Validate order
      await tracer.startActiveSpan("validate-order", async (validateSpan) => {
        await validateOrder(orderId);
        validateSpan.setStatus({ code: opentelemetry.SpanStatusCode.OK });
        validateSpan.end();
      });
      
      // Process payment
      await tracer.startActiveSpan("process-payment", async (paymentSpan) => {
        const paymentResult = await processPayment(orderId);
        paymentSpan.setAttributes({
          "payment.amount": paymentResult.amount,
          "payment.method": paymentResult.method
        });
        paymentSpan.end();
      });
      
      span.setStatus({ code: opentelemetry.SpanStatusCode.OK });
      return { success: true, orderId };
    } catch (error) {
      span.recordException(error);
      span.setStatus({
        code: opentelemetry.SpanStatusCode.ERROR,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  });
}
```

### Logging Strategy

```javascript
// logging/structured.js
const winston = require("winston");
const { ElasticsearchTransport } = require("winston-elasticsearch");

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: {
    service: "web-app",
    version: process.env.APP_VERSION,
    environment: process.env.NODE_ENV
  },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    new ElasticsearchTransport({
      level: "info",
      clientOpts: {
        node: process.env.ELASTICSEARCH_URL
      },
      index: "app-logs"
    })
  ]
});

// Correlation ID middleware
function correlationMiddleware(req, res, next) {
  req.correlationId = req.headers["x-correlation-id"] || 
                     crypto.randomUUID();
  
  res.setHeader("x-correlation-id", req.correlationId);
  
  // Add to logger context
  req.logger = logger.child({ correlationId: req.correlationId });
  
  next();
}

module.exports = { logger, correlationMiddleware };
```

## Security and Compliance

```yaml
# security/policy.yaml
apiVersion: v1
kind: NetworkPolicy
metadata:
  name: web-app-netpol
spec:
  podSelector:
    matchLabels:
      app: web-app
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: ingress-nginx
    ports:
    - protocol: TCP
      port: 3000
  egress:
  - to:
    - namespaceSelector:
        matchLabels:
          name: database
    ports:
    - protocol: TCP
      port: 5432
  - to: []
    ports:
    - protocol: TCP
      port: 443
    - protocol: TCP
      port: 53
    - protocol: UDP
      port: 53
```

## Conclusión

DevOps en 2025 se centra en la automatización completa, observabilidad profunda y seguridad integrada. Las herramientas han madurado significativamente, permitiendo equipos más eficientes y sistemas más confiables.',
  'devops-2025-cicd-containers-observabilidad',
  true,
  'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop'
);

-- Actualizar created_at para simular posts en diferentes fechas
UPDATE posts SET created_at = NOW() - INTERVAL '1 day' WHERE title LIKE 'Introducción a React 19%';
UPDATE posts SET created_at = NOW() - INTERVAL '2 days' WHERE title LIKE 'TypeScript vs JavaScript%';
UPDATE posts SET created_at = NOW() - INTERVAL '3 days' WHERE title LIKE 'Guía Completa de CSS Grid%';
UPDATE posts SET created_at = NOW() - INTERVAL '4 days' WHERE title LIKE 'Node.js Performance%';
UPDATE posts SET created_at = NOW() - INTERVAL '5 days' WHERE title LIKE 'Docker para Desarrolladores%';
UPDATE posts SET created_at = NOW() - INTERVAL '6 days' WHERE title LIKE 'Arquitectura Microservicios%';
UPDATE posts SET created_at = NOW() - INTERVAL '7 days' WHERE title LIKE 'Machine Learning con JavaScript%';
UPDATE posts SET created_at = NOW() - INTERVAL '8 days' WHERE title LIKE 'WebAssembly%';
UPDATE posts SET created_at = NOW() - INTERVAL '9 days' WHERE title LIKE 'GraphQL vs REST%';
UPDATE posts SET created_at = NOW() - INTERVAL '10 days' WHERE title LIKE 'Seguridad Web%';
UPDATE posts SET created_at = NOW() - INTERVAL '11 days' WHERE title LIKE 'Next.js 15%';
UPDATE posts SET created_at = NOW() - INTERVAL '12 days' WHERE title LIKE 'Desarrollo Mobile%';
UPDATE posts SET created_at = NOW() - INTERVAL '13 days' WHERE title LIKE 'Rust para JavaScript%';
UPDATE posts SET created_at = NOW() - INTERVAL '14 days' WHERE title LIKE 'Databases Modernas%';
UPDATE posts SET created_at = NOW() - INTERVAL '15 days' WHERE title LIKE 'Edge Computing%';
UPDATE posts SET created_at = NOW() - INTERVAL '16 days' WHERE title LIKE 'DevOps en 2025%';

-- Generar slugs únicos si hay conflictos
UPDATE posts SET slug = CONCAT(slug, '-', id) WHERE id > 1;