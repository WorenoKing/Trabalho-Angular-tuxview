import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nameButton = "Cadastrar";
  formulario!: FormGroup;

  constructor(private formBilder: FormBuilder) {

    this.formulario = formBilder.group({
      img: ['', [Validators.required]],
      titulo: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

//método usado no formGroup (data driven)
  cadastro(){
    console.log(this.formulario.value);
  }



  //Todo método pode ou não receber um parametro
  //Para receber um parametro basta criar um avarivel dentro dos () do metodo
  //modo usado no ngForm
  /*
  cadastrar(bastao:any){
    alert('Imagem cadastrada com sucesso!');
    console.log(bastao.value);
  }
  */

}
