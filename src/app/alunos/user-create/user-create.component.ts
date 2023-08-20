import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlunosServiceService } from 'src/app/service/alunos-service.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  formulario: FormGroup;
  listaCep!:any[]
  
  selectedDate!: Date;

  NgOnInit(){

  }

  constructor(private userService: AlunosServiceService) {
    this.formulario = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      dataNascimento: new FormControl(''),
      genero: new FormControl(''),
      email: new FormControl(''),      
      curso: new FormControl(''),
      nota_redacao: new FormControl(''),
      acertos_vestibular: new FormControl(''),
      
      
    });
  }

  create() {
    //this.dataNascimento =this.selectedDate.toISOString()
    
    const formData = this.formulario.value;
    
    formData.cpf = formData.cpf.toString(); // Converte para string
    // formData.dataNascimento = this.formatarData2(formData.dataNascimento)
    this.userService.createUser(formData).subscribe(
      response => {
        alert('Usuário criado com sucesso:');
        // Aqui você pode fazer qualquer ação adicional após a criação do usuário
      },
      error => {
        alert('Erro ao criar usuário:');
        // Aqui você pode tratar o erro de acordo com sua necessidade
      }
    );

    console.log(formData);
  }

  formatarData2(data: any): string {
    return formatDate(data, 'yyyy-MM-dd', 'en-US');
  }
  formatarData(data: any): string {
    // Converte a data para o formato adequado (exemplo: "AAAA-MM-DD")
    const dataObj = new Date(data);
    const ano = dataObj.getFullYear();
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0'); // Mês começa em 0
    const dia = dataObj.getDate().toString().padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }

}
