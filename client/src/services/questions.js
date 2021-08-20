import api from "./apiConfig"

export const getAllQuestions = async () => {
  const res = await api.get("/questions")
  return res.data
}


export const getOneQuestion = async (questionID) => {
  const res = await api.get(`/questions/${questionID}`)
  console.log(res.data)
  return res.data
}

export const createQuestion = async (questionData) => {
  const res = await api.post("/questions", { post: questionData })
  console.log(res.data)
  return res.data
}

export const deleteQuestion = async (questionID) => {
  await api.delete(`/questions/${questionID}`)
}