export interface Participant {
    id?: number;
    name: string;
    pannumber: string;
    probablity: RetentionProbablity;
    createdAt: string;
}

export enum RetentionProbablity{
    Low=1,
    Medium=2,
    High=3
}