export class GovernmentFormDetail{
    Name: string = "";
    Year: number = 0;
    Department: string = "";
    DownloadLink: string = "";
    Details: FormDetails = new FormDetails();
}

export class FormDetails {
    Requirements: string = "";
}