export declare enum SHPersonTitle {
    MR = "mr",// Monsieur
    MRS = "mrs",// Madame
    MISS = "miss",// Mademoiselle
    DR = "dr",// Docteur
    PR = "pr",// Professeur
    NA = "na"
}
export declare enum SHGender {
    NOT_KNOWN = "notKnown",
    MALE = "male",
    FEMALE = "female",
    NOT_APPLICABLE = "notApplicable"
}
export declare enum SHBloodType {
    O_POSITIVE = "O+",
    O_NEGATIVE = "O-",
    A_POSITIVE = "A+",
    A_NEGATIVE = "A-",
    B_POSITIVE = "B+",
    B_NEGATIVE = "B-",
    AB_POSITIVE = "AB+",
    AB_NEGATIVE = "AB-"
}
export declare enum SHMaritalStatus {
    SINGLE = "single",
    MARRIED = "married",
    DIVORCED = "divorced",
    WIDOWED = "widowed"
}
export interface SHPersonName {
    firstName: string;
    lastName: string;
    title?: SHPersonTitle;
}
