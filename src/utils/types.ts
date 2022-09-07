export type Template = {
  id?: string;
  name?: string;
  foregroundColor?: string;
  labelColor?: string;
  backgroundColor?: string;
};

export interface LocalsDto extends QueryDto, GenerateDto {}

export interface QueryDto {
  userId: string;
  name: string;
  templateId: string;
}

export interface GenerateDto {
  passPath?: string;
}
