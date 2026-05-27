import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideArrowRight, 
        LucideCamera, 
        LucideBrainCog, 
        LucideClipboardCheck,
        LucideWheat,
        LucideCircleDot,
        LucideLeaf,
        LucideApple

        } from '@lucide/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule, RouterLink, LucideArrowRight],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  items:{
    icon:Type<any>,
    title: string,
    text: string

  }[] =[
    {
      'icon': LucideCamera,
      'title':'Upload Photo',
      'text':'Snap a clear photo of the affected plant leaf using smartphone camera.'
    },
    {
      'icon': LucideBrainCog,
      'title':'AI Analyzes',
      'text':'Our specialized neural network compares the image against thousands of crop disease samples.'
    },
    {
      'icon': LucideClipboardCheck,
      'title':'Get Results',
      'text':'Receive an instant diagnosis and expert treatment recommendations for your specific crop.'
    }

  ]

  icons :{
    icon:Type<any>,
    legend:string

  }[]=[
    {
    'icon': LucideWheat,
    'legend':'Corn',
    },
      {
    'icon': LucideCircleDot,
    'legend':'Potato',
    },
      {
    'icon': LucideLeaf,
    'legend':'Pepper',
    },
      {
    'icon': LucideApple,
    'legend':'Tomato',
    },
  ]



}
