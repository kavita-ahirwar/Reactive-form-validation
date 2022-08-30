import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 user:any


  constructor( ) { }

//   update(){
//    var user
    
//     // this.userService.update(this.id, this.form.value)
//     // .pipe(first())
//     // .subscribe({
//     //     next: () => {
//     //         this.alertService.success('User updated', { keepAfterRouteChange: true });
//     //         this.router.navigate(['../../'], { relativeTo: this.route });
//     //     },
//     //     error: error => {
//     //         this.alertService.error(error);
//     //         this.loading = false;
//     //     }
//     // });
//   }

  ngOnInit(): void {
  }

}
