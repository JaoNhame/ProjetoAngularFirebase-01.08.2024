import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pessoa = {
    foto: `https://mail.google.com/mail/u/0?ui=2&ik=3a0cafbbe2&attid=0.1&permmsgid=msg-a:r-953234421520677092&th=191343690fa4dc19&view=att&disp=safe&realattid=19134365e428d0520b71`,
    nome: `Robson Piquirite`,
    objetivo: `Programador HTML & CSS`,
    contato: {
      email: `piquiRobsS2@gmail.com`,
      telefone: `+55 (15) 99646-7466`,
      github: `github.com/RobRite`,
      linkedin: `linkedin.com/PiquiRobs69`
    },
    softskills: [
      `Comunicação`,
      `Trabalho em equipe`,
      `Proatividade`,
      `Criatividade`,
      `Paciência`,
      `Resiliência`,
      `Inovação`
    ],
    formacao_academica: [
      {
        ano_inicio: '1997',
        ano_fim: '2000',
        instituicao: 'Instituição Japão-Brasil Tekomi Namata',
        curso: 'Gestão em Tecnologia da Informação'
      },

      {
        ano_inicio: '2006',
        ano_fim: '2010',
        instituicao: 'Universidade de São Paulo',
        curso: 'Gestão Industrial'
      },

      {
        ano_inicio: '2023',
        ano_fim: '2027',
        instituicao: 'University of Italia - Giusseppe Cadura',
        curso: 'Doutorado em Análise e Desenvolvimento de Sistemas'
      }
    ],

    realizacoes: [
      {
        ano: '2001',
        local: 'Rubens Lemos da Conceição (SapeEnterprise)',
        titulo: 'Site Sape Doce',
        descricao: 'Site para a SapaEnterprise no ramo de confeitaria gourmet.'
      },

      {
        ano: '2004',
        local: 'Rubens Lemos da Conceição (SapeEnterprise)',
        titulo: 'To-do liste SapaEnterprise',
        descricao: 'Sistema para organização de tarefas.'
      }

    ]
  }

  // Constructor -> Executa assim que carrega a página
  constructor(){ }

}
