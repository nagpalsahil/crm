export class Estimate {
    uniqueId: string;
    estimateId: string;
    name: string;
    description: string;
    aideInfo: AideInfo;
    projectInfo: ProjectInfo;
    latestApproved: string;
    latestSubmitted: string;
    rateCard: string;
    type: string;
    comments: string;
    version: string;
    freeze: boolean;
    state: string;
    cost: number;
    estimateUserDefinedUniqueId: string;
    constructor() {
        this.uniqueId = '';
        this.estimateId = '';
        this.name = '';
        this.description = '';
        this.aideInfo = new AideInfo();
        this.projectInfo = new ProjectInfo();
        this.latestApproved = '';
        this.latestSubmitted = '';
        this.rateCard = '';
        this.type = '';
    }
}
export class AideInfo {
    constructor() {
        this.name = '';
        this.bo=null;
        this.slo=null;
        this.to=null;
        this.additionalContact = [];
    }
    name!: string;
    bo!: ldapInfo;
    to!: ldapInfo;
    slo!: ldapInfo;
    additionalContact!: ldapInfo[];
}
export class ProjectInfo {
    constructor() {
        this.name = '';
        this.description = '';
        this.projectAlias = '';
        this.tags = [];
    }
    name: string;
    description: string;
    projectAlias: string;
    tags: string[];
}
export class ldapInfo {
    msid: string;
    displayName: string;
    emailAddress: string;
    employeeId: string;
    constructor(details: any) {
        this.msid = details.msid;
        this.displayName = details.displayName;
        this.emailAddress = details.emailAddress;
        this.employeeId = details.employeeId;
    }
}
