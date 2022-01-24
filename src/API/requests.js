function  AddExperienceRequest (userId, title, startDate, endDate, description) {
    return(
    {
        userId,
        title,
        startDate,
        endDate,
        description

    })
}
function  AddEducationRequest (userId, title, startDate, endDate, description) {
    return(
    {
        userId,
        title,
        startDate,
        endDate,
        description

    })
}
function  AddCompetenceRequest (userId, name, value) {
    return(
    {
        userId,
        name,
        value
    })
}
function  AddRecruitmentsRequest (jobOfferId, title) {
    return(
    {
        jobOfferId,
        title,
    })
}

function  ApplyForJobRequest (candidateId,jobOfferId) {
    return(
    {
        candidateId,
        jobOfferId
    })
}
function  ChangeRecruitmentIndex (recruitmentId, newIndex, jobOfferId) {
    return(
    {
        recruitmentId, 
        newIndex, 
        jobOfferId
    })
}
function  ChangListForCandidateRequest (candidateId, oldRecruitmentId, newRecruitmentId) {
    return(
    {
        candidateId, 
        oldRecruitmentId, 
        newRecruitmentId
    })
}
function  ColorChoiceRequest (candidateId, colorChoice) {
    return(
    {
        candidateId, 
        colorChoice
    })
}
function  CreateNewAdminRequest (firstName, lastName, email, password) {
    return(
    {
        firstName, 
        lastName, 
        email, 
        password
    })
}
function  CreateNewJobOfferRequest (title, applyDate, preview, companyDescription, aboutRole, competenceList, location) {
    return(
    {
        title, 
        applyDate,
        preview, 
        companyDescription, 
        aboutRole, 
        competenceList, 
        location
    })
}
function  DeleteRequest (candidateId, toRemove) {
    return(
    {
        candidateId, 
        toRemove
    })
}
function  GetFullDetailJobOfferRequest (jobOfferId) {
    return(
    {
        jobOfferId
    })
}
function  BYTUTDENicknamePresentationChoiceRequestNNA (candidateId, nicknameChoice) {
    return(
    {
        candidateId, 
        nicknameChoice
    })
}
function  RegisterCandidateRequest (nickName, firstName, lastName, phone, email, password) {
    return(
    {
        nickName, 
        firstName, 
        lastName, 
        phone, 
        email, 
        password
    })
}
function  RemoveRecruitmentsRequest (recruitmentId, jobOfferId) {
    return(
    {
        recruitmentId, 
        jobOfferId
    })
}

function SetRateOnCandidateRequest (candidateId, jobOfferId, rate ) {
    return(
    {
        candidateId, 
        jobOfferId, 
        rate 
    })
}
function UpdatePasswordRequest (userName, newPassword, oldPassword) {
    return(
    {
         userName,
         newPassword,
         oldPassword
    })
}
function UpdatePersonalityRequest (userId, openness, conscientiousness, extroversion, agreeableness, neuroticism) {
    return(
    {
        userId,
        openness,
        conscientiousness,
        extroversion,
        agreeableness,
        neuroticism
    })
}
function UpdatePresentationRequest (userId, presentation) {
    return(
    {
        userId,
        presentation
    })
}
