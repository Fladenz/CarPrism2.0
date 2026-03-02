import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-car',
  standalone: true,
  imports: [CommonModule, RouterLink],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cadastro-car.component.html',
  styleUrls: ['./cadastro-car.component.css']
})
export class CadastroCarComponent implements OnDestroy {
  previewImage = '';
  selectedFileName = '';
  showToast = false;
  private toastTimer?: ReturnType<typeof setTimeout>;

  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (!file) {
      return;
    }

    this.selectedFileName = `Arquivo selecionado: ${file.name}`;

    const reader = new FileReader();
    reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
      this.previewImage = (loadEvent.target?.result as string) || '';
    };
    reader.readAsDataURL(file);
  }

  onSubmit(form: HTMLFormElement): void {
    this.showToast = true;

    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }

    this.toastTimer = setTimeout(() => {
      form.reset();
      this.previewImage = '';
      this.selectedFileName = '';
      this.showToast = false;
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }
  }
}
