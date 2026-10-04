abstract class Equipo {
  tipo: string;
  modelo: string;
  ram: string;
  procesador: string;
  //
  constructor(tipo: string, modelo: string, ram: string, procesador: string) {
    this.tipo = tipo;
    this.modelo = modelo;
    this.ram = ram;
    this.procesador = procesador;
  }
  //
  detalles(): string {
    return `     Tipo:${this.tipo},
     Modelo:${this.modelo}, 
     Ram:${this.ram}, 
     Procesador:${this.procesador}
     `;
  }
  //
}

class EquipoFactory {
  //
  constructor() {}
  //
  crearEquipo(tipo: string, modelo: string, ram: string, procesador: string) {
    switch (tipo) {
      case "Notebook":
        return new Notebook(tipo, modelo, ram, procesador);
      //
      case "Desktop":
        return new Desktop(tipo, modelo, ram, procesador);
      //
      case "Servidor":
        return new Servidor(tipo, modelo, ram, procesador);
      //
      default:
        throw new Error("ERROR EN EL TIPO");
        break;
    }
  }
}

class Notebook extends Equipo {
  //
  constructor(tipo: string, modelo: string, ram: string, procesador: string) {
    //
    super(tipo, modelo, ram, procesador);
  }
  //
}
//
class Desktop extends Equipo {
  constructor(tipo: string, modelo: string, ram: string, procesador: string) {
    //
    super(tipo, modelo, ram, procesador);
    //
  }
}
//
class Servidor extends Equipo {
  constructor(tipo: string, modelo: string, ram: string, procesador: string) {
    //
    super(tipo, modelo, ram, procesador);
    //
  }
}
//
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());
