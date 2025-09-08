### 🎾 Reglas del marcador de Tennis

#### Escenarios y resultados esperados

| Scenario        | Expected Output      |
| --------------- | -------------------- |
| Empieza el set  | `Love-Love`          |
| Jugador 1 anota | `15-Love`            |
| Jugador 2 anota | `15-15`              |
| Jugador 1 anota | `30-15`              |
| Jugador 2 anota | `30-30`              |
| Jugador 1 anota | `40-30`              |
| Jugador 2 anota | `Deuce`              |
| Jugador 1 anota | `Advantage Player 1` |
| Jugador 1 anota | `Game for Player 1`  |

---

#### 📖 Explicación de las reglas básicas

**Puntuación de un game (juego):**

- Los puntos van en este orden: `Love → 15 → 30 → 40 → Game`.
- Si ambos jugadores llegan a 40, se llama **Deuce** (iguales).

**Deuce y ventaja:**

- Desde **Deuce**, un jugador debe ganar **dos puntos seguidos** para llevarse el game.
- El primer punto ganado desde Deuce da **Ventaja**.
- Si el rival gana el siguiente punto, vuelven a **Deuce**.

**Game ganado:**

- Un jugador gana el game si:
  - Llega a 40 y gana un punto más sin que haya Deuce, o
  - Consigue ventaja y gana el siguiente punto.

#### Proyeto base para proyectos tddlab:

#### Creado a partir de proyecto usado en IngSoftware: parcel-jest-base

https://github.com/israelantezana/parcel-jest-base

#### Comandos creados en package json:

#### Para instalar las dependencias:

npm install

#### Comandos de uso:

Ejecutar web-sever local parcel:
npm start

Ejecutar pruebas de unidad de forma continua --watch:
npm test
