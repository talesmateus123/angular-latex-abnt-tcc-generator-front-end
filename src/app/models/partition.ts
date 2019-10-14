import { Document } from 'src/app/models/document'
import { Datax } from './datax';
export interface Partition {
  id:Number
	tipoParticao:String
	titulo:String
	conteudo:String
  document:Document[],
  data:Datax[]
}
