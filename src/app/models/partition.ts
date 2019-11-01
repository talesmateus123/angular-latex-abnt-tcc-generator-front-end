import { Document } from 'src/app/models/document'
export interface Partition {
  id:Number
	tipoParticao:String
	titulo:String
	conteudo:String
  document:Document[]
}
