// Clase Casilla
class Casilla {
    constructor() {
        this.ocupada = false;
        this.barco = null;
    }
}

// Clase Barco
class Barco {
    constructor(nombre, tamaño) {
        this.nombre = nombre;
        this.tamaño = tamaño;
    }
}

// Clase Tablero
class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.grid = [];

        // Crear matriz vacía con Casillas
        function crearTablero() {
            for (let i = 0; i < filas; i++) {
                this.grid[i] = [];
                for (let j = 0; j < columnas; j++) {
                    this.grid[i][j] = new Casilla();
                }
            }
        }
    }


    // Método para colocar un barco en el tablero
    colocarBarco(barco, fila, columna, orientacion) {
        if (orientacion === "H") {
            if (columna + barco.tamaño > this.columnas) return false; // No cabe
            for (let i = 0; i < barco.tamaño; i++) {
                if (this.grid[fila][columna + i].ocupada) return false; // Ya ocupado
            }
            for (let i = 0; i < barco.tamaño; i++) {
                this.grid[fila][columna + i].ocupada = true;
                this.grid[fila][columna + i].barco = barco;
            }
        } else {
            if (fila + barco.tamaño > this.filas) return false; // No cabe
            for (let i = 0; i < barco.tamaño; i++) {
                if (this.grid[fila + i][columna].ocupada) return false; // Ya ocupado
            }
            for (let i = 0; i < barco.tamaño; i++) {
                this.grid[fila + i][columna].ocupada = true;
                this.grid[fila + i][columna].barco = barco;
            }
        }
        return true;
    }
}

// Crear tablero 10x10
const tablero = new Tablero(10, 10);

// Crear barcos
const barco1 = new Barco("Portaaviones", 5);
const barco2 = new Barco("Submarino", 3);

// Colocar barcos en el tablero
tablero.colocarBarco(barco1, 2, 2, "H");
tablero.colocarBarco(barco2, 5, 5, "V");

// Mostrar tablero
tablero.mostrarTablero();
