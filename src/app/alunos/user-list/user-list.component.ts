import { Component, OnInit } from '@angular/core';
import { AlunosServiceService } from 'src/app/service/alunos-service.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!: any[];

  constructor(private userService: AlunosServiceService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.users = users;
    });
  }

  displayedColumns: string[] = ['nome_aluno', 'genero', 'data_nasc'];
}
