/**
 * API ENDPOINTS
 * =============
 * Backend API endpoint'lerinin merkezi yönetimi
 * 
 * KULLANIM:
 * - Production (Kubernetes): NEXT_PUBLIC_API_BASE_URL env variable kullan
 * - Development (Local): http://localhost:3019 (veya backend port'un)
 * 
 * .env.local dosyasına ekle:
 * NEXT_PUBLIC_API_BASE_URL=http://localhost:3019
 * 
 * Production'da:
 * NEXT_PUBLIC_API_BASE_URL=/api
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

// AUTH API
export const AUTH_API = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  KVKK: `${API_BASE_URL}/auth/setKvkk`,
} as const;

// STUDENT API
export const STUDENT_API = {
  GET_ALL: `${API_BASE_URL}/students/get-all-students`,
  ADD: `${API_BASE_URL}/students/add-student`,
  DELETE: `${API_BASE_URL}/students/delete-student-by-tcNo`,
  GET_BY_GRADE: `${API_BASE_URL}/students/get-students-by-grade`,
  MULTIPLE_ADD: `${API_BASE_URL}/students/add-multiple-students`,
  GET_STUDENTS_BY_SECTION: `${API_BASE_URL}/students/get-students-by-section`,
  GET_BY_ID: `${API_BASE_URL}/students/student-by-id`,
} as const;

// LESSON API
export const LESSON_API = {
  ADD: `${API_BASE_URL}/lessons/add-lesson`,
  GET_ALL: `${API_BASE_URL}/lessons/get-all-lessons`,
  DELETE: `${API_BASE_URL}/lessons/delete-lesson`,
} as const;

// TOPIC API
export const TOPIC_API = {
  ADD: `${API_BASE_URL}/topics/add-topic`,
  GET_BY_ID: `${API_BASE_URL}/topics/get-topic-by-lessonId`,
  DELETE: `${API_BASE_URL}/topics`,
  UPDATE: `${API_BASE_URL}/topics`,
} as const;

// GRADE API
export const GRADE_API = {
  GET_ALL: `${API_BASE_URL}/grades/get-all-grades`,
  ADD: `${API_BASE_URL}/grades/add-grade`,
  DELETE: `${API_BASE_URL}/grades/delete-grade`,
  GET_BY_CLASS: `${API_BASE_URL}/grades/get-students-by-class`,
  UPDATE: `${API_BASE_URL}/grades/update-grade`,
} as const;

// SECTION API
export const SECTION_API = {
  GET_ALL: `${API_BASE_URL}/sections/get-all-sections`,
  ADD: `${API_BASE_URL}/sections/add-section`,
  DELETE: `${API_BASE_URL}/sections/delete-section`,
  GET_BY_CLASS: `${API_BASE_URL}/sections/get-students-by-class`,
  GET_SECTION_BY_GRADE: `${API_BASE_URL}/sections/get-sections-by-grade`,
  UPDATE: `${API_BASE_URL}/sections/update-section`,
} as const;

// HOMEWORK API
export const HOMEWORK_API = {
  ADD: `${API_BASE_URL}/homeworks/create-homework`,
  GET_ALL: `${API_BASE_URL}/homeworks/get-all-homework`,
  DELETE: `${API_BASE_URL}/homeworks/delete-homework`,
  GET_BY_ID: `${API_BASE_URL}/homeworks/get-homework-by-id`,
  DELETE_ALL: `${API_BASE_URL}/homeworks/delete-all-homework`,
} as const;

// STUDENT HOMEWORK API
export const STUDENT_HOMEWORK_API = {
  ADD: `${API_BASE_URL}/studenthomework/add-homework-to-student`,
  GET_ALL: `${API_BASE_URL}/studenthomework/get-all`,
  GET_BY_STATUS: `${API_BASE_URL}/studenthomework/get-all-by-status`,
  GET_ASSIGNED_CLASSES: `${API_BASE_URL}/studenthomework/get-assigned-classes`,
  GET_DETAILS_BY_CLASS_AND_SECTION: `${API_BASE_URL}/studenthomework/get-homework-details-by-class-and-section`,
  GET_HOMEWORK: `${API_BASE_URL}/studentHomework/get-student-homework`,
  GET_ACTIVE_HOMEWORK: `${API_BASE_URL}/studentHomework/get-student-active-homework`,
} as const;

// GUIDANCE API
export const GUIDANCE_API = {
  ADD: `${API_BASE_URL}/guidance/create-grade-to-student`,
  GET_BY_STUDENT_ID: `${API_BASE_URL}/guidance/get-grade-by-studentId`,
  GET_ACTIVE_GUIDANCE: `${API_BASE_URL}/studentGuidance/get-student-guidance`,
} as const;

// ATTENDANCE API
export const ATTENDANCE_API = {
  ADD: `${API_BASE_URL}/attendance/add-attendance-to-student`,
  DELETE: `${API_BASE_URL}/attendance/add-attendance-to-student-delete`,
  GET_ALL: `${API_BASE_URL}/attendance/get-all-by-status`,
  GET_ALL_FILTERED: `${API_BASE_URL}/attendance/get-all-by-lesson`,
  GET_ATTENDANCE: `${API_BASE_URL}/studentAttendance/get-student-attendance`,
} as const;

// ANNOUNCEMENT API
export const ANNOUNCEMENT_API = {
  ADD: `${API_BASE_URL}/annoucement/create-annoucement`,
  GET_ALL: `${API_BASE_URL}/annoucement/get-all-annoucement`,
  DELETE: `${API_BASE_URL}/annoucement/delete-annoucement`,
  GET_BY_TYPE: `${API_BASE_URL}/studentAnnoucement/get-by-annoucement-type`,
  GET_TEACHER_ANNOUNCEMENTS: `${API_BASE_URL}/teacherAnnoucement/get-by-annoucement-type`,
} as const;

// VIDEO SOLUTION API
export const VIDEO_SOLUTION_API = {
  GET_ALL: `${API_BASE_URL}/videoSolution/get-exams`,
  GET_ANSWER_KEY: `${API_BASE_URL}/videoSolution/get-anser-key`,
  ADD: `${API_BASE_URL}/videoSolution/add-answer-key`,
  SAVE_RESULTS: `${API_BASE_URL}/videoSolution/save-answers`,
  DELETE: `${API_BASE_URL}/videoSolution/delete-exam`,
} as const;

// FMT API
export const FMT_API = {
  UPLOAD_FMT: `${API_BASE_URL}/fmt/upload-fmt`,
  SAVE_FMT_CONFIG: `${API_BASE_URL}/fmt/save-fmt-config`,
  GET_FMT_CONFIGS: `${API_BASE_URL}/fmt/get-fmt-configs`,
  GET_FMT_CONFIG_BY_ID: `${API_BASE_URL}/fmt/get-fmt-config`,
  DELETE_FMT: `${API_BASE_URL}/fmt/delete-config`,
} as const;

// EXAM API
export const EXAM_API = {
  SAVE: `${API_BASE_URL}/exam-results`,
  GET_BY_ID: `${API_BASE_URL}/exam-results/getExamResultById`,
  GET_BY_TC: `${API_BASE_URL}/exam-results/get-student-exams-detail`,
  GET_BY_TC_REPORT: `${API_BASE_URL}/exam-results/get-student-result-by-exam-id-and-tc`,
  GET_MULTI_REPORT: `${API_BASE_URL}/exam-results/get-student-results-by-exam-ids-and-tc`,
} as const;

// CONTENT API
export const CONTENT_API = {
  GET_ALL: `${API_BASE_URL}/contents/get-all-contents`,
  ADD: `${API_BASE_URL}/contents/add-content`,
  ADD_BATCH: `${API_BASE_URL}/contents/add-content-batch`,
  GET_BY_ID: `${API_BASE_URL}/topics/get-topic-by-lessonId`,
  DELETE: `${API_BASE_URL}/contents/delete-content`,
  UPDATE: `${API_BASE_URL}/topics`,
} as const;

// MOBILE NOTIFICATION API
export const MOBILE_NOTIFICATION_API = {
  HOMEWORK_NOTIFICATION: `${API_BASE_URL}/mobileNotification/send-homework-notification`,
  ATTENDANCE_NOTIFICATION: `${API_BASE_URL}/mobileNotification/send-notification`,
  PUSH_NOTIFICATION: `${API_BASE_URL}/mobileNotification/send-push-notification`,
  BULK_NOTIFICATION: `${API_BASE_URL}/mobileNotification/send-bulk-notifications`,
  GET_NOTIFICATIONS_BY_TC: (tcNo: string) => `${API_BASE_URL}/mobileNotification/notifications/${tcNo}`,
} as const;

// STUDENT AUTH API
export const STUDENT_AUTH_API = {
  LOGIN: `${API_BASE_URL}/studentAuth/login`,
  UPDATE_PASSWORD: `${API_BASE_URL}/studentAuth/update-password`,
  KVKK: `${API_BASE_URL}/studentAuth/setKvkk`,
  GET_STUDENT_BY_TC: `${API_BASE_URL}/studentAuth/get-own-info`,
} as const;

// STUDENT LESSON PROGRAM API
export const STUDENT_LESSON_PROGRAM_API = {
  GET_BY_TC: `${API_BASE_URL}/student-lesson-program`,
} as const;

// TEACHER API
export const TEACHER_API = {
  ADD: `${API_BASE_URL}/teacher/add-teacher`,
  GET_ALL: `${API_BASE_URL}/teacher/get-all-teacher`,
  DELETE: `${API_BASE_URL}/teacher/delete-teacher-by-tcNo`,
} as const;

// TEACHER AUTH API
export const TEACHER_AUTH_API = {
  LOGIN: `${API_BASE_URL}/teacherAuth/login`,
  UPDATE_PASSWORD: `${API_BASE_URL}/teacherAuth/update-password`,
  GET_TEACHER_INFO: `${API_BASE_URL}/teacherAuth/get-own-info`,
  KVKK: `${API_BASE_URL}/teacherAuth/setKvkk`,
} as const;

// CHATBOT API
export const CHATBOT_API = {
  SEND: `${API_BASE_URL}/anthropic/chat`,
} as const;

// PARENT API
export const PARENT_API = {
  GET_ALL: `${API_BASE_URL}/parents/get-all`,
  LOGIN: `${API_BASE_URL}/parents/login`,
  KVKK: `${API_BASE_URL}/parents/setKvkk`,
  UPDATE_PASSWORD: `${API_BASE_URL}/parents/update-password`,
  ADD_PARENT: `${API_BASE_URL}/parents/add-parent`,
  GET_STUDENT_GUIDANCES: `${API_BASE_URL}/parents/get-student-guidances`,
  GET_STUDENT_DATA: `${API_BASE_URL}/parents/get-student-data`,
} as const;

// PAYMENT API
export const PAYMENT_API = {
  ADD_PAYMENT: `${API_BASE_URL}/accounting/create-accounting`,
  GET_STUDENT_PAYMENT: `${API_BASE_URL}/accounting/get-student-payment`,
} as const;

// MEAL API
export const MEAL_API = {
  ADD_OR_UPDATE_MEAL: `${API_BASE_URL}/meals`,
  GET_ALL_MEALS: `${API_BASE_URL}/meals`,
  GET_MEAL_BY_DATE: `${API_BASE_URL}/meals/by-date`,
  DELETE_MEAL: `${API_BASE_URL}/meals`,
  DOWNLOAD_PDF: `${API_BASE_URL}/meals/download-pdf`,
  DOWNLOAD_MONTHLY_PDF: `${API_BASE_URL}/meals/download-monthly-pdf`,
} as const;

// STUDENT MEAL ATTENDANCE API
export const STUDENT_MEAL_ATTENDANCE_API = {
  SAVE_ATTENDANCE: `${API_BASE_URL}/studentMealAttendance/saveAttendance`,
  GET_ATTENDANCE_BY_DATE: `${API_BASE_URL}/studentMealAttendance/getAttendanceByDate`,
  GET_ATTENDANCE_BY_DATE_AND_STUDENT: `${API_BASE_URL}/studentMealAttendance/attendance/by-student`,
} as const;

// STUDENT MEAL SELECTION API
export const STUDENT_MEAL_SELECTION_API = {
  SAVE_SELECTIONS: `${API_BASE_URL}/studentMealAttendance/saveSelections`,
  GET_SELECTIONS_BY_DATE_AND_STUDENT: `${API_BASE_URL}/studentMealAttendance/selections/by-student`,
  GET_SELECTIONS_BY_DATE_STUDENT_TYPE: `${API_BASE_URL}/studentMealAttendance/selections/by-student-and-type`,
} as const;

// LESSON PROGRAM API
export const LESSON_PROGRAM_API = {
  ADD_OR_UPDATE: `${API_BASE_URL}/lesson-program`,
  GET_BY_SECTION: `${API_BASE_URL}/lesson-program`,
} as const;

// EVENT API
export const EVENT_API = {
  GET_ALL: `${API_BASE_URL}/events`,
  GET_BY_ID: `${API_BASE_URL}/events`,
  CREATE: `${API_BASE_URL}/events`,
  DELETE: `${API_BASE_URL}/events`,
  ADD_IMAGES: `${API_BASE_URL}/events`,
  DELETE_IMAGE: `${API_BASE_URL}/events`,
} as const;

// CHAT API
export const CHAT_API = {
  GET_CONVERSATION: (userId1: string, userId2: string) => 
    `${API_BASE_URL}/chat/conversationsAll/${userId1}/${userId2}`,
  GET_ALL_CONVERSATIONS: `${API_BASE_URL}/chat/conversations`,
  BROADCAST: `${API_BASE_URL}/chat/broadcast`,
  SEND_TO_MANY: `${API_BASE_URL}/chat/send-to-many`,
} as const;

// STUDENT GALLERY API
export const STUDENT_GALLERY_API = {
  ADD_IMAGE: `${API_BASE_URL}/studentsGallery/add-image`,
  DELETE_IMAGE: `${API_BASE_URL}/studentsGallery/image`,
  GET_STUDENT_IMAGES: `${API_BASE_URL}/studentsGallery/student`,
  GET_ALL_IMAGES: `${API_BASE_URL}/studentsGallery/all`,
} as const;

// Export base URL for manual construction if needed
export { API_BASE_URL };

