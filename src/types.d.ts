interface InputData {
  id: number;
  json: string;
}

interface OutputData extends InputData {
  is_valid: boolean;
}

type MatrixData = Array<number | string>[];
