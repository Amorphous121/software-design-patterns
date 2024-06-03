import { CustomerService } from "./CustomerService";
import { ICommand } from "./command.interface";

export class AddCustomerCommand implements ICommand {
  constructor(private customerService: CustomerService) {}

  execute(): void {
    this.customerService.addCustomer();
  }
}
