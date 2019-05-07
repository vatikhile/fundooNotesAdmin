import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import "datatables.net";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})

export class DashboardComponent implements OnInit {
  // data1:any= {};
  // array= []; 
  advancee: number = 0;
  basicc: number = 0;
  constructor() { }
  ngOnInit() {
    this.getAllUser();
    // this.getCount();

  }
  //getting the user information like firstnName ,email and services 
  getAllUser() {
    var obj = []
   var  advance = 0 
    var basic = 0
    $.ajax({
      type: 'GET',
      url: 'http://34.213.106.173/api/user/getAdminUserList',
      dataType: "json",
      success: function (data) {

        console.log(data);

        var list = data['data']['data'];

        this.users = data['data']['data'];
        for (let index = 0; index < this.users.length; index++) {

          obj.push([index + 1, list[index].firstName, list[index].email, list[index].service]);
          if (list[index].service == 'advance') {
            advance++;
          } else {
            basic++;
          }
        }
        console.log('advance is', advance, '   basic is ', basic);
        this.advancee = advance;
        this.basicc = basic;  
        console.log('advancee  is', this.advancee, '   basicc is ', this.basicc);

        $('#userTable').DataTable({
          "data": obj,
        });
      },
      error: function (error) {
        console.log("Error : ", error);
      }
    });
  }

  //for counting the services of advance and basic
  // getCount() {


    // $.ajax({
    //   type: 'GET',
    //   url: 'http://34.213.106.173/api/user/UserStatics',
    //   dataType: "json",
    //   success: function (data) {
    //     // var count = data['data'];
    //     // console.log("count: ", count);

    //     //console.log(data);

    //     for (let i = 0; i < users.length; i++) {
    //      if (count[i].service = "advance") {
    //   var count1 = count1 + 1;
    //        console.log("fdtyeefyc");
    //       console.log(count1);
    //     }
    //    else {
    //     //   //   var count2 = count2 + 1;
    //   }
    //  $("#userService").show();
    //      }
    //   }
    // })
  // }
}





