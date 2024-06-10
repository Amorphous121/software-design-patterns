import { Button } from "./Button";
import { DialogBox } from "./DialogBox";
import { ListBox } from "./ListBox";
import { TextBox } from "./TextBox";
import { UiControl } from "./UiControl";

export class ArticlesDialogBox extends DialogBox {
  private articlesListBox = new ListBox(this);
  private titleTextBox = new TextBox(this);
  private saveButton = new Button(this);


  public simulateUserInteraction() {
    this.articlesListBox.setSelection('Article 1');
    console.log("TextBox: ", this.titleTextBox.getContent()); // Article 1
    console.log('Buttton: ', this.saveButton.getIsEnabled()); // true
    
    
    this.titleTextBox.setContent('');
    console.log("TextBox: ", this.titleTextBox.getContent()); // ''
    console.log('Buttton: ', this.saveButton.getIsEnabled()); // false
    
    this.titleTextBox.setContent('Article 2');
    console.log("TextBox: ", this.titleTextBox.getContent()); // ''
    console.log('Buttton: ', this.saveButton.getIsEnabled()); // false
  }

  public changed(control: UiControl): void {
    if (control === this.articlesListBox) {
      this.articleSelected();
    } else if (control === this.titleTextBox) {
      this.titleChanged();
    }
  }

  private articleSelected(): void {
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    this.saveButton.setIsEnabled(true);
  }

  private titleChanged() {
    const content = this.titleTextBox.getContent();
    const isEmpty = content.length === 0;
    this.saveButton.setIsEnabled(!isEmpty);
  }
}
