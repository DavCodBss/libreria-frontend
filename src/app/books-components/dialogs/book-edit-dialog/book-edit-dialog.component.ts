import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LibroService} from "../../libro.service";
import {Libro} from "../../../model/libro";

@Component({
  selector: 'app-book-edit-dialog',
  templateUrl: './book-edit-dialog.component.html',
  styleUrls: ['./book-edit-dialog.component.css']
})
export class BookEditDialogComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    titolo: new FormControl('', Validators.required),
    autore: new FormControl('', Validators.required),
    isbn: new FormControl('', [Validators.required, Validators.maxLength((13))]),
    dataPubblicazione: new FormControl('', Validators.required),
    trama: new FormControl('', Validators.required),
    copertina: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<any>,
    private libroService: LibroService,
    @Inject(MAT_DIALOG_DATA) public dataToEdit: any
  ) {}

  ngOnInit() {
    this.fillFormEdit();
  }


  fillFormEdit() {
    if (this.dataToEdit) {
      this.form.controls['id'].setValue(this.dataToEdit.id);
      this.form.controls['titolo'].setValue(this.dataToEdit.titolo);
      this.form.controls['autore'].setValue(this.dataToEdit.autore);
      this.form.controls['isbn'].setValue(this.dataToEdit.isbn);
      this.form.controls['dataPubblicazione'].setValue(this.dataToEdit.dataPubblicazione);
      this.form.controls['trama'].setValue(this.dataToEdit.trama);
      this.form.controls['copertina'].setValue(this.dataToEdit.copertina);

    }
  }

  onSubmitEditLibro() {

    if (!this.form.invalid) {
      this.libroService
        .updateLibro(this.form.getRawValue())
        .subscribe({
          next: (res) => {
            this.dialogRef.close('edit');
          },
          error: (err) => {
            alert('Errore, libro non modificato');
          },
        });
    }
  }

}
