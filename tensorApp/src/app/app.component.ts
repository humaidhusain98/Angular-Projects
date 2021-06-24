import { Component } from '@angular/core';
import * as tf from '@tensorflow/tfjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linearModel: tf.Sequential
  prediction: any;

  constructor(  linearModel: tf.Sequential){
    this.linearModel=linearModel;
  }

  title = 'tensorApp';

  ngOnInit() {
    this.trainNewModel();
  }


  async trainNewModel(){
    //Define
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({units: 1,inputShape:[1]}));


    //prepare the model for training
    this.linearModel.compile({loss: 'meanSquaredError',optimizer:'sgd'});

    //Training Data
    const xs = tf.tensor1d([3.2,4.4,5.5,6.98,7.168,2.652]);
    const ys = tf.tensor1d([1.6,2.4,3.5,4.98,4.968,0.852]);


    //Train

    await this.linearModel.fit(xs,ys);

    console.log("Model Trained");
  }

  linearPrediction(val: any){
    const output = this.linearModel.predict(tf.tensor2d([val],[1,1])) as any;
    this.prediction = Array.from(output.dataSync())[0];
  }


}
