import Api from './Api';
import axios from 'axios';

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
};

class Form {
  private form: HTMLFormElement;
  private addressIn: HTMLInputElement;

  constructor() {
    this.form = document.querySelector('form')! as HTMLFormElement;
    this.addressIn = document.querySelector('#address')! as HTMLInputElement;
    this.configure();
  }

  private configure(): void {
    this.form.addEventListener('submit', this.submitHandler.bind(this));
  }

  private submitHandler(event: SubmitEvent): void {
    event.preventDefault();
    const address = this.addressIn.value;
    this.sendApi(address);
  }

  private async sendApi(address: string): Promise<void> {
    const response = await axios.get<Post>(`${Api.GET_POSTS}/${encodeURI(address)}`);
    console.log(response.data.title);
  }
}

export default Form;
