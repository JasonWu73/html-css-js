class Form {
  private form: HTMLFormElement;
  private addressIn: HTMLInputElement;

  constructor() {
    this.form = document.querySelector('form') as HTMLFormElement;
    this.addressIn = document.querySelector('#address') as HTMLInputElement;
    this.configure();
  }

  private configure(): void {
    this.form.addEventListener('submit', this.submitHandler.bind(this));
  }

  private submitHandler(event: SubmitEvent) {
    event.preventDefault();
    const address = this.addressIn.value;
    console.log('submit form: ', address);
  }
}

export default Form;
