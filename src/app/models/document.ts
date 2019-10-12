import { Person } from 'src/app/models/person'
import { Partition } from 'src/app/models/partition'
import { Citation } from 'src/app/models/citation'
import { Word } from 'src/app/models/word'

export interface Document {
  id:number,
	titulo:String,
	subTitulo:String,
	title:String,
	nivelEscolar:String,
	tipo:String,
	pessoas:Person[],
	nomeCidade:String,
	nomeCurso:String,
	nomeInstituicao:String,
	siglaInstituicao:String,
	tituloAcademico:String,
	preAmbulo:String,
	fichaCatalografica:String,
	dedicatoria:String,
	epigrafe:String,
	resumo:String,
	abstractX:String,
	agradecimentos:String,
	particoes:Partition[],
	citacoes:Citation[],
	palavras:Word[]
}
