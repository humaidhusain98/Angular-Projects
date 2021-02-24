import { MyCustomObj } from './my-custom-obj';
import { Component } from '@angular/core';
import { WebSocketAPI } from './WebSocketAPI';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularWebSocket';

  webSocketAPI: WebSocketAPI;
  greeting: any;
  id:string;
  name: string;
  mobile:string;
  customobj:MyCustomObj;

  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new AppComponent());
  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.customobj=new MyCustomObj(this.id,this.name,this.mobile);
    console.log(this.customobj);
    this.webSocketAPI._send(this.customobj);
  }

  handleMessage(message){
    this.greeting = message;
  }



}
