import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeminiService } from 'src/app/services/gemini.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,SharedModule,DragDropModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  constructor(private _GeminiService:GeminiService,private _AuthService:AuthService){}

  prompt:string = '';
  prompts:string[] =[];
  allGeneratedText:string []=[]
  chat:boolean=false;
  loading:boolean = false;
  generatedText:string='';
  msg:string =''
  userName:any = ''
  ngOnInit(): void {
      this.getUserData()
      
  }
  generateContent() {
    if(this.prompt != ''){
      this.loading = true;
      
      this.prompts.push(this.prompt)
      this._GeminiService.generateContent(this.prompt).subscribe({
        next: (response) => {
          this.loading =false;
          const text = response.candidates[0].content.parts[0].text; 
          this.generatedText = this.styleContent(text)
          this.allGeneratedText.push(this.generatedText)
          this.prompt= ''
        },
        error: (error) => {
          this.loading =false;
          console.error('Error generating content:', error);
        }
      });
    }
  }
  styleContent(content: string): string {
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold text
    content = content.replace(/(?:^|\n)\*\s/g, '<li>').replace(/\n\s*\*\s/g, '</li><li>'); // List items
    content = content.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>'); // Wrap list items in <ul>
    content = content.replace(/<\/li>\n/g, '</li>'); // Close list items
    content = content.replace(/(?:^|\n)(\*\*.*?\*\*)/g, '<h2>$1</h2>'); // Headings
    content = content.replace(/\n/g, '<p>'); // Paragraphs
    content = content.replace(/<p><\/li>/g, '</li>'); // Fix list item closing tags
    content = content.replace(/<\/ul><p>/g, '</ul>'); // Remove paragraph tags immediately after lists
    return content;
  }
  toggleChat(){
    this.chat = !this.chat;
    
  }
  getUserData(){
    this._AuthService.getUserInfo().subscribe({
      next:data=>{
        this.userName = data?.displayName
        
      }
    })
  }
}
