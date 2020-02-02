class controler
{
    view;
    model;

    constructor(view, model)
    {
      this.view = view;
      this.model = model;

      var events_list = new events();
      events_list.add_event("verifica", this.verificaNumarul.bind(this));
      this.view.set_events(events_list);
    }
    verificaNumarul()
    {
      this.model = new model();
    }
}
const app = new controler(new view(), new model());
