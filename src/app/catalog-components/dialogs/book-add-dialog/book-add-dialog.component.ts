import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {LibriService} from "../../../services/libri.service";

@Component({
  selector: 'app-book-add-dialog',
  templateUrl: './book-add-dialog.component.html',
  styleUrls: ['./book-add-dialog.component.css']
})
export class BookAddDialogComponent implements OnInit{
  form: FormGroup = new FormGroup({
    titolo: new FormControl('', Validators.required),
    autore: new FormControl('', Validators.required),
    isbn: new FormControl('', [Validators.required, Validators.maxLength((13))]),
    dataPubblicazione: new FormControl('', Validators.required),
    trama: new FormControl('', Validators.required),
    copertina: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<any>,
    private libroService: LibriService,
    ) {}

  ngOnInit() {
  }

  onSubmitAddLibro() {
    if (!this.form.invalid) {
      this.libroService.addLibro(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.dialogRef.close('save');
        },
        error: (err) => {
          alert('Errore, libro non aggiunto');
        },
      });
    }
  }


}
