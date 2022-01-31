//const START_URL = "https://exjobbrecruitment.herokuapp.com";
 const START_URL = "http://localhost:7000";

//export Constants API
 const BASE_API = "/recruitment/v1";
 const PUBLIC = "/public";
 const CANDIDATES = "/candidates";
 const ADMIN = "/admin";
 const CREATE = "/create";
 const UPDATE = "/update";
 const EXPERIENCE = "/experience";
 const EDUCATION = "/education";
 const COMPETENCE = "/competence";
 const PRESENTATION = "/presentation";
 const JOB_OFFER = "/job_offer";
 const PERSONALITY = "/personality";
 const PASSWORD = "/password";
 const RATE = "/rate";
 const COLOR = "/color";
 const NICKNAME = "/nickname";
 const DELETE = "/delete";
 const RECRUITMENT = "/recruitment";


//public endpoints
export const getAllJobOffers = START_URL+BASE_API+PUBLIC+JOB_OFFER;
export const login = START_URL+"/login";
export const register = START_URL+BASE_API+PUBLIC+CREATE;

// admin endpoints
export const changNicknamePresentaion = START_URL+BASE_API+ADMIN+UPDATE+NICKNAME;
export const createAdmin = START_URL+BASE_API+ADMIN+CREATE;
export const getAllCandidates = START_URL+BASE_API+PUBLIC+CANDIDATES;
export const createNewJobOffer = START_URL+BASE_API+ADMIN+JOB_OFFER+CREATE;
export const getJobOfferDetails = START_URL+BASE_API+ADMIN+JOB_OFFER;
export const addRecruitmentStep = START_URL+BASE_API+ADMIN+RECRUITMENT+UPDATE;
export const deleteRecruitmentStep = START_URL+BASE_API+ADMIN+RECRUITMENT+DELETE;
export const moveRecruitmentStep = START_URL+BASE_API+ADMIN+JOB_OFFER+UPDATE;
export const setRate = START_URL+BASE_API+ADMIN+UPDATE+RATE;
export const moveCandidate = START_URL+BASE_API+ADMIN+RECRUITMENT+CANDIDATES;
export const deleteAdmin = START_URL+BASE_API+ADMIN+DELETE;

//candidate endpoints
export const getCandidateInfo = START_URL+BASE_API+CANDIDATES
export const updatePresentation = START_URL+BASE_API+CANDIDATES+UPDATE+PRESENTATION
export const addExperience = START_URL+BASE_API+CANDIDATES+EXPERIENCE;
export const deleteExperience = START_URL+BASE_API+CANDIDATES+EXPERIENCE+DELETE;
export const addEducation = START_URL+BASE_API+CANDIDATES+EDUCATION;
export const deleteEducation = START_URL+BASE_API+CANDIDATES+EDUCATION+DELETE;
export const addCompetence = START_URL+BASE_API+CANDIDATES+COMPETENCE;
export const deleteCompetence = START_URL+BASE_API+CANDIDATES+COMPETENCE+DELETE;
export const updatePersonality = START_URL+BASE_API+CANDIDATES+UPDATE+PERSONALITY;
export const applyForJob = START_URL+BASE_API+CANDIDATES+JOB_OFFER;
export const updatePassword = START_URL+BASE_API+CANDIDATES+UPDATE+PASSWORD;
export const updateColor = START_URL+BASE_API+CANDIDATES+UPDATE+COLOR;
export const deleteCandidate = START_URL+BASE_API+CANDIDATES+DELETE;
export const getMyProcesses = START_URL+BASE_API+CANDIDATES+JOB_OFFER+RECRUITMENT;