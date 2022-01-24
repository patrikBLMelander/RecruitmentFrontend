//export const START_URL = "https://exjobbrecruitment.herokuapp.com";
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
export const login = START_URL+BASE_API+"/login";
export const register = START_URL+PUBLIC+CREATE;

// admin endpoints
export const changNicknamePresentaion = START_URL+ADMIN+UPDATE+NICKNAME;
export const createAdmin = START_URL+ADMIN+CREATE;
export const getAllCAndidates = START_URL+ADMIN+CANDIDATES;
export const createNewJobOffer = START_URL+ADMIN+JOB_OFFER+CREATE;
export const getJobOfferDetails = START_URL+ADMIN+JOB_OFFER;
export const addRecruitmentStep = START_URL+ADMIN+RECRUITMENT+UPDATE;
export const deleteRecruitmentStep = START_URL+ADMIN+RECRUITMENT+DELETE;
export const moveRecruitmentStep = START_URL+ADMIN+JOB_OFFER+UPDATE;
export const setRate = START_URL+ADMIN+UPDATE+RATE;
export const moveCandidate = START_URL+ADMIN+RECRUITMENT+CANDIDATES;

//candidate endpoints
export const updatePresentation = START_URL+CANDIDATES+PRESENTATION
export const addExperience = START_URL+CANDIDATES+EXPERIENCE;
export const deleteExperience = START_URL+CANDIDATES+EXPERIENCE+DELETE;
export const addEducation = START_URL+CANDIDATES+EDUCATION;
export const deleteEducation = START_URL+CANDIDATES+EDUCATION+DELETE;
export const addCompetence = START_URL+CANDIDATES+COMPETENCE;
export const deleteCompetence = START_URL+CANDIDATES+COMPETENCE+DELETE;
export const updatePersonality = START_URL+CANDIDATES+UPDATE+PERSONALITY;
export const applyForJob = START_URL+CANDIDATES+JOB_OFFER;
export const updatePassword = START_URL+CANDIDATES+UPDATE+PASSWORD;
export const updateColor = START_URL+CANDIDATES+UPDATE+COLOR;