import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideMapPin, LucideStar } from '@lucide/angular';


@Component({
  selector: 'app-about',
  standalone:true,
  imports: [CommonModule, LucideMapPin, LucideStar],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  models:{
    number: string,
    name:string,
    description:string
  }[] = [
    {
      number:'01',
      name:'Baseline CNN',
      description:'The foundational architecture for initial pattern recognition.'
    },
    {
      number:'02',
      name:'VGG16',
      description:'Deep convolutional layers for enhanced feature extraction.'
    },
    {
      number:'03',
      name:'VGG19',
      description:'Extended depth for handling complex visual variances.'
    },
     {
      number:'04',
      name:'EfficientNetB0',
      description:'Efficient scaling of depth, width, and resolution.'
    },
     {                      
      number:'05',
      name:'EfficientNetB3',
      description:'State-of-the-art accuracy for real-world farm conditions.'
    }

  ]
}
