import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = 'Utilizando titulo da classe home!!';


  protected cont = "Contagem";

  protected dobrador = computed(() => this.somador() * 2);

  protected somador = signal(0);

  protected flag = true;

  protected Soma(){
    if(this.flag){
      this.somador.update(valor => valor + 1);
      if (this.somador() > 9){
        this.flag = !this.flag;
      }
    /* Arrow function é a mesma coisa que:
    this.somador.update(
      function soma(pontos){
        return pontos + 1;
      }
    )
    */
    } else{
      this.somador.update(valor => valor - 1);
      if(this.somador() == 0){
        this.flag = !this.flag;

      }
      
    }

  };

  protected Sub(){
    this.somador.update(valor => valor - 1);
  };

}


