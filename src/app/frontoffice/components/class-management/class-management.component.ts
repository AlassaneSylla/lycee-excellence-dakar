import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ClasseService } from 'src/app/shared/servicies/classe.service';
import { IClasse } from 'src/app/shared/interface/IClasse';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.scss']
})
export class ClassManagementComponent implements OnInit {
    libFormControl = new FormControl('', [Validators.required]);
    effFormControl = new FormControl('', [Validators.required]);

    form = new FormGroup({
      wording : new FormControl(''),
      size : new FormControl('')
    });

    title = "Liste des classes";
    titleForm = 'Ajouter nouvelle classe';
    id = "";
    wording = "";
    size = 0;
    date = () =>  Date.now();
    classes;
    nb =0;
   
    
    
    constructor(private classeService: ClasseService, private route : ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.getAllClasses();
    }

    completeAddClass() {
      this.form.reset();
    }

    addClass() {
      let data = this.form.value;
      console.log(data);
      let classe = { 
        size: data.size, 
        wording: data.wording, 
        date : Date.now()
      }
      this.classeService.createClass(classe);
      this.completeAddClass();

      setTimeout(() => {
        this.router.navigate(['/frontoffice/class-management']);
        location.reload();
      }, 3000);
    }

    getAllClasses() : void {
      this.classeService.getAllClasses()
      .subscribe(result => this.classes = result);
    }

    deleteClass(id: string) {
      if(confirm("Are you sure to delete ")) {
        this.classeService.deleteClass(id).subscribe(result => {
          if(result.hasOwnProperty('error')){
            console.log('not deleted');
          } else {
            console.log('class deleted : ' + result)
          }
        });
      }
      setTimeout(() => {
        this.router.navigate(['/frontoffice/class-management']);
        location.reload();
      }, 2000);  
    }

   page=1;
}
