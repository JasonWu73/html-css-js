class Form {
  private form: HTMLFormElement;

  constructor() {
    this.form = document.querySelector('form') as HTMLFormElement;
    this.configure();
  }

  private configure(): void {
    this.form.addEventListener('submit', this.submitHandler.bind(this));
  }

  private submitHandler(event: SubmitEvent) {
    event.preventDefault();
    console.log('submit form')
  }
}

export default Form;
