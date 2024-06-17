import { ContactForm } from "./app/ContactForm";
import { AntWidgetFactory } from "./ant/AntWidgetFactory";
import { MaterialWidgetFactory } from "./material/MaterialWidgetFactory";

new ContactForm().render(new AntWidgetFactory());
new ContactForm().render(new MaterialWidgetFactory());
