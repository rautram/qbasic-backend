/*

SELECT a.answer, u1.name as "answerby", ar.reportanswer, u2.name as "reportby" from answers a left join user u1 on a.answerby = u1.userid left join answerreport ar on a.answerid = ar.answerid left JOIN user u2 on ar.answerreportby = u2.userid WHERE a.questionid = "7dbacedc8df84009ba3a96d61285e76c";s
*/
