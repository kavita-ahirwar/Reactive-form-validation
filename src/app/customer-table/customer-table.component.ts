import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  id:any;
  Location_Id:any='';
  Location_Display_Name:any='';
  Search:any='';
  Street:any='';
  City:any='';
  State:any='';
  Country:any='';
  Postalcode:any='';
  Location_Title:any='';
  Location_Name:any='';
  Location_Number:any='';
  Location_Email:any='';
  action:any;
  formData:any[]|any;
  index:any

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  displayedColumns: string[] = ['id','Location_Id','Location_Display_Name','Search','Street','City','State','Country','Postalcode','Location_Title','Location_Name','Location_Number','Location_Email','action'];
  dataSource!: MatTableDataSource<any>;
  form: any;

  getData(){

    const value:any[]=JSON.parse(localStorage.getItem("registerForm") || '[]');
   this.formData=value;
    console.log(value)

    this.dataSource=new MatTableDataSource(value)
  }
  constructor( private router:Router ,private fb:FormBuilder) { }
  // displayedColumns:string[]=['position','symbol','weight','name'];
  // dataSource=ELEMENT_DATA;

  // edit(row:any){
  //   debugger
  // this.router.navigate(['customer/edit']) ;   

  // }

  update() {
    for (let index = 0; index < this.dataSource.data.length; index++) {
      if (this.dataSource.data[index].locationId === this.form.value.locationId) {
        this.dataSource.data[index].locationDisplayName = this.form.value.locationDisplayName;
        this.dataSource.data[index].streetAddress = this.form.value.streetAddress;
        this.dataSource.data[index].cityAddress = this.form.value.cityAddress;
        this.dataSource.data[index].stateAddress = this.form.value.stateAddress;
        this.dataSource.data[index].countryAddress = this.form.value.countryAddress;
        this.dataSource.data[index].postalCodeAddress = this.form.value.postalCodeAddress;
        this.dataSource.data[index].locatinContactTitle = this.form.value.locatinContactTitle;
        this.dataSource.data[index].locationContactName = this.form.value.locationContactName;
        this.dataSource.data[index].country_code = this.form.value.country_code;
        this.dataSource.data[index].locationContactNumber = this.form.value.locationContactNumber;
        this.dataSource.data[index].countrlocationContactEmaily_code = this.form.value.locationContactEmail;
        localStorage.setItem("data", JSON.stringify(this.dataSource.data));
      }
    }
    this.getData();
  }


  delete(row:any){
  // console.log(row)
  window.confirm("Are you sure");
  debugger
  let index=this.formData.indexOf(row);
  console.log(index);
  if(confirm()==true){
    this.formData.splice(index,1)
    localStorage.setItem('registerForm',JSON.stringify(this.formData))
    this.getData()
  }
  


  // localStorage.setItem("registerForm", JSON.stringify(value));
    // console.log()

  }

  ngOnInit(): void {
    this.form=this.fb.group(
      {
        id:[''],
        Location_Id:[''],
        Location_Display_Name:[''],
        Search:[''],
        Street:[''],
        City:[''],
        State:[''],
        Country:[''],
        Postalcode:[''],
        Location_Title:[''],
        Location_Name:[''],
        Location_Number:[''],
        Location_Email:[''],
        action:[''],
        formData:['']
      }
    )
    this.getData()
    console.log(this.index)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
