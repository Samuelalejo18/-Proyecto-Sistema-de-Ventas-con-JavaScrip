class Orden {
  static contadorOrdenes = 0;
  static get MAX_PRODUTOS() {
    return 5;
  }

  constructor() {
    this._productos = [];
    //this._contadorProductosAgregados = 0;
    this._idOrden = ++Orden.contadorOrdenes;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUTOS) {
      this._productos.push(producto);
      //! this._productos[this._contadorProductosAgregados++]= producto;
    } else {
      console.log("No se pueden agregar mas productos");
    }
  }
  calcularTotal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
      totalVenta += producto.precio; //! totalVenta = totalVenta+ producto.precio
    }
    return totalVenta;
  }
  mostrarOrden() {
    let productosOrden = "";
    for (let producto of this._productos) {
      productosOrden += "\n{" + producto.toString() + "} ";
    }
    console.log(
      `Orden : ${
        this._idOrden
      }, Total: $${this.calcularTotal()}, Productos: ${productosOrden}`
    );
  }
}
