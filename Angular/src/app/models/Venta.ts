export interface Venta {
	id: number;
	factura: string;
	fecha: string;
	cliente: string;
	producto: string;
	vendedor: string;
	total: number;
}

export default Venta; 
