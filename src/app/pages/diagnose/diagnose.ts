import { Component, ChangeDetectorRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {DISEASE_DATA} from '../../../../data/plant-diseases.data'
import { LucideRefreshCcw, LucideDownload, LucideLightbulb, LucideCloudUpload, LucideShieldPlus} from '@lucide/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

interface DiagnosisResult{
  disease: string;
  scientificName: string;
  confidence: number;
  severity: 'LOW' | 'MODERATE' | 'SEVERE';
  treatements: string[];
}

@Component({
  selector: 'app-diagnose',
  standalone:true,
  imports: [CommonModule, FormsModule, NgxDropzoneModule, LucideRefreshCcw, LucideDownload, LucideLightbulb, LucideCloudUpload, LucideShieldPlus],
  templateUrl: './diagnose.html',
  styleUrl: './diagnose.css',
})
export class Diagnose {

  files: File[] =[];
  selectedCrop ='corn';
  isLoading = false;
  result: DiagnosisResult | null = null;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef){}


  readonly crops =[
    {value:'corn', label:'Corn (Maize)'},
    {value:'tomato', label:'Tomato'},
    {value:'potato', label:'Potato'},
    {value:'pepper', label:'Pepper)'},
  ]

  tips =[
    {
      'image':'/images/tip_01.jpg',
      'tip_number':'TIP 01',
      'label': 'Isolation',
      'text':'Place the leaf on a plain, light background for maximum contrast.'
    },
    {
      'image':'/images/tip_02.jpg',
      'tip_number':'TIP 02 ',
      'label': 'Sharp Focus',
      'text':'Ensure the camera is focused on the affected area, not the background.'
    },
    {
      'image':'/images/tip_03.jpg',
      'tip_number':'TIP 03',
      'label': 'Single Leaf',
      'text':'Analyze one leaf at a time for the most accurate AI disease detection.'
    },

  ]
  
  get confidenceCircle(){
    const radius =60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (this.result!.confidence / 100) * circumference;
    return {circumference, offset};

  }

  get severityColor(): string{
    const  map = {LOW:'bg-green-100 text-green-700', MODERATE:'bg-yellow-100 text-yellow-700', SEVERE:'bg-red-100 text-red-700'}
    return map[this.result?.severity ?? 'LOW'];
  }

  onFileSelected(event: any){
    this.files = [event.addedFiles[0]]; // 1 seul fichier
    this.result = null;
  }
  
  onRemove(){
    this.files = [];
    this.result = null;
  }

  onAnalyze(){
    if(!this.files.length) return;
    this.isLoading = true;
    console.log('Analyzing:', this.files[0], 'Crop:', this.selectedCrop);
    const formData = new FormData();
    formData.append('file', this.files[0]);
    formData.append('crop', this.selectedCrop);

    this.http.post<any>('http://localhost:8000/predict/efficientnetb3', formData)
    .subscribe({
      next: (data) => {
        const disease =  data.predicted_class;
        const info = DISEASE_DATA[disease];
        console.log('Received data:', disease);
         this.result = {
        disease,
        scientificName: info.scientificName,
        confidence: data.confidence,
        severity: info.severity,
        treatements: info.treatments
      }
      this.isLoading = false;
      this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error during analysis:', error);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });  
    }
    
  scanAnother(){
    this.files = [];
    this.result = null;
  }

}
