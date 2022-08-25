import { Component, OnInit } from '@angular/core';
import { IClasse } from 'src/app/shared/interface/IClasse';
import { ClasseService } from 'src/app/shared/servicies/classe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.scss']
})
export class UpdateClassComponent implements OnInit {
  libFormControl = new FormControl('', [Validators.required]);
  effFormControl = new FormControl('', [Validators.required]);

  form = new FormGroup({
    wording : new FormControl(''),
    size : new FormControl('')
  });

  titleForm = "Modifier classe";
  id = "";
  wording = "";
  size = 0;
  date;
  classe : IClasse;

  constructor(private classeService : ClasseService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = routeParams.get('id');

    //classe with his data
    this.classeService.getOneClass(this.id).subscribe((result : IClasse) => {
      console.log(result);
      if(result.hasOwnProperty('error')){
        console.log('classe not found');
      } else {
        this.classe = result;
        this.wording = this.classe.wording;
        this.size = this.classe.size;
      }
      return result;
  });
  }

  getOneClass() {
    this.classeService.getOneClass(this.id).subscribe((result : IClasse) => {
      console.log(result);
      if(result.hasOwnProperty('error')){
        console.log('pas de classe retrouvee');
      } else {
        console.log('lib ' + result.wording);
        console.log('eff ' + result.size);
        this.classe = result;
      }
    });
  }

  editClass() {
    this.classeService.modifyClass({_id : this.id, wording : this.wording, size : this.size, date : this.date})
    .subscribe((result : IClasse) => {
      console.log('object to modify' + result);
      if(this.wording == ""){
        console.log('modification impossible');
      } else {
        this.classe = result;
        this.wording = this.classe.wording;
        this.size = this.classe.size;
        console.log('wording ' +this.wording);
        console.log('size '+this.size);

        setTimeout(() => {
          this.router.navigate(['/frontoffice/class-management']);
        }, 3000);
      }
    });
  }
  
}


