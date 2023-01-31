export interface settingsPayload {
  newValue: number;
  type: settingsType;
}

export type settingsType = 'changeMin' | 'changeMax';
