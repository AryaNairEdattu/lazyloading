import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
dataUrl='assets/data/data.json'
datas:any={};
  constructor(private http:Http,private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.dataUrl).subscribe(res=>{
      console.log(res)
      this.datas=res;
    });
  }

}
