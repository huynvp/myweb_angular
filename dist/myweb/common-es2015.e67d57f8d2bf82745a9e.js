(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{U3xU:function(e,s,t){"use strict";t.d(s,"a",(function(){return i}));var r=t("IheW"),a=t("AytR");class i{constructor(e){this.http=e,this.header=new r.g({"content-type":"application/json",Authorization:`Bearer ${localStorage.access_token}`})}getPermission(){return this.http.get(`${a.a.baseUrl}/permissions`,{headers:this.header}).toPromise()}getDetailPermission(e){return this.http.get(`${a.a.baseUrl}/permissions/${e}`,{headers:this.header}).toPromise()}addPermission(e){return this.http.post(`${a.a.baseUrl}/permissions`,JSON.stringify({name:e}),{headers:this.header}).toPromise()}editPermission(e,s,t){return this.http.put(`${a.a.baseUrl}/permissions/${e}`,JSON.stringify({name:s,timestamp:t}),{headers:this.header}).toPromise()}deletePermission(e){return this.http.delete(`${a.a.baseUrl}/permissions/${e}`,{headers:this.header}).toPromise()}detailPermission(e){return this.http.get(`${a.a.baseUrl}/permissions/${e}/users`,{headers:this.header}).toPromise()}getLogUser(e,s){return this.http.get(`${a.a.baseUrl}/user/logs?numberOfPage=${e}&currentPage=${s}`,{headers:this.header}).toPromise()}showListTask(){return this.http.get(`${a.a.baseUrl}/taskWorks`,{headers:this.header}).toPromise()}showDetailTask(e){return this.http.get(`${a.a.baseUrl}/taskWorks/${e}`,{headers:this.header}).toPromise()}addNewTask(e,s,t,r,i){return this.http.post(`${a.a.baseUrl}/taskWorks`,JSON.stringify({Title:e,Content:s,DateOfTask:t,Status:r,Type:i}),{headers:this.header}).toPromise()}editTask(e,s,t,r,i,h){return this.http.put(`${a.a.baseUrl}/taskWorks/${e}`,JSON.stringify({Title:s,Content:t,DateOfTask:r,Status:i,Type:h}),{headers:this.header}).toPromise()}changeStatusTask(e,s){return this.http.put(`${a.a.baseUrl}/taskWorks/${e}`,JSON.stringify({Status:s}),{headers:this.header}).toPromise()}deleteTask(e){return this.http.delete(`${a.a.baseUrl}/taskWorks/${e}`,{headers:this.header}).toPromise()}showDetailMess(e){return this.http.get(`${a.a.baseUrl}/admin/messageLogs/${e}`,{headers:this.header}).toPromise()}addNewMess(e,s){return this.http.post(`${a.a.baseUrl}/admin/messageLogs`,JSON.stringify({Title:e,Content:s}),{headers:this.header}).toPromise()}editMess(e,s,t,r){return this.http.put(`${a.a.baseUrl}/admin/messageLogs/${e}`,JSON.stringify({Title:s,Content:t,Timestamp:r}),{headers:this.header}).toPromise()}deleteMess(e){return this.http.delete(`${a.a.baseUrl}/admin/messageLogs/${e}`,{headers:this.header}).toPromise()}}}}]);