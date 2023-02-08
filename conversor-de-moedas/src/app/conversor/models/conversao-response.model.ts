interface Base {
  code: string;
  codein: string;
  name: string;
  high: number;
  low: number;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

export class ConversaoResponse {
  constructor(public base?: Base) {}
}
