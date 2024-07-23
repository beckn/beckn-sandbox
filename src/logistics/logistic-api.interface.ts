import { LogisticClientDTO } from "./dto/logistic.dto";

export interface LogisticApiInterface {
    search: (logisticRequest: LogisticClientDTO) => any;
    select: (logisticRequest: LogisticClientDTO) => any;
    init: (logisticRequest: LogisticClientDTO) => any;
    confirm: (logisticRequest: LogisticClientDTO) => any;
    status: (logisticRequest: LogisticClientDTO) => any;
    cancel: (logisticRequest: LogisticClientDTO) => any;
    support: (logisticRequest: LogisticClientDTO) => any;
    rating: (logisticRequest: LogisticClientDTO) => any;
    update: (logisticRequest: LogisticClientDTO) => any;
    track: (logisticRequest: LogisticClientDTO) => any;
}
