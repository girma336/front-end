export enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export enum DATAURLS {
  GETINTERESTS = "interests",
  GETSKILLS = "skills",
  GETQUESTIONS = "questions",
  POSTINTERESTS = "select-interests",
  POSTSKILLS = "save-user-skills-info",
  POSTQUESTIONS = "save-user-questions-info",
}

export enum PROFILEURLS {
  POSTUSERPROFILE = "update-user-role",
  GETSKILLSINTERESTS = "get-user-skills-and-interests",
  GETQUESTIONRESPONSES = "get-user-questionaire-responses",
}
