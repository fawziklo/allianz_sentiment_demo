import { Component, Inject } from '@angular/core';
import { SentimentAnalysisService } from '../service/sentiment-analysis.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss']
})
export class ClientReviewComponent {

  public reviewText: string;
  public score: number;

  constructor(private sentimentAnalysisService: SentimentAnalysisService,
    public dialog: MatDialog) { }

  public makePrediction(): void {
    this.sentimentAnalysisService.loadMetaData().then(metaData => {
      this.sentimentAnalysisService.loadModel().then(model => {
        this.score = this.sentimentAnalysisService.predict(this.reviewText, metaData, model);
        if (this.score) {
          this.openDialog();
        }
      })
    })
  }

  public getText(value: string): void {
    this.reviewText = value;
  }

  private openDialog() {
    console.warn(this.score)
    this.dialog.open(DialogElementsExampleDialog,
      {
        maxWidth: '100%', maxHeight: '100%', data: { score: this.score }
      });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogElementsExampleDialog {
  score;
  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }


}

export interface DialogData {
  score: number;
}


