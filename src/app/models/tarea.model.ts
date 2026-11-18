export interface Tarea {
  id: number;
  titulo: string;
  prioridad: 'Baja' | 'Media' | 'Alta';
  completada: boolean;
}
