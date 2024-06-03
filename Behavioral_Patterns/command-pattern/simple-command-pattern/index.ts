import { AddCustomerCommand } from "./AddCustomerCommand";
import { Button } from "./Button";
import { CustomerService } from "./CustomerService";

const customerService = new CustomerService();
const addCustomerCommand = new AddCustomerCommand(customerService);
const addCustomerBtn = new Button(addCustomerCommand);

addCustomerBtn.setLabel("Add Customer");
addCustomerBtn.click();
