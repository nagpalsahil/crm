export class Policy {
    applicationNumber?: number;
    planName?: string;
    policyInforcementDate: string;
    policyTerm?:number;
    policyPayingTerm?:number;
    policyStatusAsOnMonthend: string;
    annualizedTargetPermium?: number;

    ownerClientId?: number;
    ownerName: string;
    ownerGender: string;
    ownerExactOccupation?: string;
    numberOfPolicies: number;
    channel: string;
    education: string;
    policyAging: string;
    
    customerSegment: string;
    hni: string;
    priority: string;
}
