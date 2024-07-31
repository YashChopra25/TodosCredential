export interface arrayType {
    id: string;
    title: string;
    description: string;
    priority: "low" | "medium" | "urgent";
    date: string;
    createdAt: string;
    status: "to_do" | "in_progress" | "under_review" | "finished"
}
export interface initialStateType {
    name: string,
    email: string,
    to_do: arrayType[] | [],
    in_progress: arrayType[] | [],
    under_review: arrayType[] | [],
    finished: arrayType[] | [],
}
export interface tododetailType {
    deadline: string | undefined;
    description: string;
    priority: string;
    status: string
    title: string
    date:string| undefined;
}