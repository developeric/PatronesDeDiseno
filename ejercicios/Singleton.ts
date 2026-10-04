interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}
//
class EquipoElectronico implements Equipo {
  estado: string;
  nombre: string;
  tipo: string;
  constructor(estado: string, nombre: string, tipo: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }
}
//
class Inventario {
  static equipo: Equipo[] = [];
  static instancia: Inventario;
  //
  static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }
  //CONSTRUCTOR
  private constructor() {}
  //AGREGAR
  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    Inventario.equipo.push({ nombre, tipo, estado });
  }
  //LISTAR
  listarEquipos(): Equipo[] {
    return Inventario.equipo;
  }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
