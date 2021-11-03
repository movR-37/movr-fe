import { Store } from "pullstate";

interface DataStore {
  data: EventDisplay[];
  filteredData?: EventDisplay[];
}

export interface EventDisplay {
  name: string;
  image: string;
  meta?: string;
  description: string;
  extra?: string;
}

export const dataStore = new Store<DataStore>({
  data: [],
});
